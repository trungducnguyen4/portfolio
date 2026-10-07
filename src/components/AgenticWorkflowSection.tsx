import React from 'react';
import type { AgenticWorkflowData } from '../types/portfolio';
import {
  Workflow,
  GitPullRequest,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  Terminal,
  FileCode,
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface AgenticWorkflowSectionProps {
  data?: AgenticWorkflowData;
  onOpenMediaModal?: (media: { type: 'video' | 'image'; url: string; title: string }) => void;
}

export const AgenticWorkflowSection: React.FC<AgenticWorkflowSectionProps> = ({
  data,
}) => {
  if (!data) return null;

  const comparison = data.comparisons?.[0];

  return (
    <section id="agentic-workflow" className="py-20 relative bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide uppercase bg-red-50 text-red-700 border border-red-200 mb-3 shadow-2xs">
            <Workflow className="w-3.5 h-3.5 text-red-600" />
            <span>{data.badge || 'Git Flow & Pull Request Verification Standard'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {data.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {data.subtitle}
          </p>
        </div>

        {/* Engineering Manifesto Banner (White Tone / Black Text) */}
        {data.manifesto && (
          <div className="relative mb-12 rounded-3xl bg-white text-slate-900 p-6 sm:p-8 border-2 border-slate-200 shadow-sm overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-red-50 text-red-700 border border-red-200">
                  <GitPullRequest className="w-3.5 h-3.5 text-red-600" />
                  <span>Kỷ luật Kỹ sư trong Kỷ nguyên AI</span>
                </div>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-semibold">
                  &ldquo;{data.manifesto}&rdquo;
                </p>
              </div>
              <div className="flex-shrink-0 flex items-center gap-2.5 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-red-600 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Cam kết Kỹ thuật</div>
                  <div className="text-xs font-black text-slate-900">100% Verified PRs</div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            {data.stats && data.stats.length > 0 && (
              <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-100">
                {data.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-200 transition-colors">
                    <div className="text-xl sm:text-2xl font-black text-slate-900 font-mono">{stat.val}</div>
                    <div className="text-xs font-bold text-red-600 mt-0.5">{stat.label}</div>
                    <div className="text-[11px] text-slate-600 mt-1 line-clamp-1">{stat.desc}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* HERO COMPARISON: TRADITIONAL AI USAGE VS PR PROOF OF WORK */}
        {comparison && (
          <div className="mb-14">
            <div className="text-center mb-6">
              <span className="text-xs font-black uppercase text-slate-500 tracking-wider">
                Trực diện Đối chiếu (Side-by-Side Comparison)
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              
              {/* LEFT CARD: NAIVE AI / TRADITIONAL WAY */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7 flex flex-col justify-between shadow-xs transition-all hover:border-slate-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-200 text-slate-700">
                      Cách dùng AI Thông thường
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                      Zero Verification
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-800 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      <span>{comparison.traditionalWay.title}</span>
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {comparison.traditionalWay.desc}
                    </p>
                  </div>

                  {comparison.traditionalWay.bullets && (
                    <div className="space-y-2 pt-2">
                      <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        Thực trạng &amp; Rủi ro tồn tại:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {comparison.traditionalWay.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <XCircle className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="flex items-start gap-2 text-xs text-amber-800 font-semibold bg-amber-50/90 border border-amber-200/80 p-3.5 rounded-2xl">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Hệ quả: {comparison.traditionalWay.drawback}</span>
                  </div>
                </div>
              </div>

              {/* RIGHT CARD: PR PROOF OF WORK (HERO CARD MATCHING USER'S SCREENSHOT) */}
              <div className="rounded-3xl border-2 border-red-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between shadow-lg shadow-red-500/5 relative overflow-hidden transition-all hover:border-red-300">
                <div className="absolute top-0 right-0 w-2.5 h-full bg-red-600" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-red-50 text-red-700 border border-red-200">
                      Kỷ luật Kỹ sư &amp; Git Flow
                    </span>
                    <span className="text-xs font-bold text-red-600 flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-red-600" />
                      100% Verified
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span>{comparison.agenticWay.title}</span>
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {comparison.agenticWay.desc}
                    </p>
                  </div>

                  {comparison.agenticWay.bullets && (
                    <div className="space-y-2 pt-2">
                      <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                        Quy chuẩn Bắt buộc trong mỗi PR:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {comparison.agenticWay.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-600 mt-0.5 flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-red-100">
                  <div className="flex items-start gap-2 text-xs text-red-800 font-semibold bg-red-50/80 border border-red-200/80 p-3.5 rounded-2xl">
                    <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>{comparison.agenticWay.advantage}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 4-STEP PR PIPELINE / CHECKLIST (WITH DETAILED CREATED FILES & ARTIFACTS) */}
        {data.pipeline && data.pipeline.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-red-600" />
                <h4 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-wider">
                  Quy trình 4 Bước Nghiệm thu PR (Pull Request Pipeline)
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                Zero-Break Guarantee
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
              {data.pipeline.map((stage, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-slate-50/70 border border-slate-200 hover:border-red-300 p-5 shadow-xs transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Stage Header */}
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-xl bg-red-600 text-white font-mono font-black text-xs flex items-center justify-center shadow-xs">
                        {stage.step}
                      </span>
                      {stage.proofLabel && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200 shadow-2xs">
                          {stage.proofLabel}
                        </span>
                      )}
                    </div>

                    <div>
                      <h5 className="text-sm font-extrabold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                        {stage.title}
                      </h5>
                      {stage.subtitle && (
                        <div className="text-[11px] font-semibold text-slate-500 mt-0.5">
                          {stage.subtitle}
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {stage.desc}
                    </p>

                    {/* Core Action Items */}
                    {stage.actionItems && (
                      <div className="space-y-1.5 pt-1">
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-wider">
                          Nghiệp vụ thực thi:
                        </div>
                        <ul className="space-y-1 text-xs text-slate-600">
                          {stage.actionItems.map((act, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 flex-shrink-0" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CONCRETE CREATED FILES & ARTIFACTS SECTION */}
                    {stage.createdFiles && stage.createdFiles.length > 0 && (
                      <div className="pt-3 border-t border-slate-200 space-y-2">
                        <div className="flex items-center gap-1.5 text-[11px] font-black text-slate-900 uppercase tracking-wider">
                          <FileCode className="w-3.5 h-3.5 text-red-600" />
                          <span>File Mã Nguồn Đã Tạo:</span>
                        </div>
                        <div className="space-y-1.5">
                          {stage.createdFiles.map((f, fIdx) => (
                            <div
                              key={fIdx}
                              className="p-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-red-200 transition-all text-left"
                            >
                              <div className="flex items-center justify-between gap-1 flex-wrap">
                                <span className="font-mono text-[10.5px] font-bold text-red-700 bg-red-50/80 px-1.5 py-0.5 rounded border border-red-200/60 break-all">
                                  {f.name}
                                </span>
                                {f.path && (
                                  <span className="text-[9.5px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                                    {f.path}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-600 mt-1 leading-snug font-normal">
                                {f.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                    <span>Giai đoạn {stage.step}/04</span>
                    <ArrowRight className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REAL-WORLD PROOF OF WORK: GITHUB PULL REQUESTS */}
        {data.realWorldProof && data.realWorldProof.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4 text-slate-900" />
                <h4 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-wider">
                  Minh chứng Thực tế trên GitHub (Real-World Pull Requests)
                </h4>
              </div>
              <span className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
                28+ Verified PRs
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {data.realWorldProof.map((proof) => (
                <div
                  key={proof.id}
                  className="rounded-3xl bg-white border border-slate-200 hover:border-red-300 p-5 sm:p-6 shadow-xs flex flex-col justify-between transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-red-50 text-red-700 border border-red-200">
                        {proof.badge}
                      </span>
                      <span className="text-xs font-bold font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                        {proof.prCount}
                      </span>
                    </div>

                    <div>
                      <h5 className="text-base font-black text-slate-900">
                        {proof.title}
                      </h5>
                      <div className="text-xs font-mono text-slate-500 mt-0.5">
                        {proof.repo}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {proof.desc}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        Minh chứng Đã Kiểm thử:
                      </div>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {proof.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <a
                      href={proof.prUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-red-600 transition-colors shadow-2xs"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Xem Pull Requests trên GitHub</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
