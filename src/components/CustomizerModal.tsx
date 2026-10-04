import React, { useState } from 'react';
import type { PortfolioData, TimelineItem } from '../types/portfolio';
import { X, Save, RotateCcw, Download, Upload, Plus, Trash2, Edit3, Image, Video, Link, Briefcase, GraduationCap, Sparkles, User } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSave: (newData: PortfolioData) => void;
  onReset: () => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
  onReset,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'timeline' | 'projects' | 'rawJson'>('timeline');
  const [formData, setFormData] = useState<PortfolioData>(data);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Sync state if modal reopens
  React.useEffect(() => {
    setFormData(data);
  }, [data, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(formData);
    setSaveSuccess(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleExportJson = () => {
    const jsonStr = JSON.stringify(formData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolioData_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.profile && parsed.experiences) {
          setFormData(parsed);
          alert('Nhập dữ liệu JSON thành công! Hãy bấm "Lưu thay đổi" để áp dụng.');
        } else {
          alert('File JSON không đúng cấu trúc Portfolio.');
        }
      } catch (err) {
        alert('Lỗi đọc file JSON: ' + (err as Error).message);
      }
    };
    reader.readAsText(file);
  };

  // Timeline Item helpers
  const handleUpdateExperience = (index: number, updatedItem: TimelineItem) => {
    const newExps = [...formData.experiences];
    newExps[index] = updatedItem;
    setFormData({ ...formData, experiences: newExps });
  };

  const handleAddExperience = () => {
    const newItem: TimelineItem = {
      id: `exp-${Date.now()}`,
      company: 'Công ty Mới',
      role: 'Software Engineer',
      period: 'Tháng 09/2026 - Hiện tại',
      duration: 'Mới',
      location: 'TP. Hồ Chí Minh · On-site',
      workType: 'Internship',
      logo: '/logos/netviet-logo.svg',
      description: 'Mô tả tóm tắt vai trò và trách nhiệm tại vị trí mới...',
      responsibilities: [
        'Phát triển tính năng với quy trình AI-assisted coding',
        'Tham gia review code và kiểm thử phần mềm'
      ],
      tags: ['AI Workflows', 'TypeScript', 'QA/QC'],
      media: {
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoTitle: 'Video Demo Sản phẩm'
      }
    };
    setFormData({ ...formData, experiences: [newItem, ...formData.experiences] });
  };

  const handleDeleteExperience = (index: number) => {
    if (confirm('Bạn có chắc chắn muốn xóa mốc kinh nghiệm này?')) {
      const newExps = formData.experiences.filter((_, i) => i !== index);
      setFormData({ ...formData, experiences: newExps });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md">
      <div className="fixed inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md shadow-red-600/20">
              <Edit3 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                Trình Tùy chỉnh Portfolio Trực quan
                {saveSuccess && (
                  <span className="text-xs font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    Đã lưu thành công!
                  </span>
                )}
              </h2>
              <p className="text-xs text-slate-500">
                Thêm logo, video demo, ảnh minh họa hoặc cập nhật hồ sơ ngay tức thì
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-200 bg-slate-50/50 overflow-x-auto text-xs font-semibold">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex items-center gap-1.5 px-4 py-2.5 border-b-2 transition-all ${
              activeTab === 'timeline'
                ? 'border-red-600 text-red-600 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Kinh nghiệm (Timeline & Demo)
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-1.5 px-4 py-2.5 border-b-2 transition-all ${
              activeTab === 'profile'
                ? 'border-red-600 text-red-600 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <User className="w-4 h-4" />
            Hồ sơ Cá nhân & Học vấn
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-1.5 px-4 py-2.5 border-b-2 transition-all ${
              activeTab === 'projects'
                ? 'border-red-600 text-red-600 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Dự án AI & Video Demo
          </button>

          <button
            onClick={() => setActiveTab('rawJson')}
            className={`flex items-center gap-1.5 px-4 py-2.5 border-b-2 transition-all ${
              activeTab === 'rawJson'
                ? 'border-red-600 text-red-600 font-bold'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Download className="w-4 h-4" />
            Xuất / Nhập JSON
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6 text-sm bg-white">
          
          {/* TAB 1: TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">Danh sách các mốc Timeline</h3>
                  <p className="text-xs text-slate-500">
                    Mỗi mốc có thể chèn link Video Demo (YouTube, Loom, MP4), ảnh và logo công ty.
                  </p>
                </div>
                <button
                  onClick={handleAddExperience}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 flex items-center gap-1.5 transition-all"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Thêm Mốc mới
                </button>
              </div>

              <div className="space-y-6">
                {formData.experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div className="flex items-center gap-3">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-10 h-10 object-contain bg-white rounded-lg p-1 border border-slate-200 shadow-xs"
                        />
                        <div>
                          <span className="font-bold text-slate-900">{exp.company}</span>
                          <span className="text-xs text-slate-500 ml-2">({exp.role})</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDeleteExperience(index)}
                        className="text-red-600 hover:text-red-700 p-1.5 rounded hover:bg-red-50 transition-colors"
                        title="Xóa mốc này"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Inputs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Tên Công ty</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) =>
                            handleUpdateExperience(index, { ...exp, company: e.target.value })
                          }
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Vị trí đảm nhiệm</label>
                        <input
                          type="text"
                          value={exp.role}
                          onChange={(e) =>
                            handleUpdateExperience(index, { ...exp, role: e.target.value })
                          }
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Thời gian (Period)</label>
                        <input
                          type="text"
                          value={exp.period}
                          onChange={(e) =>
                            handleUpdateExperience(index, { ...exp, period: e.target.value })
                          }
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Đường dẫn Logo (URL hoặc local path)</label>
                        <input
                          type="text"
                          value={exp.logo}
                          onChange={(e) =>
                            handleUpdateExperience(index, { ...exp, logo: e.target.value })
                          }
                          placeholder="/logos/netviet-logo.svg hoặc https://..."
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-mono"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-slate-700 mb-1">Mô tả ngắn</label>
                        <textarea
                          rows={2}
                          value={exp.description}
                          onChange={(e) =>
                            handleUpdateExperience(index, { ...exp, description: e.target.value })
                          }
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                        ></textarea>
                      </div>

                      {/* Video and Image demo links */}
                      <div>
                        <label className="block text-xs font-bold text-red-600 mb-1 flex items-center gap-1">
                          <Video className="w-3.5 h-3.5" />
                          Link Video Demo (YouTube, Loom, MP4)
                        </label>
                        <input
                          type="text"
                          value={exp.media?.videoUrl || ''}
                          onChange={(e) =>
                            handleUpdateExperience(index, {
                              ...exp,
                              media: { ...exp.media, videoUrl: e.target.value },
                            })
                          }
                          placeholder="https://www.youtube.com/watch?v=..."
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800 mb-1 flex items-center gap-1">
                          <Image className="w-3.5 h-3.5 text-slate-700" />
                          Link Hình ảnh Demo / Minh họa
                        </label>
                        <input
                          type="text"
                          value={exp.media?.imageUrl || ''}
                          onChange={(e) =>
                            handleUpdateExperience(index, {
                              ...exp,
                              media: { ...exp.media, imageUrl: e.target.value },
                            })
                          }
                          placeholder="https://images.unsplash.com/..."
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                          <Link className="w-3.5 h-3.5" />
                          Website hoặc Demo URL
                        </label>
                        <input
                          type="text"
                          value={exp.media?.projectUrl || ''}
                          onChange={(e) =>
                            handleUpdateExperience(index, {
                              ...exp,
                              media: { ...exp.media, projectUrl: e.target.value },
                            })
                          }
                          placeholder="https://example.com"
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Thẻ kỹ năng (cách nhau bằng dấu phẩy)
                        </label>
                        <input
                          type="text"
                          value={exp.tags.join(', ')}
                          onChange={(e) =>
                            handleUpdateExperience(index, {
                              ...exp,
                              tags: e.target.value.split(',').map((t) => t.trim()).filter(Boolean),
                            })
                          }
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: PROFILE & EDUCATION */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <User className="w-4 h-4 text-red-600" />
                  Thông tin Cá nhân
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Họ và Tên</label>
                    <input
                      type="text"
                      value={formData.profile.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          profile: { ...formData.profile, name: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Tiêu đề nghề nghiệp</label>
                    <input
                      type="text"
                      value={formData.profile.title}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          profile: { ...formData.profile, title: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email liên hệ</label>
                    <input
                      type="email"
                      value={formData.profile.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          profile: { ...formData.profile, email: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Số điện thoại</label>
                    <input
                      type="text"
                      value={formData.profile.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          profile: { ...formData.profile, phone: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Giới thiệu ngắn (Bio)</label>
                    <textarea
                      rows={3}
                      value={formData.profile.bio}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          profile: { ...formData.profile, bio: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Education section */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-red-600" />
                  Học vấn & Bằng cấp (ĐH Tôn Đức Thắng)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Tên trường</label>
                    <input
                      type="text"
                      value={formData.education.school}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          education: { ...formData.education, school: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Điểm GPA toàn khóa</label>
                    <input
                      type="text"
                      value={formData.education.gpa}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          education: { ...formData.education, gpa: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-mono font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Xếp loại tốt nghiệp</label>
                    <input
                      type="text"
                      value={formData.education.classification}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          education: { ...formData.education, classification: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Logo trường TDTU</label>
                    <input
                      type="text"
                      value={formData.education.logo}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          education: { ...formData.education, logo: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-mono"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">Ảnh mặt chiếu phẳng bìa bằng TDTU</label>
                    <input
                      type="text"
                      value={formData.education.diplomaCover || '/images/tdtu-diploma-cover.jpg'}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          education: { ...formData.education, diplomaCover: e.target.value },
                        })
                      }
                      placeholder="/images/tdtu-diploma-cover.jpg"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROJECTS */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <h3 className="font-bold text-slate-900">Danh sách Dự án AI</h3>
              {formData.projects.map((proj, pIdx) => (
                <div
                  key={proj.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Tên dự án</label>
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => {
                          const updated = [...formData.projects];
                          updated[pIdx].title = e.target.value;
                          setFormData({ ...formData, projects: updated });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-red-600 mb-1 flex items-center gap-1">
                        <Video className="w-3.5 h-3.5" />
                        Link Video Demo (YouTube / Loom)
                      </label>
                      <input
                        type="text"
                        value={proj.videoUrl || ''}
                        onChange={(e) => {
                          const updated = [...formData.projects];
                          updated[pIdx].videoUrl = e.target.value;
                          setFormData({ ...formData, projects: updated });
                        }}
                        placeholder="https://www.youtube.com/watch?v=..."
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-mono"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mô tả dự án</label>
                      <textarea
                        rows={2}
                        value={proj.description}
                        onChange={(e) => {
                          const updated = [...formData.projects];
                          updated[pIdx].description = e.target.value;
                          setFormData({ ...formData, projects: updated });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Ảnh đại diện (URL)</label>
                      <input
                        type="text"
                        value={proj.imageUrl}
                        onChange={(e) => {
                          const updated = [...formData.projects];
                          updated[pIdx].imageUrl = e.target.value;
                          setFormData({ ...formData, projects: updated });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">GitHub Repo</label>
                      <input
                        type="text"
                        value={proj.githubUrl || ''}
                        onChange={(e) => {
                          const updated = [...formData.projects];
                          updated[pIdx].githubUrl = e.target.value;
                          setFormData({ ...formData, projects: updated });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-red-600 font-mono"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: JSON IMPORT/EXPORT */}
          {activeTab === 'rawJson' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                <p>
                  <strong>Lưu trữ dữ liệu:</strong> Khi bạn bấm <em>"Lưu thay đổi"</em>, toàn bộ thông tin sẽ được lưu vào trình duyệt (LocalStorage).
                </p>
                <p>
                  Bạn có thể <strong>Xuất JSON</strong> để lưu trữ lâu dài hoặc <strong>Nhập JSON</strong> khi muốn tải cấu hình đã lưu.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleExportJson}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 flex items-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Tải về file portfolioData.json
                </button>

                <label className="cursor-pointer px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 flex items-center gap-2 transition-all">
                  <Upload className="w-4 h-4" />
                  Nhập từ file JSON
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportJson}
                    className="hidden"
                  />
                </label>

                <button
                  onClick={() => {
                    if (confirm('Khôi phục về dữ liệu mặc định ban đầu? Mọi chỉnh sửa chưa xuất sẽ bị làm mới.')) {
                      onReset();
                      onClose();
                    }
                  }}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 flex items-center gap-2 transition-all ml-auto"
                >
                  <RotateCcw className="w-4 h-4" />
                  Khôi phục mặc định
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            {saveSuccess ? (
              <span className="text-red-600 font-bold">Đã lưu dữ liệu vào trình duyệt của bạn!</span>
            ) : (
              <span>Bấm "Lưu thay đổi" để áp dụng lên trang Portfolio</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Đóng
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-red-600 text-white hover:bg-red-700 shadow-md shadow-red-600/20 flex items-center gap-1.5 transition-all hover:scale-105"
            >
              <Save className="w-4 h-4" />
              Lưu thay đổi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
