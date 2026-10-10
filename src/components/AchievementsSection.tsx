import React, { useState } from 'react';
import type { CertificationItem, ActivityItem, AcademicAchievementItem } from '../types/portfolio';
import {
  Award,
  GraduationCap,
  ExternalLink,
  Calendar,
  MapPin,
  ZoomIn,
  Play,
  CheckCircle,
  FileCheck2,
  ShieldCheck,
  Tag,
  Trophy,
  Globe2,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AchievementsSectionProps {
  certifications?: CertificationItem[];
  activities?: ActivityItem[];
  highSchoolAchievement?: AcademicAchievementItem;
  onOpenMediaModal?: (media: { type: 'video' | 'image'; url: string; title: string }) => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  certifications = [],
  activities = [],
  highSchoolAchievement,
  onOpenMediaModal,
}) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'certifications' | 'achievements' | 'activities'>('all');

  return (
    <section id="achievements" className="py-20 relative bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200 mb-4 shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-red-600" />
            {t('achieveBadge')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('achieveTitle')}
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            {t('achieveSubtitle')}
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: t('achieveAllTab'), count: certifications.length + (highSchoolAchievement ? 1 : 0) + activities.length },
            { id: 'certifications', label: t('achieveTabCerts'), count: certifications.length, icon: FileCheck2 },
            { id: 'achievements', label: t('achieveTabAcademic'), count: highSchoolAchievement ? 1 : 0, icon: Award },
            { id: 'activities', label: t('achieveTabActivities'), count: activities.length, icon: Globe2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
                  isActive
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/20 scale-105'
                    : 'bg-white text-slate-700 hover:text-red-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {Icon && <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />}
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Container */}
        <div className="space-y-10">

          {/* 1. CHỨNG CHỈ QUỐC TẾ (CERTIFICATIONS) */}
          {(activeTab === 'all' || activeTab === 'certifications') && certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-md hover:shadow-xl hover:border-red-300 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <FileCheck2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-red-100 text-red-700 border border-red-200">
                        {cert.level}
                      </span>
                      {cert.badge && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                          <ShieldCheck className="w-3 h-3 text-red-600" />
                          {cert.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                      {cert.name}
                    </h3>
                    <div className="text-sm font-semibold text-slate-600 mt-0.5">
                      {t('achieveIssuerLabel')} <span className="text-slate-900 font-bold">{cert.issuer}</span> · {t('achieveOfqualLabel')}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
                      <span>{t('achieveCredentialId')} <strong className="font-mono text-slate-800">{cert.credentialId}</strong></span>
                      <span>·</span>
                      <span>{t('achieveEnrolment')} <strong className="font-mono text-slate-800">{cert.enrolmentId}</strong></span>
                      <span>·</span>
                      <span>{t('achieveIssuedDate')} <strong className="text-slate-800">{cert.issuedDate}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Overall Score Box & Verification CTA */}
                <div className="flex items-center gap-3 self-stretch sm:self-auto justify-end flex-wrap">
                  <div className="bg-red-50 px-5 py-3 rounded-2xl border-2 border-red-200 text-right shadow-xs">
                    <div className="text-xs uppercase font-bold text-red-700 flex items-center justify-end gap-1.5">
                      <Award className="w-3.5 h-3.5 text-red-600" />
                      {t('achieveScoreLabel')}
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-red-600 mt-0.5 font-mono">
                      {cert.score}
                    </div>
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-900 hover:bg-red-600 text-white font-bold text-xs shadow-md transition-colors"
                      title={t('achieveBlockchainTitle')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t('achieveVerifyBlockchain')}
                    </a>
                  )}
                </div>
              </div>

              {/* Skills Breakdown & Scan Certificate */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {cert.description}
                  </p>

                  {/* 4 Skills Subscores Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <div className="text-[11px] font-bold text-slate-500 uppercase">Listening</div>
                      <div className="text-base sm:text-lg font-black text-slate-900 font-mono mt-1">
                        {cert.skills.listening.split(' ')[0]} <span className="text-xs text-slate-500 font-normal">/ 50</span>
                      </div>
                      <span className="inline-block mt-1 text-[10px] font-black bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                        CEFR C
                      </span>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <div className="text-[11px] font-bold text-slate-500 uppercase">Reading</div>
                      <div className="text-base sm:text-lg font-black text-slate-900 font-mono mt-1">
                        {cert.skills.reading.split(' ')[0]} <span className="text-xs text-slate-500 font-normal">/ 50</span>
                      </div>
                      <span className="inline-block mt-1 text-[10px] font-bold bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full">
                        CEFR B2
                      </span>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <div className="text-[11px] font-bold text-slate-500 uppercase">Speaking</div>
                      <div className="text-base sm:text-lg font-black text-slate-900 font-mono mt-1">
                        {cert.skills.speaking.split(' ')[0]} <span className="text-xs text-slate-500 font-normal">/ 50</span>
                      </div>
                      <span className="inline-block mt-1 text-[10px] font-bold bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full">
                        CEFR B2
                      </span>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                      <div className="text-[11px] font-bold text-slate-500 uppercase">Writing</div>
                      <div className="text-base sm:text-lg font-black text-slate-900 font-mono mt-1">
                        {cert.skills.writing.split(' ')[0]} <span className="text-xs text-slate-500 font-normal">/ 50</span>
                      </div>
                      <span className="inline-block mt-1 text-[10px] font-bold bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full">
                        CEFR B2
                      </span>
                    </div>

                    <div className="bg-red-50/70 border border-red-200 rounded-xl p-3 text-center col-span-2 sm:col-span-1">
                      <div className="text-[11px] font-bold text-red-700 uppercase">Grammar &amp; Vocab</div>
                      <div className="text-base sm:text-lg font-black text-red-700 font-mono mt-1">
                        {cert.skills.grammarAndVocab}
                      </div>
                      <span className="inline-block mt-1 text-[10px] font-bold text-red-600">
                        {t('achieveAptisScoreScale50')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Certificate Scan Thumbnail with Lightbox */}
                <div className="lg:col-span-4 flex flex-col items-center">
                  <div
                    onClick={() =>
                      onOpenMediaModal?.({
                        type: 'image',
                        url: cert.image,
                        title: `${cert.name} — ${cert.issuer} (CEFR B2 · ${cert.score})`,
                      })
                    }
                    className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-200 hover:border-red-500 transition-all duration-300 shadow-md hover:shadow-xl max-w-[240px] w-full"
                    title={t('achieveAptisZoomHint')}
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 flex items-center justify-center transition-colors">
                      <div className="p-2.5 rounded-full bg-white/90 text-slate-900 group-hover:scale-110 shadow-lg transition-transform">
                        <ZoomIn className="w-5 h-5 text-red-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent p-2 text-center text-white text-[11px] font-bold">
                      {t('achieveAptisZoomHint')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 2. THÀNH TỰU HỌC THUẬT (ACHIEVEMENTS) */}
          {(activeTab === 'all' || activeTab === 'achievements') && highSchoolAchievement && (
            <div className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-md hover:shadow-xl hover:border-red-300 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center flex-shrink-0 shadow-xs">
                    <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        {highSchoolAchievement.school}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-700 border border-red-200">
                        {t('achieveHighSchoolClass')}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-slate-600">
                      {highSchoolAchievement.className} · {t('achieveHighSchoolPeriodPrefix')} {highSchoolAchievement.period}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
                      <span className="text-slate-700 font-semibold">
                        {t('achieveHighSchoolCandidateId')} <span className="font-mono text-red-600 font-bold text-sm">{highSchoolAchievement.sbd}</span>
                      </span>
                      <span>·</span>
                      <span className="text-slate-600">{t('achieveHighSchoolDept')}</span>
                    </div>
                  </div>
                </div>

                {/* Score Badge & SBD Search */}
                <div className="flex items-center gap-3 self-stretch sm:self-auto justify-end flex-wrap">
                  <div className="bg-red-50 px-5 py-3 rounded-2xl border-2 border-red-200 text-right shadow-xs">
                    <div className="text-xs uppercase font-bold text-red-700 flex items-center justify-end gap-1.5">
                      <Award className="w-3.5 h-3.5 text-red-600" />
                      {t('achieveA01ScoreLabel')}
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-red-600 mt-0.5 font-mono">
                      {highSchoolAchievement.scores.totalA01} <span className="text-sm font-bold text-slate-500">/ 30</span>
                    </div>
                  </div>

                  <a
                    href={highSchoolAchievement.scoresUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-900 hover:bg-red-600 text-white font-bold text-xs shadow-md transition-colors"
                    title={t('achieveLookupTitle')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t('achieveLookupBtn')} {highSchoolAchievement.sbd}
                  </a>
                </div>
              </div>

              {/* Score Breakdown & NQH Honor */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    {highSchoolAchievement.note}
                  </p>

                  {/* NQH Honor Callout */}
                  {highSchoolAchievement.honorBadge && (
                    <div className="p-3.5 rounded-2xl bg-gradient-to-r from-red-50 via-orange-50/40 to-slate-50 border border-red-200 flex items-start gap-3 shadow-xs">
                      <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-xs font-black uppercase text-red-700 tracking-wide">
                            {highSchoolAchievement.honorTitle || (language === 'en' ? 'Honored Outstanding Student in English 2K4' : 'Vinh danh Học sinh Xuất sắc Môn Tiếng Anh 2K4')}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-red-100 text-red-800 border border-red-200">
                            NQH CẤP 3
                          </span>
                        </div>
                        <p className="text-xs text-slate-700 font-medium leading-relaxed">
                          {language === 'en' ? (
                            <>
                              Recognized for achieving <strong>9.4 / 10</strong> in English in the 2022 National High School Exam; honored on the NQH High School Education System Roll of Honor (<strong>No. 121 · Nguyen Trung Duc - Vo Truong Toan High School</strong>).
                            </>
                          ) : (
                            <>
                              Ghi nhận thành tích Ngoại ngữ <strong>9.4 / 10</strong> tại Kỳ thi Tốt nghiệp THPT 2022; được Hệ thống Luyện thi NQH Cấp 3 tuyên dương trên Bảng vàng (<strong>STT 121 · Nguyễn Trung Đức - THPT Võ Trường Toản</strong>).
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 6 Subjects Grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 pt-2">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-center">
                      <div className="text-[11px] font-bold text-slate-500 uppercase">{t('achieveSubjectMath')}</div>
                      <div className="text-lg font-black text-slate-900 font-mono mt-0.5">{highSchoolAchievement.scores.math}</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-center">
                      <div className="text-[11px] font-bold text-slate-500 uppercase">{t('achieveSubjectPhysics')}</div>
                      <div className="text-lg font-black text-slate-900 font-mono mt-0.5">{highSchoolAchievement.scores.physics}</div>
                    </div>
                    <div className="bg-red-50 border-2 border-red-300 rounded-xl p-2.5 text-center relative shadow-xs">
                      <div className="text-[11px] font-black text-red-600 uppercase flex items-center justify-center gap-1">
                        <Award className="w-3 h-3 text-red-600" />
                        {t('achieveSubjectEnglish')}
                      </div>
                      <div className="text-lg font-black text-red-600 font-mono mt-0.5">{highSchoolAchievement.scores.english}</div>
                      <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.2 bg-red-600 text-white rounded text-[8px] font-bold tracking-wider uppercase">
                        TOP
                      </span>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-center">
                      <div className="text-[11px] font-bold text-slate-500 uppercase">{t('achieveSubjectLiterature')}</div>
                      <div className="text-lg font-black text-slate-900 font-mono mt-0.5">{highSchoolAchievement.scores.literature}</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-center">
                      <div className="text-[11px] font-bold text-slate-500 uppercase">{t('achieveSubjectChemistry')}</div>
                      <div className="text-lg font-black text-slate-900 font-mono mt-0.5">{highSchoolAchievement.scores.chemistry}</div>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-center">
                      <div className="text-[11px] font-bold text-slate-500 uppercase">{t('achieveSubjectBiology')}</div>
                      <div className="text-lg font-black text-slate-900 font-mono mt-0.5">{highSchoolAchievement.scores.biology}</div>
                    </div>
                  </div>
                </div>

                {/* Scoreboard Thumbnail */}
                <div className="lg:col-span-4 flex flex-col items-center">
                  <div
                    onClick={() =>
                      onOpenMediaModal?.({
                        type: 'image',
                        url: highSchoolAchievement.scoreImage,
                        title: language === 'en'
                          ? 'NQH High School Honor Roll: Outstanding English Student - Class of 2K4'
                          : 'Bảng vàng vinh danh Học sinh xuất sắc Môn Tiếng Anh - Khóa 2K4 (Hệ thống NQH Cấp 3)',
                      })
                    }
                    className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-200 hover:border-red-500 transition-all duration-300 shadow-md hover:shadow-xl max-w-[240px] w-full"
                    title={language === 'en' ? 'Click to view enlarged NQH honor roll' : 'Nhấn để xem ảnh phóng to bảng vàng NQH'}
                  >
                    <img
                      src={highSchoolAchievement.scoreImage}
                      alt="Bảng vàng vinh danh NQH"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 flex items-center justify-center transition-colors">
                      <div className="p-2.5 rounded-full bg-white/90 text-slate-900 group-hover:scale-110 shadow-lg transition-transform">
                        <ZoomIn className="w-5 h-5 text-red-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent p-2 text-center text-white text-[11px] font-bold">
                      {language === 'en' ? 'NQH Honor Roll · No. 121: Nguyen Trung Duc' : 'Bảng vàng NQH · STT 121: Nguyễn Trung Đức'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. HOẠT ĐỘNG ĐỐI NGOẠI & SỰ KIỆN (ACTIVITIES - VCO GROUP) */}
          {(activeTab === 'all' || activeTab === 'activities') && activities.map((act) => (
            <div
              key={act.id}
              className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-md hover:shadow-xl hover:border-red-300 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white p-2 shadow-sm flex items-center justify-center flex-shrink-0 border border-slate-200 overflow-hidden">
                    {act.logo ? (
                      <img
                        src={act.logo}
                        alt={act.organization}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <Globe2 className="w-8 h-8 text-red-600" />
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {act.role}
                      </h3>
                      {act.workType && (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200">
                          {act.workType}
                        </span>
                      )}
                    </div>
                    <div className="text-base font-bold text-slate-800 mt-0.5">
                      {act.organization}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {act.period} {act.duration && `· ${act.duration}`}
                      </span>
                      {act.location && (
                        <>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            {act.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Media Actions */}
                <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                  {act.media?.videoUrl && (
                    <button
                      onClick={() =>
                        onOpenMediaModal?.({
                          type: 'video',
                          url: act.media!.videoUrl!,
                          title: act.media!.videoTitle || `${act.role} - ${act.organization}`,
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-red-600 text-white hover:bg-red-700 transition-all shadow-sm hover:scale-105"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      {t('achieveBtnVideo')}
                    </button>
                  )}
                  {act.media?.imageUrl && (
                    <button
                      onClick={() =>
                        onOpenMediaModal?.({
                          type: 'image',
                          url: act.media!.imageUrl!,
                          title: `${act.organization} - ${act.role}`,
                        })
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-sm hover:scale-105"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                      {t('achieveBtnPhotos')}
                    </button>
                  )}
                  {act.media?.projectUrl && (
                    <a
                      href={act.media.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:text-red-600 border border-slate-200 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      {t('achieveBtnWebsite')}
                    </a>
                  )}
                </div>
              </div>

              {/* Responsibilities & Media Showcase */}
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {act.description}
                  </p>

                  <ul className="space-y-2.5">
                    {act.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-500 font-bold flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5 text-red-600" />
                      {t('achieveSoftSkillsLabel')}
                    </span>
                    {act.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 hover:border-red-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Media Preview Box */}
                {act.media && (act.media.videoUrl || act.media.imageUrl) && (
                  <div className="lg:col-span-4">
                    <div
                      onClick={() => {
                        if (act.media?.videoUrl) {
                          onOpenMediaModal?.({
                            type: 'video',
                            url: act.media.videoUrl,
                            title: act.media.videoTitle || `${act.role} - ${act.organization}`,
                          });
                        } else if (act.media?.imageUrl) {
                          onOpenMediaModal?.({
                            type: 'image',
                            url: act.media.imageUrl,
                            title: `${act.organization} - ${act.role}`,
                          });
                        }
                      }}
                      className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-md cursor-pointer hover:border-red-400 transition-all"
                    >
                      <img
                        src={act.media.imageUrl || '/images/vco-event.jpg'}
                        alt="Hoạt động sự kiện VCO"
                        className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/45 flex items-center justify-center transition-colors">
                        <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          {act.media.videoUrl ? (
                            <Play className="w-5 h-5 fill-white ml-0.5" />
                          ) : (
                            <ZoomIn className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 to-transparent p-3 text-white text-xs font-bold truncate">
                        {act.media.videoTitle || 'Workshop Hướng nghiệp: On The Path #3'}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
