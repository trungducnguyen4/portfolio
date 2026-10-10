import React, { useState } from 'react';
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
  FileText,
  Copy,
  Check,
  BookOpen,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

interface AgenticWorkflowSectionProps {
  data?: AgenticWorkflowData;
  onOpenMediaModal?: (media: { type: 'video' | 'image'; url: string; title: string }) => void;
}

export const AgenticWorkflowSection: React.FC<AgenticWorkflowSectionProps> = ({
  data,
}) => {
  const { language, t } = useLanguage();
  const [selectedGuideId, setSelectedGuideId] = useState<string>('pr-template');
  const [copied, setCopied] = useState<boolean>(false);

  if (!data) return null;

  const comparison = data.comparisons?.[0];
  const selectedGuide = data.markdownGuides?.find((g) => g.id === selectedGuideId) || data.markdownGuides?.[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="agentic-workflow" className="py-20 relative bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wide uppercase bg-red-50 text-red-700 border border-red-200 mb-3 shadow-2xs">
            <Workflow className="w-3.5 h-3.5 text-red-600" />
            <span>{data.badge || t('workflowBadge')}</span>
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
                  <span>{t('workflowManifestoTag')}</span>
                </div>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-semibold">
                  &ldquo;{data.manifesto}&rdquo;
                </p>
              </div>
              <div className="flex-shrink-0 flex items-center gap-2.5 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-red-600 flex-shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{t('workflowCommitment')}</div>
                  <div className="text-xs font-black text-slate-900">{t('workflowCommitmentVal')}</div>
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
                {t('workflowComparisonTitle')}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              
              {/* LEFT CARD: NAIVE AI / TRADITIONAL WAY */}
              <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7 flex flex-col justify-between shadow-xs transition-all hover:border-slate-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-200 text-slate-700">
                      {t('workflowTradTitle')}
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
                        {t('workflowTradRisks')}
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
                    <span>{t('workflowTradDrawback')} {comparison.traditionalWay.drawback}</span>
                  </div>
                </div>
              </div>

              {/* RIGHT CARD: PR PROOF OF WORK (HERO CARD MATCHING USER'S SCREENSHOT) */}
              <div className="rounded-3xl border-2 border-red-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between shadow-lg shadow-red-500/5 relative overflow-hidden transition-all hover:border-red-300">
                <div className="absolute top-0 right-0 w-2.5 h-full bg-red-600" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-red-50 text-red-700 border border-red-200">
                      {t('workflowAgenticTitle')}
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
                        {t('workflowAgenticStandards')}
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

        {/* 4-STEP PR PIPELINE / CHECKLIST (WITH DETAILED MARKDOWN GUIDELINES) */}
        {data.pipeline && data.pipeline.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-red-600" />
                <h4 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-wider">
                  {t('workflowPipelineTitle')}
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
                          {t('workflowActionItems')}
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

                    {/* CONCRETE MARKDOWN GUIDE FILES SECTION */}
                    {stage.createdFiles && stage.createdFiles.length > 0 && (
                      <div className="pt-3 border-t border-slate-200 space-y-2">
                        <div className="flex items-center gap-1.5 text-[11px] font-black text-slate-900 uppercase tracking-wider">
                          <FileText className="w-3.5 h-3.5 text-red-600" />
                          <span>{t('workflowCreatedFiles')}</span>
                        </div>
                        <div className="space-y-1.5">
                          {stage.createdFiles.map((f, fIdx) => (
                            <div
                              key={fIdx}
                              className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-red-200 transition-all text-left"
                            >
                              <div className="flex items-center justify-between gap-1 flex-wrap">
                                <span className="font-mono text-[10.5px] font-bold text-red-700 bg-red-50/80 px-1.5 py-0.5 rounded border border-red-200/70 break-all">
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
                    <span>{language === 'en' ? `Stage ${stage.step}/04` : `Giai đoạn ${stage.step}/04`}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-red-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INTERACTIVE MARKDOWN SPECIFICATION VIEWER (.MD FILES SHOWCASE) */}
        {data.markdownGuides && data.markdownGuides.length > 0 && selectedGuide && (
          <div className="mb-14 rounded-3xl border-2 border-slate-200 bg-slate-50/60 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-50 text-red-700 border border-red-200 mb-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-red-600" />
                  <span>{t('workflowGuidesTag')}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {t('workflowGuidesTitle')}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {t('workflowGuidesSubtitle')}
                </p>
              </div>

              {/* Guide Selector Tabs */}
              <div className="flex items-center gap-2 flex-wrap">
                {data.markdownGuides.map((guide) => (
                  <button
                    key={guide.id}
                    type="button"
                    onClick={() => setSelectedGuideId(guide.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      selectedGuideId === guide.id
                        ? 'bg-red-600 text-white shadow-md shadow-red-600/25'
                        : 'bg-white text-slate-700 hover:text-red-600 border border-slate-200 shadow-2xs'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{guide.fileName}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Guide Meta */}
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white p-4 rounded-2xl border border-slate-200">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black text-slate-900">
                    {selectedGuide.fileName}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                    {selectedGuide.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 font-normal">
                  {selectedGuide.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(selectedGuide.content)}
                className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300/80 transition-all cursor-pointer"
                title={language === 'en' ? 'Copy markdown file content' : 'Sao chép nội dung file markdown'}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">{t('workflowBtnCopied')}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-600" />
                    <span>{t('workflowBtnCopy')}</span>
                  </>
                )}
              </button>
            </div>

            {/* Markdown Code Window */}
            <div className="rounded-2xl border border-slate-300 bg-slate-900 text-slate-100 overflow-hidden shadow-inner font-mono text-xs">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-[11px] text-slate-400 font-medium">
                    {selectedGuide.fileName}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                  Markdown Spec
                </span>
              </div>
              <div className="p-4 sm:p-5 overflow-x-auto max-h-[420px] overflow-y-auto leading-relaxed text-slate-200 whitespace-pre-wrap font-mono text-[11px] sm:text-xs">
                {selectedGuide.content}
              </div>
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
                  {t('workflowProofTitle')}
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
                        {t('workflowProofSubtitle')}
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
                      <span>{t('workflowBtnViewPrs')}</span>
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
