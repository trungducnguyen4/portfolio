import React from 'react';
import type { ProjectItem } from '../types/portfolio';
import { Sparkles, Play, ExternalLink, CheckCircle2, Plus } from 'lucide-react';
import { GithubIcon } from './Icons';
import { SectionMascot } from './SectionMascot';

interface ProjectsSectionProps {
  projects: ProjectItem[];
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

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onOpenMediaModal,
  onOpenCustomizer,
}) => {
  return (
    <section id="projects" className="py-20 relative bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200 mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              Sản phẩm & Giải pháp AI Nổi bật
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Dự án Tiêu biểu (AI Showcases)
            </h2>
            <p className="mt-2 text-slate-600 text-base max-w-2xl font-medium">
              Các sản phẩm phát triển phần mềm kết hợp AI: Từ trợ lý ERP, hệ thống RAG tri thức nội bộ đến bot kiểm thử mã nguồn tự động.
            </p>
          </div>

          <button
            onClick={onOpenCustomizer}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 transition-all hover:scale-105 shadow-xs"
          >
            <Plus className="w-3.5 h-3.5 text-red-600" />
            Thêm Dự án mới
          </button>
        </div>

        {/* Projects Grid with 3D Mascot in the Same Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl hover:border-red-300 flex flex-col transition-all duration-300 group"
            >
              {/* Project Image & Video Overlay */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-950/90 text-white border border-slate-700 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Red Video Play Button Overlay */}
                {project.videoUrl && (
                  <button
                    onClick={() =>
                      onOpenMediaModal({
                        type: 'video',
                        url: project.videoUrl!,
                        title: `Video Demo: ${project.title}`,
                      })
                    }
                    className="absolute inset-0 flex items-center justify-center group-hover:bg-slate-950/20 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-lg shadow-red-600/50 hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </button>
                )}
              </div>

              {/* Project Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs font-bold text-red-600 mt-1">
                    {project.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed line-clamp-3">
                    {renderFormattedText(project.description)}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-4 space-y-1.5">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{renderFormattedText(feat)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & Links Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    {project.videoUrl ? (
                      <button
                        onClick={() =>
                          onOpenMediaModal({
                            type: 'video',
                            url: project.videoUrl!,
                            title: `Video Demo: ${project.title}`,
                          })
                        }
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-red-600" />
                        Xem Demo Video
                      </button>
                    ) : (
                      <span></span>
                    )}

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-700 hover:text-red-600 transition-colors p-1"
                          title="Source Code"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-700 hover:text-red-600 transition-colors p-1"
                          title="Trang demo trực tiếp"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}

          {/* 4th Column: Large Frameless 3D Mascot with 5 Official Logos Surrounding Him */}
          <div className="flex flex-col items-center justify-center p-4 xl:p-6 text-center">
            <div className="flex flex-col items-center w-full">
              <SectionMascot
                image="/avatar3d/avatar_projects.png?v=3"
                alt="3D Mascot Dự án AI Nguyễn Trung Đức"
                speechTitle="Hệ sinh thái AI & Tooling"
                speechText="Tận dụng sức mạnh từ Codex, Antigravity, DeepSeek, VS Code & Windows Terminal để tăng tốc phát triển phần mềm x3!"
                size="xl"
              >
                {/* 5 Official Logos Orbiting / Surrounding Mascot (No CSS color modification, frameless) */}
                {/* 1. Codex (Top-Left, hovering near left shoulder) */}
                <div
                  className="absolute top-[21%] left-[21%] z-20 animate-orbit-1 group/logo"
                  title="OpenAI Codex"
                >
                  <img
                    src="/logos/codex.png"
                    alt="OpenAI Codex"
                    className="w-10 h-10 sm:w-11 sm:h-11 object-contain filter drop-shadow-[0_6px_14px_rgba(0,0,0,0.15)] hover:scale-125 transition-transform duration-300 pointer-events-auto cursor-pointer"
                  />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-slate-900/90 text-white text-[10px] font-bold whitespace-nowrap opacity-0 group-hover/logo:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md z-30">
                    Codex
                  </span>
                </div>

                {/* 2. Google Antigravity (Top-Right, hovering near right shoulder) */}
                <div
                  className="absolute top-[19%] right-[19%] z-20 animate-orbit-2 group/logo"
                  title="Google Antigravity"
                >
                  <img
                    src="/logos/antigravity.png?v=2"
                    alt="Google Antigravity"
                    className="w-11 h-10 sm:w-12 sm:h-10 object-contain filter drop-shadow-[0_6px_14px_rgba(0,0,0,0.15)] hover:scale-125 transition-transform duration-300 pointer-events-auto cursor-pointer"
                  />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-slate-900/90 text-white text-[10px] font-bold whitespace-nowrap opacity-0 group-hover/logo:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md z-30">
                    Antigravity
                  </span>
                </div>

                {/* 3. DeepSeek AI (Mid-Right, floating right beside the thumbs-up hand!) */}
                <div
                  className="absolute top-[46%] right-[12%] z-20 animate-orbit-1 group/logo"
                  title="DeepSeek AI"
                >
                  <img
                    src="/logos/deepseek.png"
                    alt="DeepSeek"
                    className="w-11 h-11 sm:w-12 sm:h-12 object-contain filter drop-shadow-[0_6px_14px_rgba(0,0,0,0.15)] hover:scale-125 transition-transform duration-300 pointer-events-auto cursor-pointer"
                  />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-slate-900/90 text-white text-[10px] font-bold whitespace-nowrap opacity-0 group-hover/logo:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md z-30">
                    DeepSeek
                  </span>
                </div>

                {/* 4. VS Code (Mid-Left, floating beside left arm/waist) */}
                <div
                  className="absolute top-[52%] left-[18%] z-20 animate-orbit-2 group/logo"
                  title="Visual Studio Code"
                >
                  <img
                    src="/logos/vscode.png"
                    alt="VS Code"
                    className="w-10 h-10 sm:w-11 sm:h-11 object-contain filter drop-shadow-[0_6px_14px_rgba(0,0,0,0.15)] hover:scale-125 transition-transform duration-300 pointer-events-auto cursor-pointer"
                  />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-slate-900/90 text-white text-[10px] font-bold whitespace-nowrap opacity-0 group-hover/logo:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md z-30">
                    VS Code
                  </span>
                </div>

                {/* 5. Windows Terminal (Bottom-Right, below the thumbs-up hand near hip/leg) */}
                <div
                  className="absolute bottom-[16%] right-[16%] z-20 animate-orbit-1 group/logo"
                  title="Windows Terminal"
                >
                  <img
                    src="/logos/terminal.png"
                    alt="Windows Terminal"
                    className="w-11 h-8 sm:w-12 sm:h-9 object-contain filter drop-shadow-[0_6px_14px_rgba(0,0,0,0.15)] hover:scale-125 transition-transform duration-300 pointer-events-auto cursor-pointer"
                  />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-slate-900/90 text-white text-[10px] font-bold whitespace-nowrap opacity-0 group-hover/logo:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md z-30">
                    Terminal
                  </span>
                </div>
              </SectionMascot>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
