import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import type { PortfolioData } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { TimelineSection } from './components/TimelineSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';
import { MediaModal } from './components/MediaModal';
import { CustomizerModal } from './components/CustomizerModal';

export const App: React.FC = () => {
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
        if (parsed.projects && !parsed.projects.some((p: any) => p.id === 'nexrall-hr-copilot')) {
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

  // Portfolio data state with LocalStorage persistence
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem('trungduc_portfolio_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...initialPortfolioData,
          ...parsed,
          profile: {
            ...initialPortfolioData.profile,
            ...(parsed.profile || {}),
            title: initialPortfolioData.profile.title,
            tagline: initialPortfolioData.profile.tagline,
            bio: initialPortfolioData.profile.bio,
            github: initialPortfolioData.profile.github,
            linkedin: initialPortfolioData.profile.linkedin,
            stats: initialPortfolioData.profile.stats,
          },
          education: {
            ...initialPortfolioData.education,
            ...(parsed.education || {}),
            diplomaCover: initialPortfolioData.education.diplomaCover,
            honors: initialPortfolioData.education.honors,
            activity: initialPortfolioData.education.activity,
            aiThesis: initialPortfolioData.education.aiThesis,
            graduationThesis: initialPortfolioData.education.graduationThesis,
            highSchool: initialPortfolioData.education.highSchool,
          },
          certifications: initialPortfolioData.certifications,
          activities: initialPortfolioData.activities,
          highSchoolAchievement: initialPortfolioData.highSchoolAchievement,
          skills: initialPortfolioData.skills,
          experiences: initialPortfolioData.experiences,
          projects: (parsed.projects && parsed.projects.some((p: any) => p.id === 'nexrall-hr-copilot'))
            ? parsed.projects
            : initialPortfolioData.projects,
        };
      }
    } catch (e) {
      console.error('Error loading saved portfolio data:', e);
    }
    return initialPortfolioData;
  });

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
    localStorage.setItem('trungduc_portfolio_data', JSON.stringify(newData));
  };

  // Reset to default handler
  const handleResetData = () => {
    setData(initialPortfolioData);
    localStorage.removeItem('trungduc_portfolio_data');
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

        <TimelineSection
          experiences={data.experiences}
          onOpenMediaModal={handleOpenMedia}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        <ProjectsSection
          projects={data.projects}
          onOpenMediaModal={handleOpenMedia}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        <AchievementsSection
          certifications={data.certifications || initialPortfolioData.certifications}
          activities={data.activities || initialPortfolioData.activities}
          highSchoolAchievement={data.highSchoolAchievement || initialPortfolioData.highSchoolAchievement}
          onOpenMediaModal={handleOpenMedia}
        />

        <SkillsSection
          skills={data.skills}
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

export default App;
