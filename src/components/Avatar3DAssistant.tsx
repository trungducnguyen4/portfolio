import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronUp, Navigation, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface SectionDialog {
  id: string;
  sectionName: string;
  image: string;
  poseTitle: string;
  tagline: string;
  message: string;
  quickAction?: {
    label: string;
    targetId: string;
  };
}

const SECTION_DIALOGS: Record<string, SectionDialog> = {
  hero: {
    id: 'hero',
    sectionName: 'Giới thiệu',
    image: '/avatar3d/avatar_welcome.png',
    poseTitle: 'Chào mừng bạn!',
    tagline: 'AI-Augmented Software Engineer',
    message: 'Xin chào! Mình là Nguyễn Trung Đức. Chào mừng bạn ghé thăm không gian Portfolio của mình!',
    quickAction: {
      label: 'Xem Quá trình học tập',
      targetId: 'education',
    },
  },
  education: {
    id: 'education',
    sectionName: 'Học vấn',
    image: '/avatar3d/avatar_education.png',
    poseTitle: 'Nền tảng TDTU & Khối A01',
    tagline: 'GPA 8.34 · Tốt nghiệp Loại Giỏi',
    message: 'Mình tốt nghiệp Kỹ thuật Phần mềm ĐH Tôn Đức Thắng (GPA 8.34) và lớp 12 chọn A01 THPT Võ Trường Toản (26.3đ) đó!',
    quickAction: {
      label: 'Xem Kinh nghiệm thực chiến',
      targetId: 'experience',
    },
  },
  experience: {
    id: 'experience',
    sectionName: 'Kinh nghiệm',
    image: '/avatar3d/avatar_experience.png',
    poseTitle: 'Hệ thống ERP & Kiến trúc Cloud',
    tagline: 'Lighthouse 99 · Zero Cost Edge',
    message: 'Tại NetViet, mình thiết kế ERP chi phí gần như 0đ trên Cloudflare và chấm công GPS radar thay cho IP tĩnh!',
    quickAction: {
      label: 'Khám phá Dự án AI',
      targetId: 'projects',
    },
  },
  projects: {
    id: 'projects',
    sectionName: 'Dự án AI',
    image: '/avatar3d/avatar_projects.png',
    poseTitle: 'Giải pháp AI Tiên phong',
    tagline: 'Tăng tốc phát triển x3',
    message: 'Mình kết hợp LLM để tự động đọc chứng từ ERP, trích xuất dữ liệu và kiểm thử tự động, giao việc cực nhanh!',
    quickAction: {
      label: 'Xem Bộ kỹ năng',
      targetId: 'skills',
    },
  },
  skills: {
    id: 'skills',
    sectionName: 'Kỹ năng',
    image: '/avatar3d/avatar_skills.png',
    poseTitle: 'Kho vũ khí Công nghệ',
    tagline: 'Java, Cloudflare, AI Tools',
    message: 'Mọi thắc mắc hoặc cơ hội hợp tác, bạn hãy gửi thư cho mình qua phần liên hệ bên dưới nhé!',
    quickAction: {
      label: 'Lên đầu trang',
      targetId: 'hero',
    },
  },
};

export const Avatar3DAssistant: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>('hero');
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [showSpeech, setShowSpeech] = useState<boolean>(true);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll Spy to detect current visible section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'education', 'experience', 'projects', 'skills'];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setCurrentSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3D Tilt calculation on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const activeDialog = SECTION_DIALOGS[currentSection] || SECTION_DIALOGS.hero;

  const scrollToTarget = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Trợ lý ảo 3D Mascot tương tác"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end select-none pointer-events-none"
    >
      {/* Speech Bubble Container */}
      {!isMinimized && showSpeech && (
        <div
          role="status"
          aria-live="polite"
          className="pointer-events-auto mb-3 max-w-[280px] sm:max-w-xs bg-white/95 backdrop-blur-md border-2 border-red-100 rounded-2xl p-3.5 shadow-2xl relative transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
        >
          {/* Close speech bubble button */}
          <button
            type="button"
            onClick={() => setShowSpeech(false)}
            aria-label="Tắt bong bóng thoại"
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-md text-xs cursor-pointer"
            title="Tắt bong bóng thoại"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Section badge indicator */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span className="text-[11px] font-extrabold text-red-600 uppercase tracking-wide">
              {activeDialog.poseTitle}
            </span>
          </div>

          <p className="text-xs text-slate-800 leading-relaxed font-medium">
            {activeDialog.message}
          </p>

          {/* Quick navigation pill button */}
          {activeDialog.quickAction && (
            <button
              type="button"
              onClick={() => scrollToTarget(activeDialog.quickAction!.targetId)}
              className="mt-2.5 w-full py-1.5 px-3 rounded-xl bg-slate-900 hover:bg-red-600 text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Navigation className="w-3 h-3 text-red-400" />
              {activeDialog.quickAction.label}
            </button>
          )}

          {/* Speech bubble tail pointer */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r-2 border-b-2 border-red-100 transform rotate-45"></div>
        </div>
      )}

      {/* 3D Mascot Character Floating Card */}
      <div className="pointer-events-auto relative group">
        {/* Toggle Controls Overlay */}
        <div className="absolute -top-3 -left-3 z-10 flex items-center gap-1">
          <button
            type="button"
            onClick={() => setIsMinimized(!isMinimized)}
            aria-label={isMinimized ? "Phóng to nhân vật 3D" : "Thu nhỏ nhân vật 3D"}
            className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-300 flex items-center justify-center shadow-md transition-all cursor-pointer text-xs"
            title={isMinimized ? "Phóng to nhân vật 3D" : "Thu nhỏ nhân vật 3D"}
          >
            {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5 rotate-180" />}
          </button>
          {!isMinimized && (
            <button
              type="button"
              onClick={() => setShowSpeech(!showSpeech)}
              aria-label={showSpeech ? "Ẩn lời thoại" : "Hiện lời thoại"}
              className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-red-600 hover:border-red-300 flex items-center justify-center shadow-md transition-all cursor-pointer text-xs"
              title={showSpeech ? "Ẩn lời thoại" : "Hiện lời thoại"}
            >
              {showSpeech ? <Volume2 className="w-3.5 h-3.5 text-red-600" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>

        {/* The 3D Interactive Mascot (Frameless, transparent, free-standing) */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            if (isMinimized) {
              setIsMinimized(false);
              setShowSpeech(true);
            } else {
              setShowSpeech(!showSpeech);
            }
          }}
          style={{
            transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
          className={`cursor-pointer transition-all duration-300 flex flex-col items-center justify-end ${
            isMinimized
              ? 'w-14 h-14 rounded-full overflow-hidden border-2 border-red-500 shadow-xl bg-white hover:scale-110 p-0.5'
              : 'w-28 sm:w-36 h-36 sm:h-44 relative group hover:scale-105'
          }`}
          title="Nhân vật 3D Nguyễn Trung Đức (TDTU) - Click để trò chuyện"
        >
          {isMinimized ? (
            <img
              src={activeDialog.image}
              alt={`3D Avatar Trung Đức - ${activeDialog.sectionName}`}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <>
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute -inset-3 bg-radial from-red-500/25 via-red-500/5 to-transparent rounded-full blur-xl pointer-events-none -z-10"></div>

              {/* Free-standing Transparent Mascot */}
              <img
                src={activeDialog.image}
                alt={`3D Avatar Trung Đức - ${activeDialog.sectionName}`}
                className="h-32 sm:h-40 w-auto object-contain filter drop-shadow-[0_16px_24px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_20px_28px_rgba(220,38,38,0.35)] transition-all duration-300"
              />

              {/* Contact Ground Shadow */}
              <div className="w-20 h-2 bg-black/20 rounded-full blur-xs -mt-1 transform scale-x-95"></div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};
