import React, { useState } from 'react';
import type { TimelineItem } from '../types/portfolio';
import { Briefcase, Calendar, MapPin, Play, Image as ImageIcon, ExternalLink, Plus, Tag, X, ZoomIn } from 'lucide-react';
import { GithubIcon } from './Icons';
import { SectionMascot } from './SectionMascot';
import { useLanguage } from '../contexts/LanguageContext';

interface TimelineSectionProps {
  experiences: TimelineItem[];
  onOpenMediaModal: (media: { type: 'video' | 'image'; url: string; title: string }) => void;
  onOpenCustomizer: () => void;
}

const renderFormattedText = (text: string) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-slate-950">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 font-mono text-[12px] font-semibold border border-slate-200">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
};

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  experiences,
  onOpenMediaModal,
  onOpenCustomizer,
}) => {
  const { language, t } = useLanguage();
  const [playingInlineId, setPlayingInlineId] = useState<string | null>(null);

  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (url.includes('facebook.com') || url.includes('fb.watch')) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&autoplay=true&t=0`;
    }
    return url;
  };
  return (
    <section id="experience" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200 mb-4 shadow-xs">
              <Briefcase className="w-3.5 h-3.5 text-red-600" />
              {t('expBadge')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {t('expTitle')}
            </h2>
            <p className="mt-2 text-slate-600 text-base max-w-2xl font-medium">
              {t('expSubtitle')}
            </p>
          </div>

          <button
            onClick={onOpenCustomizer}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 transition-all hover:scale-105 shadow-xs"
          >
            <Plus className="w-3.5 h-3.5 text-red-600" />
            {t('expBtnAddTimeline')}
          </button>
        </div>

        {/* Content Row: Timeline on Left, Large Frameless 3D Mascot on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline Items Column */}
          <div className="lg:col-span-8">
            <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.filter((item) => item.id !== 'vco').map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Dot (Red Ring) */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-6 w-6 h-6 rounded-full bg-white border-2 border-red-600 ring-4 ring-red-50 flex items-center justify-center shadow-md group-hover:scale-125 group-hover:bg-red-600 transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-red-600 group-hover:bg-white transition-colors"></span>
              </div>

              {/* Card Container (Light Theme) */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl hover:border-red-300 transition-all duration-300">
                
                {/* Header: Company Logo, Role, Time */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-start gap-4">
                    {/* Company Logo Box */}
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white p-2 shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-200 overflow-hidden">
                      <img
                        src={item.logo}
                        alt={item.company}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                          {item.role}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-50 text-red-700 border border-red-200">
                          {item.workType}
                        </span>
                      </div>

                      <div className="text-base font-bold text-slate-700 mt-1">
                        {item.company}
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1 text-red-600 font-bold">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period} {item.duration && `· ${item.duration}`}
                        </span>
                        <span className="flex items-center gap-1 text-slate-600">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Media Action Buttons */}
                  <div className="flex flex-wrap sm:flex-col lg:flex-row items-center gap-2 self-start mt-2 sm:mt-0">
                    {item.media?.videoUrl && (
                      <button
                        onClick={() =>
                          onOpenMediaModal({
                            type: 'video',
                            url: item.media!.videoUrl!,
                            title: item.media!.videoTitle || `Demo: ${item.company} - ${item.role}`,
                          })
                        }
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-red-600 text-white hover:bg-red-700 shadow-sm shadow-red-600/20 transition-all hover:scale-105"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        {t('expBtnVideo')}
                      </button>
                    )}

                    {item.media?.imageUrl && (
                      <button
                        onClick={() =>
                          onOpenMediaModal({
                            type: 'image',
                            url: item.media!.imageUrl!,
                            title: item.media?.images?.[0]?.caption || `Hình ảnh minh họa: ${item.company}`,
                          })
                        }
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all cursor-pointer"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        {item.media?.images && item.media.images.length > 1
                          ? (language === 'en' ? `Photos (${item.media.images.length})` : `Xem Ảnh (${item.media.images.length})`)
                          : t('expBtnImages')}
                      </button>
                    )}

                    {item.media?.projectUrl && (
                      <a
                        href={item.media.projectUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-red-600 transition-colors"
                        title={language === 'en' ? 'Visit website' : 'Đến trang web'}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Website
                      </a>
                    )}

                    {item.media?.repoUrl && (
                      <a
                        href={item.media.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-red-600 transition-colors"
                        title={language === 'en' ? 'Inspect repository & PRs on GitHub' : 'Xem kho lưu trữ & Pull Requests trên GitHub'}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        GitHub PRs
                      </a>
                    )}
                  </div>
                </div>

                {/* Description & Responsibilities */}
                <div className="mt-5 space-y-4">
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {renderFormattedText(item.description)}
                  </p>

                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="w-2 h-2 rounded-full bg-red-600 mt-1.5 flex-shrink-0"></span>
                        <span className="leading-relaxed">{renderFormattedText(resp)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills / Tech Tags */}
                  <div className="pt-3 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mr-1">
                      <Tag className="w-3 h-3 text-red-600" />
                      {t('expSkillsLabel')}
                    </span>
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 hover:border-red-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Màn hình nhỏ trình phát video trực tiếp (Thiết kế đồng bộ với phần Dự án AI bên dưới) */}
                  {item.media?.videoUrl && (
                    <div className="pt-4">
                      {playingInlineId === item.id ? (
                        <div className="relative w-full max-w-xl aspect-video rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-xl">
                          <iframe
                            src={getEmbedUrl(item.media.videoUrl)}
                            title={item.media.videoTitle || item.company}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                          <div className="absolute top-3 right-3 flex items-center gap-2">
                            <button
                              onClick={() =>
                                onOpenMediaModal({
                                  type: 'video',
                                  url: item.media!.videoUrl!,
                                  title: item.media!.videoTitle || `Video: ${item.company} - ${item.role}`,
                                })
                              }
                              className="p-1.5 rounded-lg bg-black/70 hover:bg-black text-white text-xs backdrop-blur-md transition-colors cursor-pointer"
                              title={language === 'en' ? 'Fullscreen' : 'Phóng to toàn màn hình'}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setPlayingInlineId(null)}
                              className="p-1.5 rounded-lg bg-black/70 hover:bg-black text-white text-xs backdrop-blur-md transition-colors cursor-pointer"
                              title={language === 'en' ? 'Close video' : 'Đóng video'}
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="relative w-full max-w-xl h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md group">
                          <img
                            src={item.media.imageUrl || item.logo}
                            alt={item.media.videoTitle || item.company}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                          {/* Category / Source Badge */}
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-950/90 text-white border border-slate-700 backdrop-blur-md flex items-center gap-1.5">
                              <Play className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                              {item.company === 'VCO Group' ? 'Workshop Facebook Reel' : t('expBtnVideo')}
                            </span>
                          </div>

                          {/* Nút Play tròn màu đỏ ở chính giữa */}
                          <button
                            onClick={() => setPlayingInlineId(item.id)}
                            className="absolute inset-0 flex items-center justify-center group-hover:bg-slate-950/20 transition-colors cursor-pointer"
                            title={language === 'en' ? 'Click to play inline video' : 'Bấm để phát video trên màn hình nhỏ'}
                          >
                            <div className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg shadow-red-600/50 hover:scale-110 transition-transform">
                              <Play className="w-5 h-5 fill-white ml-0.5" />
                            </div>
                          </button>

                          {/* Tiêu đề & nút phóng to */}
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-left">
                            <p className="text-xs sm:text-sm font-bold text-white drop-shadow-md truncate max-w-[75%]">
                              {item.media.videoTitle || `Video: ${item.company}`}
                            </p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenMediaModal({
                                  type: 'video',
                                  url: item.media!.videoUrl!,
                                  title: item.media!.videoTitle || `Video: ${item.company} - ${item.role}`,
                                });
                              }}
                              className="text-[11px] font-bold text-red-300 hover:text-white underline cursor-pointer"
                            >
                              {language === 'en' ? 'Enlarge' : 'Phóng to'}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Danh mục hình ảnh thực tế / Gallery (Dành cho Rikkeisoft hoặc các mốc có nhiều ảnh) */}
                  {item.media?.images && item.media.images.length > 0 && (
                    <div className="pt-4">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                          <ImageIcon className="w-3.5 h-3.5 text-red-600" />
                          {language === 'en' ? `Project Photos (${item.media.images.length}):` : `Hình ảnh dự án (${item.media.images.length} ảnh):`}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium">{t('expZoomHint')}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {item.media.images.map((img, imgIdx) => (
                          <div
                            key={imgIdx}
                            onClick={() =>
                              onOpenMediaModal({
                                type: 'image',
                                url: img.url,
                                title: `${item.company} - ${img.caption}`,
                              })
                            }
                            className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50 hover:border-red-400 hover:shadow-md transition-all cursor-pointer flex flex-col"
                            title={language === 'en' ? 'Click to view enlarged photo' : 'Bấm để xem ảnh phóng to'}
                          >
                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                              <img
                                src={img.url}
                                alt={img.caption}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <div className="p-1.5 rounded-full bg-white/90 text-red-600 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                  <ZoomIn className="w-4 h-4" />
                                </div>
                              </div>
                            </div>
                            <div className="p-2.5 bg-white flex-1 flex items-center border-t border-slate-100">
                              <p className="text-[11px] font-medium text-slate-700 leading-snug line-clamp-2 group-hover:text-red-600 transition-colors">
                                {img.caption}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
            </div>
          </div>

          {/* Right Column: Sticky Large Frameless 3D Mascot (Cùng hàng với Timeline) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col items-center justify-center py-6 lg:py-0">
            <SectionMascot
              image="/avatar3d/avatar_experience.png"
              alt={language === 'en' ? '3D Mascot Production Experience Nguyen Trung Đức' : '3D Mascot Kinh Nghiệm Thực Chiến Nguyễn Trung Đức'}
              speechTitle={t('expMascotTitle')}
              speechText={t('expMascotSpeech')}
              size="xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
