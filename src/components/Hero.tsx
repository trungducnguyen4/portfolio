import React from 'react';
import type { ProfileInfo } from '../types/portfolio';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { SectionMascot } from './SectionMascot';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  profile: ProfileInfo;
  onOpenCustomizer?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-red-50/50 via-white to-white">
      {/* Background Decorative Accents */}
      <div className="absolute top-12 left-1/3 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-36 right-1/4 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Introductions & Value Proposition */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200 mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-red-600 -ml-3"></span>
              <span>{profile.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight">
              {t('heroGreeting')}{' '}
              <span className="text-gradient-red block mt-1">{profile.name}</span>
            </h1>

            {/* Sub-headline / Persona */}
            <div className="mt-3.5 flex items-center justify-center lg:justify-start gap-2 text-lg sm:text-xl font-bold text-slate-800">
              <span className="text-red-600 font-mono font-extrabold">❯</span>
              <span>{profile.title}</span>
            </div>

            {/* Bio paragraph */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              {profile.bio}
            </p>

            {/* Key stats row (Red - White - Black) */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white p-4 rounded-2xl text-center border-2 border-slate-100 shadow-sm hover:border-red-200 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-red-600 font-mono">
                  {profile.stats.gpa}
                </div>
                <div className="text-xs text-slate-600 mt-1 font-semibold">{profile.stats.gpaNote}</div>
              </div>
              <div className="bg-white p-4 rounded-2xl text-center border-2 border-slate-100 shadow-sm hover:border-red-200 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                  {profile.stats.experienceMonths}
                </div>
                <div className="text-xs text-slate-600 mt-1 font-semibold">{profile.stats.experienceNote}</div>
              </div>
              <div className="bg-white p-4 rounded-2xl text-center border-2 border-slate-100 shadow-sm hover:border-red-200 transition-colors">
                <div className="text-2xl sm:text-3xl font-black text-red-600 font-mono">
                  {profile.stats.aiDeliveryRate}
                </div>
                <div className="text-xs text-slate-600 mt-1 font-semibold">{profile.stats.aiDeliveryNote}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/25 transition-all hover:scale-105"
              >
                {t('heroBtnExperience')}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#education"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-slate-900 bg-white border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-xs"
              >
                {t('heroBtnEducation')}
              </a>
            </div>

            {/* Social and Location meta */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm sm:text-base font-semibold text-slate-700">
              {/* Location */}
              <div className="inline-flex items-center gap-2 text-slate-800">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span>{profile.location}</span>
              </div>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 hover:text-red-600 border border-slate-200 hover:border-red-300 shadow-xs transition-all text-sm sm:text-base font-bold"
                title="GitHub: trungducnguyen4"
              >
                <GithubIcon className="w-5 h-5 text-slate-900 group-hover:text-red-600 flex-shrink-0 transition-colors" />
                <span>GitHub</span>
                <span className="text-xs font-mono font-medium text-slate-500 group-hover:text-red-500">/ trungducnguyen4</span>
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 hover:text-red-600 border border-slate-200 hover:border-red-300 shadow-xs transition-all text-sm sm:text-base font-bold"
                title="LinkedIn: trungducnguyen1407"
              >
                <LinkedinIcon className="w-5 h-5 text-[#0A66C2] group-hover:text-red-600 flex-shrink-0 transition-colors" />
                <span>LinkedIn</span>
                <span className="text-xs font-mono font-medium text-slate-500 group-hover:text-red-500">/ trungducnguyen1407</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 text-slate-800 hover:text-red-600 transition-colors"
                title={profile.email}
              >
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="font-bold text-slate-900 group-hover:text-red-600">{profile.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Mascot (Mục Giới thiệu) */}
          <div className="w-full max-w-md lg:w-[480px] flex flex-col items-center justify-center">
            {/* Large 3D Mascot (Mục Giới thiệu) - Frameless Transparent */}
            <SectionMascot
              image="/avatar3d/avatar_welcome.png"
              alt="3D Mascot Trung Duc"
              speechTitle={t('heroMascotTitle')}
              speechText={t('heroMascotSpeech')}
              size="xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
