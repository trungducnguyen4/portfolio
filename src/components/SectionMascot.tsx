import React, { useRef, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export interface SectionMascotProps {
  image: string; // transparent PNG path
  alt: string;
  speechText?: string;
  speechTitle?: string;
  speechPosition?: 'top' | 'left' | 'right';
  size?: 'md' | 'lg' | 'xl';
  className?: string;
  children?: React.ReactNode;
}

export const SectionMascot: React.FC<SectionMascotProps> = ({
  image,
  alt,
  speechText,
  speechTitle = 'Mascot Nguyễn Trung Đức',
  speechPosition = 'top',
  size = 'lg',
  className = '',
  children,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

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
    setIsHovered(false);
  };

  // Height / scale classes (much larger, completely free-standing)
  const sizeClasses = {
    md: 'h-64 sm:h-72 w-auto max-w-[280px]',
    lg: 'h-72 sm:h-84 md:h-96 w-auto max-w-[340px]',
    xl: 'h-80 sm:h-96 md:h-[420px] w-auto max-w-[400px]',
  }[size];

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* Speech Bubble (Clean & Floating) */}
      {speechText && (
        <div
          className={`z-20 mb-2 max-w-[280px] sm:max-w-xs animate-speech-bob transition-all duration-300 ${
            speechPosition === 'left'
              ? 'lg:absolute lg:right-[102%] lg:top-1/4 lg:mb-0 lg:mr-2'
              : speechPosition === 'right'
              ? 'lg:absolute lg:left-[102%] lg:top-1/4 lg:mb-0 lg:ml-2'
              : ''
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-2 border-red-200/90 rounded-2xl p-3.5 shadow-2xl relative text-left">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-red-600 -ml-3.5"></span>
              <span className="text-[11px] font-black uppercase text-red-600 tracking-wide flex items-center gap-1">
                <MessageCircle className="w-3 h-3 text-red-500 fill-red-500/20" />
                {speechTitle}
              </span>
            </div>
            <p className="text-xs text-slate-800 leading-relaxed font-semibold">
              {speechText}
            </p>

            {/* Bubble Tail */}
            {speechPosition === 'top' && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-red-200/90 transform rotate-45"></div>
            )}
            {speechPosition === 'left' && (
              <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t-2 border-r-2 border-red-200/90 transform rotate-45"></div>
            )}
            {speechPosition === 'right' && (
              <div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-b-2 border-l-2 border-red-200/90 transform rotate-45"></div>
            )}
          </div>
        </div>
      )}

      {/* Floating 3D Mascot Character (NO FRAME, NO BORDER, NON-CLICKABLE) */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
            : undefined,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative group animate-mascot-float flex flex-col items-center cursor-default pointer-events-auto"
      >
        {/* Subtle Ambient Glow Behind Character */}
        <div className="absolute -inset-6 bg-radial from-red-500/20 via-red-500/5 to-transparent rounded-full blur-2xl pointer-events-none -z-10 animate-mascot-glow"></div>

        {/* Transparent Mascot Image with realistic drop shadow */}
        <img
          src={image}
          alt={alt}
          className={`${sizeClasses} object-contain filter drop-shadow-[0_22px_30px_rgba(0,0,0,0.22)] group-hover:drop-shadow-[0_28px_38px_rgba(220,38,38,0.25)] transition-all duration-300 pointer-events-none`}
        />

        {/* Orbiting / Surrounding Children (e.g., floating tech logos) */}
        {children}

        {/* Realistic Contact Ground Shadow */}
        <div className="w-3/5 h-3 bg-black/15 rounded-full blur-sm -mt-2 transform scale-x-95"></div>
      </div>
    </div>
  );
};
