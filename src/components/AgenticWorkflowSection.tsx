import React, { useState } from 'react';
import type { AgenticWorkflowData } from '../types/portfolio';
import {
  Workflow,
  GitPullRequest,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Terminal,
  ExternalLink,
  Layers,
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface AgenticWorkflowSectionProps {
  data?: AgenticWorkflowData;
  onOpenMediaModal?: (media: { type: 'video' | 'image'; url: string; title: string }) => void;
}

export const AgenticWorkflowSection: React.FC<AgenticWorkflowSectionProps> = ({
  data,
}) => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'pipeline' | 'proof'>('comparison');

  if (!data) return null;

  return (
    <section id="agentic-workflow" className="py-20 relative bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide uppercase bg-red-50 text-red-700 border border-red-200 mb-3 shadow-2xs">
            <Workflow className="w-3.5 h-3.5 text-red-600" />
            <span>{data.badge || 'Agentic Software Engineering & PR Verification'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {data.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {data.subtitle}
          </p>
        </div>

        {/* Engineering Manifesto Banner */}
        <div className="relative mb-12 rounded-3xl bg-slate-950 text-white p-6 sm:p-8 border-2 border-slate-900 shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400">
                <Sparkles className="w-3.5 h-3.5 text-red-500" />
                Tuyên ngôn Kỹ thuật &amp; Triết lý Làm việc
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                &ldquo;{data.manifesto}&rdquo;
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-2xl border border-white/15">
              <ShieldCheck className="w-5 h-5 text-red-400" />
              <div className="text-left">
                <div className="text-[10px] text-slate-400 font-semibold uppercase">Cam kết Kỹ thuật</div>
                <div className="text-xs font-bold text-white">100% Verified PRs</div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800">
            {data.stats.map((stat, sIdx) => (
              <div key={sIdx} className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-black text-white font-mono">{stat.val}</div>
                <div className="text-xs font-bold text-red-400 mt-0.5">{stat.label}</div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab('comparison')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'comparison'
                ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
                : 'bg-white text-slate-700 hover:text-red-600 border border-slate-200 shadow-2xs'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Đối chiếu So sánh (Side-by-Side)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('pipeline')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'pipeline'
                ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
                : 'bg-white text-slate-700 hover:text-red-600 border border-slate-200 shadow-2xs'
            }`}
          >
            <GitPullRequest className="w-4 h-4" />
            <span>Chu trình 4 Bước PR Pipeline</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('proof')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'proof'
                ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
                : 'bg-white text-slate-700 hover:text-red-600 border border-slate-200 shadow-2xs'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Minh chứng Thực tế (28+ PRs)</span>
          </button>
        </div>

        {/* TAB 1: SIDE-BY-SIDE COMPARISON */}
        {activeTab === 'comparison' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center font-black text-xs sm:text-sm uppercase tracking-wider pb-2 border-b border-slate-200">
              <div className="text-slate-500 flex items-center justify-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                Cách dùng AI Thông thường (Naive / Vibe Coding)
              </div>
              <div className="text-red-600 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                Agentic Workflow trong SWE &amp; PR (Phương pháp áp dụng)
              </div>
            </div>

            <div className="space-y-4">
              {data.comparisons.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200 bg-slate-50/60 p-4 sm:p-5 shadow-xs transition-all hover:border-slate-300"
                >
                  <div className="text-xs font-black uppercase text-slate-700 tracking-wider mb-3">
                    {item.criterion}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                    {/* Left: Traditional */}
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between text-left space-y-3">
                      <div>
                        <div className="flex items-center gap-2 text-slate-700 font-bold text-xs sm:text-sm mb-1.5">
                          <XCircle className="w-4 h-4 text-slate-400 flex-shrink-0" />
                          <span>{item.traditionalWay.title}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {item.traditionalWay.desc}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-slate-100 flex items-start gap-1.5 text-[11px] text-amber-700 font-semibold bg-amber-50/70 p-2 rounded-xl">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Hệ quả: {item.traditionalWay.drawback}</span>
                      </div>
                    </div>

                    {/* Right: Agentic Workflow */}
                    <div className="p-4 rounded-2xl bg-white border-2 border-red-200/90 shadow-2xs flex flex-col justify-between text-left space-y-3 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-2 h-full bg-red-600" />
                      <div>
                        <div className="flex items-center gap-2 text-slate-900 font-extrabold text-xs sm:text-sm mb-1.5">
                          <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                          <span>{item.agenticWay.title}</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal">
                          {item.agenticWay.desc}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-red-100 flex items-start gap-1.5 text-[11px] text-red-700 font-semibold bg-red-50/70 p-2 rounded-xl">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>Lợi ích: {item.agenticWay.advantage}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: THE 4-STAGE AGENTIC PR PIPELINE */}
        {activeTab === 'pipeline' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.pipeline.map((stage, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-slate-50 border border-slate-200 hover:border-red-300 p-5 shadow-xs transition-all flex flex-col justify-between relative group"
                >
                  <div className="space-y-3">
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
                      <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-red-600 transition-colors">
                        {stage.title}
                      </h4>
                      <div className="text-[11px] font-semibold text-slate-500 mt-0.5">
                        {stage.subtitle}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {stage.desc}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        Hành động Cốt lõi:
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
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                    <span>Giai đoạn {stage.step}/04</span>
                    <ArrowRight className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* Pipeline Visual Flowchart Summary */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white flex-shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Quy trình Khép kín: Context → Code → Self-Healing → PR Proof</div>
                  <div className="text-xs text-slate-400">Zero compiler errors, Zero unverified merges, 100% Production-ready.</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-red-400 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                  git flow &amp; pr verification
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: REAL-WORLD PROOF OF WORK */}
        {activeTab === 'proof' && (
          <div className="space-y-6">
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
                      <h4 className="text-base font-black text-slate-900">
                        {proof.title}
                      </h4>
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

            {/* Proof of Work Checklist Banner */}
            <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200">
              <h5 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                Tiêu chuẩn Nghiệm thu Bắt buộc trong mỗi Pull Request (PR Acceptance Checklist)
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-medium">
                <div className="p-3 rounded-2xl bg-white border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">1. Zero Type Errors</strong>
                    Biên dịch hoàn toàn không lỗi (`tsc -b`), tuân thủ strict typing.
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">2. Screenshot / Video Demo</strong>
                    Bắt buộc có hình ảnh hoặc video thao tác thực tế luồng tính năng.
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">3. Peer Review &amp; Safe Merge</strong>
                    Đồng đội review nhanh chóng dựa trên minh chứng rõ ràng trước khi merge.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
