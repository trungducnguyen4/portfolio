import React, { useState } from 'react';
import type { EducationItem } from '../types/portfolio';
import {
  Award,
  Trophy,
  GraduationCap,
  CheckCircle,
  Sparkles,
  ExternalLink,
  Calendar,
  MapPin,
  ZoomIn,
  Bot,
  ShieldCheck,
  Layers,
  Cpu,
  CheckCircle2,
  Code2,
  Database,
  Search,
  Eye,
  Scale,
  Terminal,
  Zap,
  GitBranch,
  Activity,
  FileText,
  ShieldAlert,
} from 'lucide-react';
import { SectionMascot } from './SectionMascot';
import { initialPortfolioData } from '../data/portfolioData';

interface EducationProps {
  education: EducationItem;
  onOpenMediaModal?: (media: { type: 'video' | 'image'; url: string; title: string }) => void;
}

const renderBoldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-slate-900 font-extrabold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export const Education: React.FC<EducationProps> = ({ education, onOpenMediaModal }) => {
  const [activeThesisImg, setActiveThesisImg] = useState(0);
  const [thesisPillarMode, setThesisPillarMode] = useState<'both' | 'ai' | 'swe'>('both');
  return (
    <section id="education" className="py-20 relative bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200 mb-4 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-red-600" />
            Nền tảng Học vấn & Thành tích
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Quá trình Đào tạo & Nền tảng Học thuật
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Được đào tạo chính quy, bài bản với nền tảng kỹ thuật phần mềm vững vàng và tư duy logic tự nhiên sắc bén.
          </p>
        </div>

        {/* Unified Education Showcase Card (Chung 1 thẻ) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden glass-card-hover">
          {/* PHẦN 1: Đại học Tôn Đức Thắng (TDTU) */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-8 border-b border-slate-200">
            {/* School Info with Official Logo */}
            <div className="flex items-start sm:items-center gap-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-2.5 shadow-md flex items-center justify-center flex-shrink-0 border-2 border-slate-100">
                <img
                  src={education.logo}
                  alt={education.school}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {education.school}
                  </h3>
                  <a
                    href="https://tdtu.edu.vn"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-red-600 transition-colors p-1"
                    title="Website chính thức TDTU"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="text-sm font-semibold text-slate-600">
                  {education.schoolEn} · {education.degree}
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1 text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-red-600" />
                    {education.period}
                  </span>
                  <span className="flex items-center gap-1 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-red-600" />
                    {education.location}
                  </span>
                </div>
              </div>
            </div>

            {/* GPA & Classification Badge Highlight with Red Diploma Cover directly to the left */}
            <div className="flex items-center gap-3 sm:gap-4 self-stretch sm:self-auto justify-end flex-wrap">
              {/* Only the red diploma cover image, no accompanying text */}
              {education.diplomaCover && (
                <button
                  type="button"
                  onClick={() =>
                    onOpenMediaModal?.({
                      type: 'image',
                      url: education.diplomaCover!,
                      title: 'Bìa Bằng Tốt Nghiệp Loại Giỏi - Đại học Tôn Đức Thắng (TDTU)',
                    })
                  }
                  className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md border-2 border-red-200 hover:border-red-400 transition-all cursor-pointer flex-shrink-0"
                  title="Xem ảnh bìa bằng tốt nghiệp TDTU"
                >
                  <img
                    src={education.diplomaCover}
                    alt="Bìa Bằng Tốt Nghiệp TDTU"
                    className="h-[72px] sm:h-[80px] w-auto aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white drop-shadow" />
                  </div>
                </button>
              )}

              <div className="bg-red-50 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl border-2 border-red-200 text-right shadow-xs">
                <div className="text-xs uppercase font-bold text-red-700 flex items-center justify-end gap-1.5">
                  <Award className="w-3.5 h-3.5 text-red-600" />
                  Xếp loại Tốt nghiệp
                </div>
                <div className="text-2xl sm:text-3xl font-black text-red-600 mt-0.5">
                  {education.classification}
                </div>
              </div>

              <div className="bg-slate-950 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl border-2 border-slate-900 text-right shadow-md">
                <div className="text-xs uppercase font-bold text-slate-300">
                  Điểm GPA Toàn khóa
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono mt-0.5">
                  {education.gpa}
                </div>
              </div>
            </div>
          </div>

          {/* Details & Highlights Grid with Center Frameless 3D Mascot */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Honors & Key Highlights */}
            <div className="lg:col-span-4">
              <h4 className="text-sm uppercase tracking-wider font-extrabold text-slate-900 flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-red-600" />
                Điểm nổi bật & Năng lực Đào tạo
              </h4>
              <ul className="space-y-3">
                {education.honors.map((honor, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>{honor}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center: Large 3D Mascot (Cùng hàng với nội dung, không khung viền) */}
            <div className="lg:col-span-4 flex justify-center py-2 lg:py-0">
              <SectionMascot
                image="/avatar3d/avatar_education.png?v=4"
                alt="3D Mascot Tốt Nghiệp Loại Giỏi TDTU"
                speechTitle="Tốt nghiệp Loại Giỏi"
                speechText="TDTU GPA 8.34 & Khối A01 26.3! Nền tảng tư duy toán học và kỹ thuật phần mềm bài bản."
                size="xl"
              />
            </div>

            {/* Hoạt động & Giải thưởng Học thuật */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <h4 className="text-sm uppercase tracking-wider font-extrabold text-slate-900 flex items-center gap-2 mb-3">
                  <Trophy className="w-4 h-4 text-red-600" />
                  Hoạt động & Giải thưởng Học thuật
                </h4>

                {(() => {
                  const act = education.activity || initialPortfolioData.education.activity;
                  if (!act) return null;
                  return (
                    <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-red-300 hover:shadow-md transition-all">
                      {/* Top Row: Award badge & Time */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-black bg-red-50 text-red-700 border border-red-200 shadow-2xs">
                          <Trophy className="w-3.5 h-3.5 text-red-600" />
                          {act.award}
                        </span>
                        <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          {act.time}
                        </span>
                      </div>

                      {/* Main Content & Medal Photo */}
                      <div className="flex items-start gap-3">
                        <div className="flex-1 min-w-0">
                          <h5 className="text-sm font-extrabold text-slate-900 leading-snug">
                            Cuộc thi {act.contest}
                          </h5>
                          <p className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                            {act.contestFullName}
                          </p>
                          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                            {renderBoldText(act.description || '')}
                          </p>
                        </div>

                        {/* Photo Thumbnail with click to open MediaModal */}
                        {act.image && (
                          <button
                            type="button"
                            onClick={() => onOpenMediaModal?.({
                              type: 'image',
                              url: act.image!,
                              title: `${act.award} — Cuộc thi Học thuật ${act.contest} (Khoa HTTT - UIT ĐHQG-HCM)`
                            })}
                            className="group relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 border-slate-200 hover:border-red-500 transition-all shadow-xs cursor-pointer"
                            title="Nhấn để phóng to ảnh chụp huy chương & lễ trao giải"
                          >
                            <img
                              src={act.image}
                              alt="Huy chương AISC 2024"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-slate-950/25 group-hover:bg-slate-950/40 flex items-center justify-center transition-colors">
                              <ZoomIn className="w-4 h-4 text-white opacity-95 group-hover:scale-110 transition-transform" />
                            </div>
                          </button>
                        )}
                      </div>

                      {/* Footer Info: Organizer & Role */}
                      <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <span className="text-slate-400 font-medium">Đơn vị:</span>
                          <span className="font-bold text-slate-800">Khoa HTTT · ĐH CNTT (UIT)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-slate-400 font-medium">Vai trò:</span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-extrabold text-slate-900 bg-slate-100 border border-slate-200 text-[11px]">
                            <Code2 className="w-3 h-3 text-red-600" />
                            {act.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Graduation Thesis Link / Teaser */}
              {education.graduationThesis ? (
                <a
                  href="#graduation-thesis"
                  className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50/50 border border-red-200/90 hover:border-red-400 block transition-all group shadow-xs"
                >
                  <div className="text-[11px] font-bold text-red-700 uppercase tracking-wide flex items-center justify-between gap-1.5 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-red-600" />
                      Khóa Luận Tốt Nghiệp
                    </span>
                    <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-extrabold">
                      Xem chi tiết ↓
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {education.graduationThesis.title}
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">
                    {education.graduationThesis.subtitle}
                  </p>
                </a>
              ) : education.aiThesis ? (
                <div className="mt-5 p-4 rounded-2xl bg-red-50/70 border border-red-200/80">
                  <div className="text-xs font-bold text-red-700 uppercase tracking-wide flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-red-600" />
                    Định hướng Ứng dụng AI
                  </div>
                  <div className="text-sm font-bold text-slate-900">
                    {education.aiThesis.title}
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {education.aiThesis.description}
                  </p>
                </div>
              ) : null}
            </div>
          </div>

          {/* PHẦN ĐẶC BIỆT: Khóa luận Tốt nghiệp - ExamTrust (Nằm trang trọng trong khối TDTU) */}
          {education.graduationThesis && (
            <div id="graduation-thesis" className="mt-10 pt-8 border-t-2 border-slate-200">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200 hover:border-slate-300 transition-all relative overflow-hidden">
                {/* Background subtle decorative glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-50/40 rounded-full blur-3xl pointer-events-none" />

                {/* Top badges & Title */}
                <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-red-600 text-white shadow-xs">
                        <GraduationCap className="w-3.5 h-3.5" />
                        KHÓA LUẬN TỐT NGHIỆP CỬ NHÂN KỸ THUẬT PHẦN MỀM
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
                        ĐH TÔN ĐỨC THẮNG · 2026
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200">
                        ALL-IN-ONE &amp; AI PROCTORING
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {education.graduationThesis.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 font-semibold mt-1">
                      {education.graduationThesis.subtitle}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="bg-red-50 px-4 py-2.5 rounded-2xl border border-red-200">
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        Phụ trách chính
                      </div>
                      <div className="text-sm font-bold text-red-600 font-mono mt-0.5">
                        {education.graduationThesis.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description & Overview */}
                <div className="relative z-10 mt-6">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {renderBoldText(education.graduationThesis.description)}
                  </p>
                </div>

                {/* Recruiter / Mode Switcher Tabs */}
                <div className="relative z-10 mt-6 p-2 rounded-2xl bg-slate-100 border border-slate-200 flex flex-wrap gap-2 items-center justify-between">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Tab 1: Both */}
                    <button
                      type="button"
                      onClick={() => setThesisPillarMode('both')}
                      className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                        thesisPillarMode === 'both'
                          ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                          : 'bg-white text-slate-700 hover:text-red-600 border border-slate-200 shadow-2xs'
                      }`}
                    >
                      <Layers className="w-4 h-4" />
                      <span>Toàn cảnh Hai Lõi (SWE + AI)</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        thesisPillarMode === 'both' ? 'bg-black/25 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>12 Năng lực</span>
                    </button>

                    {/* Tab 2: AI Focus */}
                    <button
                      type="button"
                      onClick={() => setThesisPillarMode('ai')}
                      className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer relative ${
                        thesisPillarMode === 'ai'
                          ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                          : 'bg-white text-slate-700 hover:text-red-600 border border-slate-200 shadow-2xs'
                      }`}
                    >
                      <Bot className={`w-4 h-4 ${thesisPillarMode === 'ai' ? 'text-white' : 'text-red-600'}`} />
                      <span>Lõi AI / LLM &amp; Agentic</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold border ${
                        thesisPillarMode === 'ai'
                          ? 'bg-white/20 text-white border-white/30'
                          : 'bg-red-50 text-red-700 border-red-200'
                      }`}>
                        HR AI Focus
                      </span>
                    </button>

                    {/* Tab 3: SWE Focus */}
                    <button
                      type="button"
                      onClick={() => setThesisPillarMode('swe')}
                      className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                        thesisPillarMode === 'swe'
                          ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                          : 'bg-white text-slate-700 hover:text-red-600 border border-slate-200 shadow-2xs'
                      }`}
                    >
                      <Code2 className={`w-4 h-4 ${thesisPillarMode === 'swe' ? 'text-white' : 'text-red-600'}`} />
                      <span>Lõi Kỹ thuật Phần mềm (SWE)</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${
                        thesisPillarMode === 'swe'
                          ? 'bg-white/20 text-white border-white/30'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}>
                        Architecture
                      </span>
                    </button>
                  </div>

                  <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 font-medium px-2">
                    <Sparkles className="w-3.5 h-3.5 text-red-600" />
                    <span>Lựa chọn góc nhìn chuyên môn để đánh giá</span>
                  </div>
                </div>

                {/* MODE 1: BOTH (TOÀN CẢNH HAI LÕI: SWE + AI) */}
                {thesisPillarMode === 'both' && (
                  <div className="relative z-10 mt-6 space-y-8">
                    {/* Top 4 Metrics Summary Bar - Red / White / Black */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                      <div className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 transition-all flex items-center gap-3 shadow-2xs">
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-black text-slate-900">5+ Multi-Provider</div>
                          <div className="text-[11px] text-slate-600 font-medium">Gemini, DeepSeek, Ollama</div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 transition-all flex items-center gap-3 shadow-2xs">
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center flex-shrink-0">
                          <Database className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-black text-slate-900">100% Zero-Loss</div>
                          <div className="text-[11px] text-slate-600 font-medium">Bull Queue &amp; Redis Workers</div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 transition-all flex items-center gap-3 shadow-2xs">
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center flex-shrink-0">
                          <Activity className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-black text-slate-900">10 Telemetry Events</div>
                          <div className="text-[11px] text-slate-600 font-medium">Anti-Cheat Browser &amp; Vision</div>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 transition-all flex items-center gap-3 shadow-2xs">
                        <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center flex-shrink-0">
                          <Code2 className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-black text-slate-900">$0/mo Serverless</div>
                          <div className="text-[11px] text-slate-600 font-medium">Cloudflare Pages &amp; Workers</div>
                        </div>
                      </div>
                    </div>

                    {/* Dual Comparative Columns: SWE (Left) vs AI (Right) - Balanced & Equal Height */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                      {/* Left: Software Engineering Core */}
                      {education.graduationThesis.softwareCore && (
                        <div className="p-5 sm:p-6 rounded-3xl bg-slate-50/70 border border-slate-200 shadow-xs flex flex-col justify-between h-full">
                          <div className="space-y-4 flex-1 flex flex-col">
                            <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-200">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center">
                                  <Database className="w-4 h-4" />
                                </div>
                                <div>
                                  <h4 className="text-base font-black text-slate-900 uppercase tracking-wide">
                                    {education.graduationThesis.softwareCore.title}
                                  </h4>
                                  <div className="text-[11px] text-slate-500">Kiến trúc hạ tầng, xử lý chịu tải &amp; phân tán</div>
                                </div>
                              </div>
                              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                                {education.graduationThesis.softwareCore.badge}
                              </span>
                            </div>

                            {/* 6 Highlights for SWE */}
                            <div className="space-y-3 flex-1 flex flex-col justify-between">
                              {education.graduationThesis.softwareCore.highlights.map((pillar, idx) => {
                                const sweIcons = [Layers, ShieldCheck, GitBranch, Activity, ShieldAlert, Code2];
                                const Icon = sweIcons[idx % sweIcons.length];
                                return (
                                  <div
                                    key={idx}
                                    className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-sm transition-all flex flex-col justify-center"
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Icon className="w-3.5 h-3.5" />
                                      </div>
                                      <div className="flex-1">
                                        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                                          <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                                            {pillar.title}
                                          </h5>
                                          {pillar.badge && (
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                                              {pillar.badge}
                                            </span>
                                          )}
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                                          {renderBoldText(pillar.desc)}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* SWE Tech Chips - Pinned to bottom */}
                          <div className="pt-4 mt-5 border-t border-slate-200/80">
                            <div className="text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-2">
                              Tech Stack Phần mềm &amp; Triển khai
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {education.graduationThesis.softwareCore.tech.map((t, idx) => (
                                <span
                                  key={idx}
                                  className="px-2.5 py-0.5 rounded-lg text-[11px] font-semibold bg-white text-slate-800 border border-slate-200 hover:border-red-300 transition-colors shadow-2xs"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Right: AI & Agentic / LLM Core */}
                      {education.graduationThesis.aiCore && (
                        <div className="p-5 sm:p-6 rounded-3xl bg-slate-50/70 border border-slate-200 shadow-xs flex flex-col justify-between h-full">
                          <div className="space-y-4 flex-1 flex flex-col">
                            <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-200">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center">
                                  <Bot className="w-4 h-4" />
                                </div>
                                <div>
                                  <h4 className="text-base font-black text-slate-900 uppercase tracking-wide">
                                    {education.graduationThesis.aiCore.title}
                                  </h4>
                                  <div className="text-[11px] text-slate-500">RAG, Prompt Loops, Vision &amp; AI Evaluation</div>
                                </div>
                              </div>
                              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-red-100 text-red-700 border border-red-200">
                                {education.graduationThesis.aiCore.badge}
                              </span>
                            </div>

                            {/* 6 Highlights for AI */}
                            <div className="space-y-3 flex-1 flex flex-col justify-between">
                              {education.graduationThesis.aiCore.highlights.map((pillar, idx) => {
                                const aiIcons = [Bot, Search, Zap, Eye, Scale, Cpu];
                                const Icon = aiIcons[idx % aiIcons.length];
                                return (
                                  <div
                                    key={idx}
                                    className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-sm transition-all flex flex-col justify-center"
                                  >
                                    <div className="flex items-start gap-3">
                                      <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Icon className="w-3.5 h-3.5" />
                                      </div>
                                      <div className="flex-1">
                                        <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                                          <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                                            {pillar.title}
                                          </h5>
                                          {pillar.badge && (
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                                              {pillar.badge}
                                            </span>
                                          )}
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                                          {renderBoldText(pillar.desc)}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* AI Tech Chips - Pinned to bottom */}
                          <div className="pt-4 mt-5 border-t border-slate-200/80">
                            <div className="text-[11px] uppercase font-bold tracking-wider text-slate-700 mb-2">
                              Tech Stack AI &amp; Agentic Orchestration
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {education.graduationThesis.aiCore.tech.map((t, idx) => (
                                <span
                                  key={idx}
                                  className="px-2.5 py-0.5 rounded-lg text-[11px] font-semibold bg-white text-slate-800 border border-slate-200 hover:border-red-300 transition-colors shadow-2xs"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Full-width Screenshot Gallery Showcase */}
                    <div className="p-5 sm:p-6 rounded-3xl bg-slate-50/70 border border-slate-200 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                        <div className="flex items-center gap-2">
                          <FileText className="w-5 h-5 text-red-600" />
                          <h4 className="text-base font-bold text-slate-900">
                            Minh chứng Giao diện &amp; Kiến trúc Thực tế (Live Screenshot Proofs)
                          </h4>
                        </div>
                        <div className="text-xs text-slate-500 font-medium">
                          Bấm vào ảnh chụp thực tế để mở phóng to Lightbox
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        {/* Big preview: 7 cols */}
                        <div className="lg:col-span-7">
                          <button
                            type="button"
                            onClick={() => {
                              const cur = education.graduationThesis!.media.images[activeThesisImg] || education.graduationThesis!.media.images[0];
                              onOpenMediaModal?.({
                                type: 'image',
                                url: cur.url,
                                title: `${cur.title || cur.caption} — Khóa luận Tốt nghiệp ExamTrust (TDTU)`,
                              });
                            }}
                            className="w-full group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-red-400 transition-all cursor-pointer flex flex-col text-left"
                            title="Bấm để phóng to ảnh chụp hệ thống ExamTrust"
                          >
                            <div className="relative w-full h-64 sm:h-72 bg-slate-100 overflow-hidden flex items-center justify-center">
                              <img
                                src={(education.graduationThesis.media.images[activeThesisImg] || education.graduationThesis.media.images[0]).url}
                                alt={(education.graduationThesis.media.images[activeThesisImg] || education.graduationThesis.media.images[0]).caption}
                                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-lg border border-slate-200">
                                  <ZoomIn className="w-4 h-4 text-red-600" />
                                  Phóng to giao diện
                                </span>
                              </div>
                            </div>
                            <div className="px-4 py-3 bg-white text-slate-800 flex items-center justify-between gap-2 border-t border-slate-200">
                              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 truncate">
                                <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                                <span className="truncate">
                                  {(education.graduationThesis.media.images[activeThesisImg] || education.graduationThesis.media.images[0]).title || 'Giao diện Thực tế'}
                                </span>
                              </div>
                              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider flex-shrink-0">
                                Click phóng to
                              </span>
                            </div>
                          </button>
                        </div>

                        {/* Thumbnails & Status: 5 cols */}
                        <div className="lg:col-span-5 space-y-3">
                          <div className="space-y-2">
                            {education.graduationThesis.media.images.map((img, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setActiveThesisImg(idx)}
                                className={`w-full p-2.5 rounded-xl border transition-all text-left flex items-center gap-3 cursor-pointer ${
                                  activeThesisImg === idx
                                    ? 'border-red-600 bg-red-50/70 ring-1 ring-red-600/30 shadow-xs'
                                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                                }`}
                              >
                                <div className="w-20 h-14 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                                  <img
                                    src={img.url}
                                    alt={img.title || img.caption}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-bold text-slate-900 truncate">
                                    {img.title || img.caption}
                                  </div>
                                  <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
                                    {img.caption}
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>

                          <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-800 font-semibold flex items-center gap-2.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-600 flex-shrink-0" />
                            <span>Hệ thống phân tán Full-stack &amp; AI đã hoàn thiện và kiểm thử toàn diện</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* MODE 2: AI FOCUS (DÀNH CHO HR / TECH LEAD AI ENGINEER) */}
                {thesisPillarMode === 'ai' && education.graduationThesis.aiCore && (
                  <div className="relative z-10 mt-6 space-y-6">
                    {/* Recruiter Focus Header Banner */}
                    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-600 text-white shadow-xs">
                          Góc nhìn Tuyển dụng AI Engineer
                        </span>
                        <span className="text-xs font-bold text-slate-600">
                          Multi-LLM, RAG, Prompt Loops &amp; Auto-Eval
                        </span>
                      </div>
                      <h4 className="text-xl font-black text-slate-900">
                        Khảo sát Chuyên sâu Lõi AI &amp; Agentic Engineering trong ExamTrust
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        Được thiết kế đáp ứng chuẩn xác các yêu cầu kỹ năng AI hiện đại: RAG/Agent workflows, Vector Embeddings với Cosine search, Loop Engineering tự phục hồi JSON đứt gãy, Đánh giá LLM-as-a-Judge với Golden Dataset và AI Telemetry kiểm soát chi phí realtime.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-200">
                        {education.graduationThesis.aiCore.metrics?.map((m, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                            <div className="text-[11px] font-semibold text-slate-500 uppercase">{m.label}</div>
                            <div className="text-base font-black text-slate-900 mt-0.5">{m.val}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Main AI Layout: 7 cols Highlights, 5 cols Media & Architectural Notes */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      {/* Left: 7 AI Core Highlights */}
                      <div className="lg:col-span-7 space-y-3.5">
                        {education.graduationThesis.aiCore.highlights.map((pillar, idx) => {
                          const aiIcons = [Bot, Search, Zap, Eye, Scale, Terminal, Cpu];
                          const Icon = aiIcons[idx % aiIcons.length];
                          return (
                            <div
                              key={idx}
                              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-sm transition-all"
                            >
                              <div className="flex items-start gap-3.5">
                                <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                                    <h5 className="text-sm font-bold text-slate-900">
                                      {pillar.title}
                                    </h5>
                                    {pillar.badge && (
                                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                                        {pillar.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                                    {renderBoldText(pillar.desc)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}

                        {/* AI Tech Chips */}
                        <div className="pt-2">
                          <div className="text-xs uppercase font-extrabold tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-red-600" />
                            Hệ sinh thái Công nghệ AI &amp; Orchestration
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {education.graduationThesis.aiCore.tech.map((t, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 rounded-xl text-xs font-semibold bg-white text-slate-800 border border-slate-200 hover:border-red-300 transition-colors shadow-2xs"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Media Preview & Architectural Notes */}
                      <div className="lg:col-span-5 space-y-4">
                        {/* Big preview */}
                        <button
                          type="button"
                          onClick={() => {
                            const cur = education.graduationThesis!.media.images[activeThesisImg] || education.graduationThesis!.media.images[0];
                            onOpenMediaModal?.({
                              type: 'image',
                              url: cur.url,
                              title: `${cur.title || cur.caption} — Khóa luận Tốt nghiệp ExamTrust (TDTU)`,
                            });
                          }}
                          className="w-full group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-red-400 transition-all cursor-pointer flex flex-col text-left"
                          title="Bấm để phóng to ảnh chụp hệ thống ExamTrust"
                        >
                          <div className="relative w-full h-56 bg-slate-100 overflow-hidden flex items-center justify-center">
                            <img
                              src={(education.graduationThesis.media.images[activeThesisImg] || education.graduationThesis.media.images[0]).url}
                              alt={(education.graduationThesis.media.images[activeThesisImg] || education.graduationThesis.media.images[0]).caption}
                              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-lg border border-slate-200">
                                <ZoomIn className="w-4 h-4 text-red-600" />
                                Phóng to giao diện
                              </span>
                            </div>
                          </div>
                          <div className="px-3.5 py-2.5 bg-white text-slate-800 flex items-center justify-between gap-2 border-t border-slate-200">
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 truncate">
                              <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                              <span className="truncate">
                                {(education.graduationThesis.media.images[activeThesisImg] || education.graduationThesis.media.images[0]).title || 'Giao diện Thực tế'}
                              </span>
                            </div>
                            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider flex-shrink-0">
                              Click phóng to
                            </span>
                          </div>
                        </button>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-3 gap-2">
                          {education.graduationThesis.media.images.map((img, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setActiveThesisImg(idx)}
                              className={`relative rounded-xl overflow-hidden border transition-all p-1 text-left cursor-pointer ${
                                activeThesisImg === idx
                                  ? 'border-red-600 bg-red-50/70 ring-1 ring-red-600/30 shadow-xs'
                                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                              }`}
                              title={img.title || img.caption}
                            >
                              <div className="h-16 w-full bg-slate-100 overflow-hidden rounded-lg border border-slate-200">
                                <img
                                  src={img.url}
                                  alt={img.title || img.caption}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="p-1 text-[10px] font-bold text-slate-800 truncate">
                                {idx === 0 ? 'Dashboard & AI' : idx === 1 ? 'Giám sát Rủi ro' : 'Ngân hàng Đề'}
                              </div>
                            </button>
                          ))}
                        </div>

                        {/* AI Recruiter Callout */}
                        <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200 space-y-2.5 text-xs text-slate-700">
                          <div className="text-xs font-bold text-red-700 uppercase flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-red-600" />
                            Điểm cộng cho vị trí AI Engineer
                          </div>
                          <ul className="space-y-1.5 list-disc pl-4 text-slate-600">
                            <li><strong className="text-slate-900">Loop Engineering:</strong> Xử lý đứt gãy JSON bằng <code className="text-red-700 bg-white border border-red-200 px-1 py-0.5 rounded font-mono text-[11px]">jsonrepair</code> &amp; timeout <code className="text-red-700 bg-white border border-red-200 px-1 py-0.5 rounded font-mono text-[11px]">AbortSignal</code>, zero-crash trong queue.</li>
                            <li><strong className="text-slate-900">Vector Search:</strong> Dịch vụ Embeddings 128 chiều lọc trùng câu hỏi &amp; gom cụm chủ đề qua Cosine Similarity.</li>
                            <li><strong className="text-slate-900">LLM-as-a-Judge:</strong> Bộ dữ liệu vàng <code className="text-red-700 bg-white border border-red-200 px-1 py-0.5 rounded font-mono text-[11px]">golden-dataset.ts</code> đánh giá độ chính xác đề thi sinh ra tự động.</li>
                            <li><strong className="text-slate-900">Token &amp; Cost Telemetry:</strong> Kiểm soát token, độ trễ và quy đổi USD realtime cho từng API provider.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* MODE 3: SWE FOCUS (DÀNH CHO TECH LEAD / SENIOR SWE) */}
                {thesisPillarMode === 'swe' && education.graduationThesis.softwareCore && (
                  <div className="relative z-10 mt-6 space-y-6">
                    {/* Recruiter Focus Header Banner */}
                    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-900 text-white shadow-xs">
                          Góc nhìn Tech Lead / Senior SWE
                        </span>
                        <span className="text-xs font-bold text-slate-600">
                          Multi-service, Bull Queue, Immutable Snapshot &amp; Serverless
                        </span>
                      </div>
                      <h4 className="text-xl font-black text-slate-900">
                        Khảo sát Chuyên sâu Hạ tầng &amp; Kỹ thuật Phần mềm trong ExamTrust
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        Hạ tầng hướng sản xuất (Production-grade) với kiến trúc phân tách rõ ràng giữa Web API và AI Background Worker, đảm bảo chịu tải cao, snapshot đề thi chống gian lận và tối ưu chi phí vận hành 0đ trên Cloudflare.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-200">
                        {education.graduationThesis.softwareCore.metrics?.map((m, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs">
                            <div className="text-[11px] font-semibold text-slate-500 uppercase">{m.label}</div>
                            <div className="text-base font-black text-slate-900 mt-0.5">{m.val}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Main SWE Layout: 7 cols Highlights, 5 cols Media & Architectural Notes */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      {/* Left: 5 SWE Core Highlights */}
                      <div className="lg:col-span-7 space-y-3.5">
                        {education.graduationThesis.softwareCore.highlights.map((pillar, idx) => {
                          const sweIcons = [Layers, ShieldCheck, GitBranch, Activity, Code2];
                          const Icon = sweIcons[idx % sweIcons.length];
                          return (
                            <div
                              key={idx}
                              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-red-300 hover:shadow-sm transition-all"
                            >
                              <div className="flex items-start gap-3.5">
                                <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                                    <h5 className="text-sm font-bold text-slate-900">
                                      {pillar.title}
                                    </h5>
                                    {pillar.badge && (
                                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                                        {pillar.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                                    {renderBoldText(pillar.desc)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}

                        {/* SWE Tech Chips */}
                        <div className="pt-2">
                          <div className="text-xs uppercase font-extrabold tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-red-600" />
                            Hạ tầng &amp; Nền tảng Kỹ thuật Phần mềm
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {education.graduationThesis.softwareCore.tech.map((t, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 rounded-xl text-xs font-semibold bg-white text-slate-800 border border-slate-200 hover:border-red-300 transition-colors shadow-2xs"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Media Preview & Architectural Notes */}
                      <div className="lg:col-span-5 space-y-4">
                        {/* Big preview */}
                        <button
                          type="button"
                          onClick={() => {
                            const cur = education.graduationThesis!.media.images[activeThesisImg] || education.graduationThesis!.media.images[0];
                            onOpenMediaModal?.({
                              type: 'image',
                              url: cur.url,
                              title: `${cur.title || cur.caption} — Khóa luận Tốt nghiệp ExamTrust (TDTU)`,
                            });
                          }}
                          className="w-full group relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-red-400 transition-all cursor-pointer flex flex-col text-left"
                          title="Bấm để phóng to ảnh chụp hệ thống ExamTrust"
                        >
                          <div className="relative w-full h-56 bg-slate-100 overflow-hidden flex items-center justify-center">
                            <img
                              src={(education.graduationThesis.media.images[activeThesisImg] || education.graduationThesis.media.images[0]).url}
                              alt={(education.graduationThesis.media.images[activeThesisImg] || education.graduationThesis.media.images[0]).caption}
                              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-lg border border-slate-200">
                                <ZoomIn className="w-4 h-4 text-red-600" />
                                Phóng to giao diện
                              </span>
                            </div>
                          </div>
                          <div className="px-3.5 py-2.5 bg-white text-slate-800 flex items-center justify-between gap-2 border-t border-slate-200">
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 truncate">
                              <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                              <span className="truncate">
                                {(education.graduationThesis.media.images[activeThesisImg] || education.graduationThesis.media.images[0]).title || 'Giao diện Thực tế'}
                              </span>
                            </div>
                            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider flex-shrink-0">
                              Click phóng to
                            </span>
                          </div>
                        </button>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-3 gap-2">
                          {education.graduationThesis.media.images.map((img, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setActiveThesisImg(idx)}
                              className={`relative rounded-xl overflow-hidden border transition-all p-1 text-left cursor-pointer ${
                                activeThesisImg === idx
                                  ? 'border-red-600 bg-red-50/70 ring-1 ring-red-600/30 shadow-xs'
                                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                              }`}
                              title={img.title || img.caption}
                            >
                              <div className="h-16 w-full bg-slate-100 overflow-hidden rounded-lg border border-slate-200">
                                <img
                                  src={img.url}
                                  alt={img.title || img.caption}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="p-1 text-[10px] font-bold text-slate-800 truncate">
                                {idx === 0 ? 'Dashboard & AI' : idx === 1 ? 'Giám sát Rủi ro' : 'Ngân hàng Đề'}
                              </div>
                            </button>
                          ))}
                        </div>

                        {/* SWE Recruiter Callout */}
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs text-slate-700">
                          <div className="text-xs font-bold text-slate-900 uppercase flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-red-600" />
                            Điểm cộng cho vị trí Software Engineer
                          </div>
                          <ul className="space-y-1.5 list-disc pl-4 text-slate-600">
                            <li><strong className="text-slate-900">Kiến trúc Hàng đợi:</strong> Tách riêng API và AI Worker qua Bull Queue + Redis, zero-block cho các request HTTP chính.</li>
                            <li><strong className="text-slate-900">Snapshot Bất biến:</strong> Đóng băng trạng thái đề thi ngay khi sinh viên bắt đầu làm bài, chống lộ đề và race condition.</li>
                            <li><strong className="text-slate-900">Git-like Versioning:</strong> Quản lý lịch sử chỉnh sửa ngân hàng câu hỏi, hỗ trợ rollback và audit trail toàn diện.</li>
                            <li><strong className="text-slate-900">Zero-Cost Serverless:</strong> Tối ưu hóa triển khai trên Cloudflare Pages &amp; Workers, chi phí hạ tầng \$0/tháng.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
