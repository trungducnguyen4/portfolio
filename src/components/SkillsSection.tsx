import React from 'react';
import { Cpu, Terminal, Layers, GitBranch, Sparkles } from 'lucide-react';
import { SectionMascot } from './SectionMascot';

interface SkillsProps {
  skills: {
    aiArsenal: string[];
    languages: string[];
    frameworks: string[];
    toolsAndDevops: string[];
  };
}

export const SkillsSection: React.FC<SkillsProps> = ({ skills }) => {
  // Ensure excluded items (Java, HTML/CSS, Spring, QA/QC) are never rendered
  const cleanLanguages = (skills.languages || []).filter(
    (item) => !item.startsWith('Java') && !item.toLowerCase().includes('html')
  );
  const cleanFrameworks = (skills.frameworks || []).filter(
    (item) => !item.toLowerCase().includes('spring') && !item.toLowerCase().includes('css')
  );
  const cleanDevops = (skills.toolsAndDevops || []).filter(
    (item) => !item.toLowerCase().includes('qa') && !item.toLowerCase().includes('qc')
  );

  return (
    <section id="skills" className="py-14 sm:py-16 relative bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200 mb-3 shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-red-600" />
            Năng lực Kỹ thuật &amp; Công cụ
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Công nghệ sử dụng
          </h2>
          <p className="mt-2.5 text-slate-600 text-sm sm:text-base font-medium">
            Hệ thống công nghệ tinh gọn tập trung vào lập trình Backend vững chắc, tối ưu giao diện và các giải pháp AI thực tiễn.
          </p>
        </div>

        {/* Content Row: 4 Cards Grid + Large Frameless 3D Mascot in Same Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 4 Cards Grid (2x2 on Desktop) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          
            {/* Card 1: AI & LLM Arsenal (Red Highlight) */}
            <div className="bg-red-50/40 rounded-2xl p-5 border-2 border-red-200 shadow-sm hover:shadow-md hover:border-red-400 transition-all flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md shadow-red-600/25 flex-shrink-0">
                    <Sparkles className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900">
                      AI &amp; LLM Arsenal
                    </h3>
                    <p className="text-[11px] text-slate-600 font-medium">
                      Tăng tốc lập trình &amp; tích hợp AI
                    </p>
                  </div>
                </div>
                <div className="space-y-1.5 mt-3">
                  {skills.aiArsenal.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-xl bg-white border border-red-200/80 text-xs text-slate-900 font-bold flex items-center gap-2 shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: Languages */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs flex-shrink-0">
                    <Terminal className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900">
                      Ngôn ngữ Lập trình
                    </h3>
                    <p className="text-[11px] text-slate-600 font-medium">
                      Typing chuẩn, xử lý dữ liệu &amp; AI
                    </p>
                  </div>
                </div>
                <div className="space-y-1.5 mt-3">
                  {cleanLanguages.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-semibold flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: Frameworks & Web */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs flex-shrink-0">
                    <Layers className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900">
                      Frameworks &amp; Web
                    </h3>
                    <p className="text-[11px] text-slate-600 font-medium">
                      Backend bền vững &amp; Web app hiện đại
                    </p>
                  </div>
                </div>
                <div className="space-y-1.5 mt-3">
                  {cleanFrameworks.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-semibold flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 4: DevOps & Process */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs flex-shrink-0">
                    <GitBranch className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900">
                      Quy trình &amp; DevOps
                    </h3>
                    <p className="text-[11px] text-slate-600 font-medium">
                      Git flow, Docker và phương pháp Agile
                    </p>
                  </div>
                </div>
                <div className="space-y-1.5 mt-3">
                  {cleanDevops.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-semibold flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 flex-shrink-0"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* 3D Mascot on Right (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-4 lg:py-0">
            <SectionMascot
              image="/avatar3d/avatar_skills.png"
              alt="3D Mascot Công Nghệ Sử Dụng Nguyễn Trung Đức"
              speechTitle="Công nghệ sử dụng"
              speechText="Làm chủ công nghệ Full-stack hiện đại và các giải pháp AI tiên tiến!"
              size="lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
