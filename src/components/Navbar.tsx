import React from 'react';
import { Sparkles, Edit3, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  onOpenCustomizer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCustomizer }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/90 border-b border-slate-200/80 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-red-700 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-red-500/25 group-hover:scale-105 transition-transform">
              TĐ
            </div>
            <div>
              <div className="font-bold text-slate-900 group-hover:text-red-600 transition-colors flex items-center gap-1.5">
                Trung Đức
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">
                  <Sparkles className="w-2.5 h-2.5 mr-1 text-red-600" />
                  AI Engineer
                </span>
              </div>
              <div className="text-xs text-slate-500 font-medium">TDTU · Software Engineering (8.34)</div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-6 text-sm font-semibold text-slate-700">
            <a href="#about" className="hover:text-red-600 transition-colors px-2 py-1">{t('navAbout')}</a>
            <a href="#education" className="hover:text-red-600 transition-colors px-2 py-1">{t('navEducation')}</a>
            <a href="#agentic-workflow" className="hover:text-red-600 transition-colors px-2 py-1 flex items-center gap-1.5">
              <span>{t('navAgentic')}</span>
              <span className="text-[10px] font-black bg-red-50 text-red-700 px-1.5 py-0.5 rounded-full border border-red-200">{t('navPrs')}</span>
            </a>
            <a href="#experience" className="hover:text-red-600 transition-colors px-2 py-1">{t('navExperience')}</a>
            {/* <a href="#projects" className="hover:text-red-600 transition-colors px-2 py-1">Dự án AI</a> */}
            <a href="#achievements" className="hover:text-red-600 transition-colors px-2 py-1">{t('navAchievements')}</a>
            {/* <a href="#skills" className="hover:text-red-600 transition-colors px-2 py-1">Công nghệ</a> */}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Toggle */}
            <div className="flex items-center rounded-xl bg-slate-100 p-0.5 border border-slate-300/80 text-xs font-bold shadow-2xs">
              <button
                type="button"
                onClick={() => setLanguage('vi')}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                  language === 'vi'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
                title="Tiếng Việt"
              >
                <span>🇻🇳</span>
                <span className="text-[11px]">VI</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                  language === 'en'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
                title="English"
              >
                <span>🇬🇧</span>
                <span className="text-[11px]">EN</span>
              </button>
            </div>

            {/* Customizer Button */}
            <button
              onClick={onOpenCustomizer}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300/80 transition-all hover:scale-105 shadow-xs"
              title={t('navCustomize')}
            >
              <Edit3 className="w-3.5 h-3.5 text-red-600" />
              <span className="hidden sm:inline">{t('navCustomize')}</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold bg-red-600 text-white hover:bg-red-700 transition-all shadow-md shadow-red-600/25 hover:scale-105"
            >
              <Mail className="w-3.5 h-3.5" />
              {t('navContact')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
