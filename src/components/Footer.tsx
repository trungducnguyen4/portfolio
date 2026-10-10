import React, { useState } from 'react';
import type { ProfileInfo } from '../types/portfolio';
import { Mail, ArrowUp, Copy, Check, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { SectionMascot } from './SectionMascot';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  profile: ProfileInfo;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-20 pb-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Banner: Matte Black with 3D Mascot on the Right */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border-2 border-slate-900 shadow-2xl relative overflow-hidden mb-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl flex-1 text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-red-600/20 text-red-400 border border-red-500/30 mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-red-500" />
              {t('footerBannerTag')}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {t('footerBannerTitle')}
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {t('footerBannerText')}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/30 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                {t('footerBtnEmail')}
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:text-white transition-all shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-red-400" />
                    <span className="text-red-400">{t('footerCopiedEmail')}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{profile.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Large Frameless 3D Mascot Character */}
          <div className="flex-shrink-0 flex items-center justify-center pt-4 lg:pt-0">
            <SectionMascot
              image="/avatar3d/avatar_contact.png"
              alt="3D Mascot Nguyễn Trung Đức"
              speechTitle={t('footerMascotTitle')}
              speechText={t('footerMascotSpeech')}
              size="xl"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-slate-200 text-xs text-slate-600 font-medium">
          <div>
            <div className="font-bold text-slate-900">
              © {new Date().getFullYear()} {profile.name} · {t('footerAlumnus')}
            </div>
            <div className="mt-1 text-slate-500">
              {t('footerRights')}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-700 hover:text-slate-900 transition-colors p-1"
              title="GitHub: trungducnguyen4"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#0A66C2] hover:opacity-80 transition-opacity p-1"
              title="LinkedIn: trungducnguyen1407"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-300 shadow-xs transition-all ml-2"
              title={t('footerScrollTop')}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
