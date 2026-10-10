import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { initialPortfolioDataEn } from './data/portfolioDataEn';
import type { PortfolioData } from './types/portfolio';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { AgenticWorkflowSection } from './components/AgenticWorkflowSection';
import { TimelineSection } from './components/TimelineSection';
import { AchievementsSection } from './components/AchievementsSection';
import { Footer } from './components/Footer';
import { MediaModal } from './components/MediaModal';
import { CustomizerModal } from './components/CustomizerModal';

const AppContent: React.FC = () => {
  const { language } = useLanguage();
  const defaultData = language === 'en' ? initialPortfolioDataEn : initialPortfolioData;

  // Always enforce Light Mode & clear stale skills cache
  useEffect(() => {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('trungduc_theme', 'light');
    try {
      const saved = localStorage.getItem('trungduc_portfolio_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        let changed = false;
        if (parsed.skills) {
          delete parsed.skills;
          changed = true;
        }
        if (parsed.projects && (!parsed.projects.some((p: any) => p.id === 'nexrall-hr-copilot') || parsed.projects.some((p: any) => p.id === 'nexrall-hr-copilot' && p.liveUrl?.includes('hrnetviet')))) {
          delete parsed.projects;
          changed = true;
        }
        if (parsed.experiences) {
          delete parsed.experiences;
          changed = true;
        }
        if (parsed.profile) {
          parsed.profile.title = initialPortfolioData.profile.title;
          parsed.profile.tagline = initialPortfolioData.profile.tagline;
          parsed.profile.bio = initialPortfolioData.profile.bio;
          parsed.profile.github = initialPortfolioData.profile.github;
          parsed.profile.linkedin = initialPortfolioData.profile.linkedin;
          parsed.profile.stats = initialPortfolioData.profile.stats;
          changed = true;
        }
        if (changed) {
          localStorage.setItem('trungduc_portfolio_data', JSON.stringify(parsed));
        }
      }
    } catch {
      // ignore
    }
  }, []);

  // Portfolio data state with LocalStorage persistence per language
  const [data, setData] = useState<PortfolioData>(defaultData);

  // Sync data when language toggles if no custom overrides or update base
  useEffect(() => {
    try {
      const storageKey = `trungduc_portfolio_data_${language}`;
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        setData({
          ...defaultData,
          ...parsed,
        });
        return;
      }
    } catch (e) {
      console.error('Error loading saved portfolio data:', e);
    }
    setData(defaultData);
  }, [language]);

  // Media Modal state
  const [mediaModal, setMediaModal] = useState<{
    isOpen: boolean;
    data: { type: 'video' | 'image'; url: string; title: string } | null;
  }>({
    isOpen: false,
    data: null,
  });

  // Customizer Modal state
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);

  // Save handler from customizer
  const handleSaveData = (newData: PortfolioData) => {
    setData(newData);
    try {
      localStorage.setItem(`trungduc_portfolio_data_${language}`, JSON.stringify(newData));
    } catch {
      // ignore
    }
  };

  // Reset to default handler
  const handleResetData = () => {
    setData(defaultData);
    try {
      localStorage.removeItem(`trungduc_portfolio_data_${language}`);
      localStorage.removeItem('trungduc_portfolio_data');
    } catch {
      // ignore
    }
  };

  const handleOpenMedia = (media: { type: 'video' | 'image'; url: string; title: string }) => {
    setMediaModal({
      isOpen: true,
      data: media,
    });
  };

  const handleCloseMedia = () => {
    setMediaModal({
      isOpen: false,
      data: null,
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300">
      {/* Navigation */}
      <Navbar
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Content */}
      <main>
        <Hero
          profile={data.profile}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        <Education
          education={data.education}
          onOpenMediaModal={handleOpenMedia}
        />

        <AgenticWorkflowSection
          data={data.agenticWorkflow || defaultData.agenticWorkflow}
          onOpenMediaModal={handleOpenMedia}
        />

        <TimelineSection
          experiences={data.experiences}
          onOpenMediaModal={handleOpenMedia}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        <AchievementsSection
          certifications={data.certifications || defaultData.certifications}
          activities={data.activities || defaultData.activities}
          highSchoolAchievement={data.highSchoolAchievement || defaultData.highSchoolAchievement}
          onOpenMediaModal={handleOpenMedia}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={data.profile}
      />

      {/* Video / Image Lightbox Modal */}
      <MediaModal
        isOpen={mediaModal.isOpen}
        onClose={handleCloseMedia}
        media={mediaModal.data}
      />

      {/* Visual Customizer / JSON Editor Modal */}
      <CustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        data={data}
        onSave={handleSaveData}
        onReset={handleResetData}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
