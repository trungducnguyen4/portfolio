import type { PortfolioData } from '../types/portfolio';

export const initialPortfolioDataEn: PortfolioData = {
  profile: {
    name: "Trung Duc",
    title: "AI-Augmented Software Engineer",
    tagline: "Engineering Production Enterprise Systems & AI Agents with High-Performance Serverless Architecture and Cost Optimization",
    bio: "Software Engineer graduated with Honors from Ton Duc Thang University (GPA 8.34/10). Passionate about combining cutting-edge AI tools (Cursor, Claude, Antigravity, LLM Integration) with solid software engineering foundations, Multi-Provider AI Gateways, and Agentic workflows to solve real enterprise business challenges, accelerate development velocity, and build resilient production systems.",
    status: "Available for New Opportunities",
    location: "Ho Chi Minh City, Vietnam",
    email: "nguyentrungduc.forwork@gmail.com",
    github: "https://github.com/trungducnguyen4",
    linkedin: "https://www.linkedin.com/in/trungducnguyen1407",
    phone: "(+84) 9xx xxx xxx",
    stats: {
      gpa: "8.34",
      gpaNote: "Honors Degree · TDTU",
      experienceMonths: "3+ Mos.",
      experienceNote: "Enterprise Production Experience",
      aiDeliveryRate: "3x",
      aiDeliveryNote: "Delivery Velocity with AI"
    }
  },
  education: {
    id: "tdtu",
    school: "Ton Duc Thang University",
    schoolEn: "Ton Duc Thang University (TDTU)",
    degree: "Bachelor of Software Engineering",
    major: "Software Engineering",
    gpa: "8.34 / 10",
    classification: "Honors (Excellent)",
    period: "2022 - 2026",
    location: "District 7, Ho Chi Minh City",
    logo: "/logos/tdtu-logo.png",
    diplomaCover: "/images/tdtu-diploma-cover.jpg",
    honors: [
      "Graduated with Honors in Software Engineering (GPA 8.34/10)",
      "Strong foundational mastery with top results in Database Systems, Software Architecture, and Advanced Programming",
      "Proactively explored and integrated modern AI tooling to accelerate coding, debugging, and project delivery"
    ],
    activity: {
      title: "Consolation Prize at AISC 2024",
      award: "Consolation Prize",
      extraAward: "Most Favorite Project Award",
      contest: "AISC 2024",
      contestFullName: "Advanced Information Systems Contest 2024",
      organizer: "Faculty of Information Systems — University of Information Technology (UIT - VNU-HCM)",
      time: "12/2024",
      role: "Developer",
      image: "/images/aisc_2024.jpg",
      description: "Prestigious academic competition organized by the Faculty of Information Systems (UIT - VNU-HCM). Served as **Developer**, directly involved in designing technical architecture and programming the competition product.",
      skills: ["System Architecture", "Software Development", "Teamwork"]
    },
    aiThesis: {
      title: "ExamTrust — Smart Academic Assessment & Integrity Proctoring Platform",
      description: "TDTU Software Engineering Graduation Thesis: Multi-model AI question generation, randomized snapshot exams, and 3-tier privacy-first proctoring.",
      tech: ["NestJS", "Next.js 15", "Redis Bull Queue", "Ollama / LLMs", "Prisma MySQL"]
    },
    graduationThesis: {
      title: "ExamTrust — Smart Academic Assessment & Online Proctoring Platform",
      subtitle: "Smart Academic Assessment & Integrity Proctoring Platform (TDTU Graduation Thesis)",
      role: "Lead Full-stack Architecture & AI Integration",
      period: "2026",
      badge: "Graduation Thesis Project",
      score: "Graduated with Honors",
      description: "All-in-One academic assessment ecosystem: from **version-controlled question bank**, **AI-assisted question draft generation with Human-in-the-Loop review**, **randomized immutable snapshot exam generation**, to **3-tier proctoring (browser telemetry + AI risk scoring + human audit)** and in-depth academic analytics.",
      softwareCore: {
        title: "Software Engineering Core",
        tagline: "Distributed Architecture, Async Queues & Enterprise Data Integrity",
        badge: "Production-Grade",
        metrics: [
          { label: "Peak QPS", val: "100% Zero-Loss" },
          { label: "Serverless Cost", val: "$0/mo (Cloudflare)" },
          { label: "Telemetry Events", val: "10 Events/Client" }
        ],
        description: "Engineered enterprise-standard architecture strictly decoupling API Server from Background Worker, guaranteeing exam immutability and high horizontal scalability.",
        highlights: [
          {
            title: "Distributed Architecture & Dedicated Worker Process",
            desc: "Completely decoupled **API Web Server (NestJS)** and independent **AI Worker process (ai-worker.ts)** via **Redis Bull Queue**, totally eliminating **HTTP I/O blocking** during heavy AI operations.",
            badge: "Distributed Worker",
            metrics: "Zero-blocking HTTP"
          },
          {
            title: "Randomized & Immutable Exam Session Snapshot",
            desc: "Unique **randomized question selection algorithm** based on difficulty matrix for each student; **immutable snapshot locks exam state** at start, completely eliminating **leakage and tampering risks**.",
            badge: "State Snapshot",
            metrics: "Immutable Exam State"
          },
          {
            title: "Git-Like Question Bank Versioning (QuestionVersion)",
            desc: "Designed **QuestionVersion table storing full diff history**, supporting **1-click rollbacks** and comprehensive **Audit Trail** for academic inspection compliance.",
            badge: "Git-like Versioning",
            metrics: "Full Diff & Rollback"
          },
          {
            title: "Real-time Non-Intrusive Exam Room Telemetry",
            desc: "Capturing **10 browser behavior signals** (blur, tab switch, fullscreen exit, clipboard copy/paste...) purely via **Standard Browser APIs** without **invasive OS-level software installation**.",
            badge: "Browser Telemetry",
            metrics: "10 Event Types"
          },
          {
            title: "RBAC Security & Anti-Cheating Access Control",
            desc: "Architected **Stateless JWT + HTTP-only Cookie** with 3-tier permissions (**Admin, Lecturer, Student**); integrated **Throttler rate limiting** and **payload encryption**.",
            badge: "RBAC & Security",
            metrics: "3-Tier RBAC"
          },
          {
            title: "Serverless Infrastructure & Zero-Cost Cloud Edge",
            desc: "Deployed Frontend on **Cloudflare Workers (OpenNext)**, stored webcam proctoring evidence on **Cloudflare R2**, **AWS Lambda** webhooks, and containerized development with **Docker Compose**.",
            badge: "Cloudflare Serverless",
            metrics: "Zero-Cost Infra"
          },
          {
            title: "Git Flow & Pull Request Proof of Work (28 PRs)",
            desc: "Strictly enforced **Git Workflow** with **28 Pull Requests (PRs)** on GitHub; standardized attaching **screenshots/video verification demos (Proof of Work)** in PR descriptions before merging into main.",
            badge: "28 GitHub PRs",
            metrics: "PR Proof of Work"
          }
        ],
        tech: [
          "NestJS (Modular Architecture)",
          "Next.js 15 (App Router)",
          "TypeScript",
          "Prisma ORM",
          "MySQL",
          "Redis & Bull Queue",
          "Docker Compose",
          "Cloudflare Workers & R2",
          "RESTful API & Swagger",
          "RBAC Auth (JWT)",
          "Git Flow (28 PRs & Proof of Work)"
        ]
      },
      aiCore: {
        title: "AI & Agentic Engineering Core",
        tagline: "Multi-Provider Orchestration, Vector Search, LLM Evaluation & Multimodal Vision",
        badge: "Production AI Focus",
        metrics: [
          { label: "Integrated Models", val: "5+ Multi-Provider" },
          { label: "Generation Latency", val: "Stream & Bull Worker" },
          { label: "JSON Fault Tolerance", val: "100% Self-Healing (jsonrepair)" }
        ],
        description: "Mastering Generative AI engineering lifecycle: from LLM abstraction, asynchronous queues, deduplication vector embeddings, webcam vision models, to automated benchmarking (LLM-as-a-Judge) and token budget governance.",
        highlights: [
          {
            title: "Multi-Provider LLM Orchestration & Gateway",
            desc: "Unified abstraction over **7 providers** (**Google Gemini, DeepSeek, OpenRouter, NVIDIA, Local Ollama**), supporting **automatic runtime fallback** upon upstream API degradation.",
            badge: "Multi-LLM Abstraction",
            metrics: "7 AI Providers"
          },
          {
            title: "Vector Embeddings & Semantic Search (RAG Foundation)",
            desc: "Built **EmbeddingService** vectorizing academic text (128-dim normalized semantic vector), calculating **Cosine Similarity** to **eliminate duplicate questions** and **cluster course topics**.",
            badge: "Vector Cosine Search",
            metrics: "128-dim Embedding"
          },
          {
            title: "Async Queue Pipeline & JSON Repair Loop",
            desc: "Asynchronous **Bull Queue multitasking**, stripping markdown fences and **automatically repairing malformed JSON output from LLMs via jsonrepair**; resilient timeout control with **AbortSignal**.",
            badge: "Queue Loop & Repair",
            metrics: "100% Parse Success"
          },
          {
            title: "Multimodal Computer Vision Proctoring",
            desc: "Integrated **local Vision models (Moondream / Ollama Vision)** analyzing webcam snapshots to **detect 9 anomaly flags** (face absence, multiple people, mobile devices), with **30-day auto-purge** for privacy.",
            badge: "Multimodal Vision",
            metrics: "9 Visual Tags"
          },
          {
            title: "Automated Evaluation & Benchmarking (LLM-as-a-Judge)",
            desc: "Constructed **AiEvaluationJudge** paired with **Golden Dataset (golden-dataset.ts)** to benchmark AI question quality, measuring **100% JSON Schema compliance** and **hallucination mitigation**.",
            badge: "LLM-as-a-Judge Eval",
            metrics: "Golden Dataset Suite"
          },
          {
            title: "Token Cost Telemetry & AI Ethics Governance",
            desc: "**AiTelemetryService** tracking latency, token usage, and **real-time USD cost estimation**. Combined with **Human-in-the-Loop**: AI functions strictly as **Advisory Evidence**, leaving full decision power to instructors.",
            badge: "Telemetry & Human-in-Loop",
            metrics: "Cost & Ethics Control"
          }
        ],
        tech: [
          "Ollama (gemma3:4b / moondream)",
          "Google Gemini API",
          "DeepSeek API",
          "OpenRouter",
          "Vector Embeddings & Cosine Search",
          "LLM-as-a-Judge Evaluation",
          "Prompt Engineering & Versioning (v2.1.0)",
          "Bull Queue AI Worker",
          "Multimodal Computer Vision",
          "Token & Cost Telemetry"
        ]
      },
      keyPillars: [
        {
          title: "Multi-Model AI Assistant & Human-in-the-Loop",
          desc: "Integrates Ollama (Gemma 3, Moondream), Gemini, DeepSeek to generate 7-9 question types. Asynchronous Redis + Bull Queue worker prevents API blocking; instructors retain full editorial control before publishing to the question bank.",
          badge: "AI & Queue Worker"
        },
        {
          title: "Randomized Generation & Immutable Session Snapshot",
          desc: "Exams are dynamically randomized based on difficulty weighting matrices per candidate to prevent leaks and copying. The complete exam content is locked into an immutable snapshot at exam start.",
          badge: "Anti-Leak Matrix"
        },
        {
          title: "3-Tier Integrity Proctoring (Privacy-First)",
          desc: "Tier 1 captures 10 browser events (blur, tab switch, exit fullscreen, copy/paste). Tier 2 executes dual-layer risk scoring (0-100) paired with local AI Vision analyzing webcam frames (auto-purged after 30 days). Tier 3 provides transparent audit trails for educators.",
          badge: "3-Layer Integrity"
        },
        {
          title: "Modern Architecture & High Performance",
          desc: "NestJS backend separating API server and AI worker processes, Prisma ORM, MySQL, Redis Cache. Frontend built with Next.js 15 App Router, React, Tailwind CSS, Radix UI, and zero-cost Cloudflare serverless edge.",
          badge: "NestJS & Next.js 15"
        }
      ],
      tech: [
        "NestJS",
        "Next.js 15",
        "TypeScript",
        "Prisma ORM",
        "MySQL",
        "Redis & Bull Queue",
        "Ollama (Gemma 3 / Moondream)",
        "DeepSeek API",
        "Google Gemini API",
        "Tailwind CSS",
        "Docker",
        "Cloudflare Workers"
      ],
      media: {
        imageUrl: "/images/examtrust-dashboard.png",
        repoUrl: "https://github.com/trungducnguyen4/ExamTrust",
        images: [
          {
            url: "/images/examtrust-dashboard.png",
            caption: "Instructor Management Dashboard & AI Question Generation Assistant (ExamTrust)",
            title: "Management Overview & AI Question Generation Assistant"
          },
          {
            url: "/images/examtrust-integrity-monitor.png",
            caption: "Exam Room Risk Monitoring Center: Violation frequency statistics & Integrity signal trends",
            title: "Integrity & Exam Room Risk Monitoring Dashboard"
          },
          {
            url: "/images/examtrust-question-bank.png",
            caption: "500+ Question Bank: Multi-format question management with Version Control",
            title: "Academic Question Bank with Versioning & Difficulty Assessment"
          }
        ]
      }
    },
    highSchool: {
      school: "Vo Truong Toan High School",
      period: "2019 - 2022",
      className: "STEM Advanced Class (Block A01: Math - Physics - English)",
      sbd: "02062953",
      scoresUrl: "https://vietnamnet.vn/giao-duc/diem-thi/tra-cuu-diem-thi-tot-nghiep-thpt/2022/02062953.html",
      scoreImage: "/images/thpt-vinh-danh-nqh-2022.png",
      honorTitle: "Outstanding English Achievement Award - Class of 2004",
      honorBadge: "Honored on NQH High School Golden Wall of Fame 2022",
      scores: {
        math: 8.4,
        physics: 8.5,
        english: 9.4,
        chemistry: 5.25,
        biology: 4.5,
        literature: 5.0,
        totalA01: 26.3
      },
      note: "Specialized STEM student in Block A01 with outstanding performance: Math 8.4, Physics 8.5, English 9.4 — Total A01 score: 26.3/30 in the 2022 National High School Graduation Exam. Honored on the NQH High School Golden Wall of Fame for top English achievement."
    }
  },
  agenticWorkflow: {
    badge: "Git Flow & Pull Request Verification Standard",
    title: "Pull Request Rigor & Verification Protocol (Proof of Work)",
    subtitle: "Highlighting the fundamental difference between unverified AI usage (sloppy commits) and professional engineering standards: Mandating local runtime verification, attaching UI screenshots and video demos directly in GitHub PR descriptions before merging.",
    manifesto: "AI accelerates coding speed by 3x - 5x, but engineering discipline determines production quality. Never blind-commit or merge code without screenshot or video proof of real user workflows on GitHub.",
    stats: [
      { label: "Standardized Pull Requests", val: "28+ PRs", desc: "Attached screenshots & video proof on GitHub" },
      { label: "Type Safety Confidence", val: "100%", desc: "Mandatory static typecheck (tsc -b) before PR" },
      { label: "Runtime Verification", val: "Local & Cloud", desc: "Tested on live servers before creating PR" },
      { label: "Proof of Work", val: "100% PRs", desc: "UI Screenshots & Video Demos included" }
    ],
    comparisons: [
      {
        criterion: "Pull Request Execution Standard & Verification (PR Proof of Work)",
        traditionalWay: {
          title: "Irresponsible Commits & Zero Verification",
          desc: "Engineers copy-paste AI code and commit straight to main branch or create empty Pull Requests. No local server startup, no user flow verification, zero screenshot or video proof.",
          drawback: "Teammates conduct blind reviews, creating high risks of cascading build failures, git conflicts, and staging/production outages.",
          bullets: [
            "Direct commits to main branch or empty PR descriptions",
            "Never running local servers to catch runtime exceptions",
            "Completely missing UI screenshots and feature videos",
            "Shifting all crash risks onto teammates and QA testers"
          ]
        },
        agenticWay: {
          title: "PR Proof of Work Standard",
          desc: "Always branching into dedicated feature branches; running live servers, recording UI screenshots and video demos directly embedded in GitHub PR descriptions.",
          advantage: "100% transparent proof of verification before review and merge; immediate sign-off by Tech Leads and peers.",
          bullets: [
            "Isolated feature/* branches strictly following Git Flow",
            "Mandatory 100% compiler check (tsc -b) & runtime tests",
            "Mandatory UI screenshots & video demos for key workflows",
            "Detailed Scope of Changes & edge-case documentation prior to merge"
          ]
        }
      }
    ],
    pipeline: [
      {
        step: "01",
        title: "Feature Branching & PR Template Spec",
        subtitle: "Branch Creation & Standard PR Template",
        desc: "Spawn independent `feature/*` branches from `develop/main`. Set up Conventional Commits and pre-load standard Pull Request templates before writing any code.",
        actionItems: [
          "Branch feature/[ticket] independently, strictly following Git Flow",
          "Enforce Conventional Commits (feat:, fix:, refactor:)",
          "Clearly define Scope of Changes using standard .md template"
        ],
        proofLabel: "Git Flow & PR Template",
        createdFiles: [
          {
            name: ".github/PULL_REQUEST_TEMPLATE.md",
            path: "GitHub Repository Root",
            type: "doc",
            desc: "Standardized GitHub PR template: Mandatory Overview, Proof of Change (4 Pillars), and Deployment Checklist"
          },
          {
            name: "docs/guidelines/GIT_WORKFLOW.md",
            path: "Engineering Standard Spec",
            type: "doc",
            desc: "Branching guidelines, main branch protection, zero secrets committed, and max 500-line PR limits"
          }
        ]
      },
      {
        step: "02",
        title: "Verification Protocol & 4 Pillars Testing",
        subtitle: "The 4 Pillars Protocol: 'Prove the Change'",
        desc: "Enforce Verification Protocol: Every change must be verified with concrete proof, rejecting subjective assumptions.",
        actionItems: [
          "Pillar 1 (Tests): Syntax check node --check / tsc -b, automated tests npm test",
          "Pillar 2 (Runtime): Execute real API endpoints, HTTP 200/201 status, verify DB state",
          "Pillar 4 (Confidence): Explicitly report what was verified vs what was NOT verified"
        ],
        proofLabel: "Verification Protocol",
        createdFiles: [
          {
            name: ".agents/rules/verification-protocol.md",
            path: "Engineering Protocol Rule",
            type: "doc",
            desc: "Engineering Rule: 'Prove the Change and Report Confidence' — Defines mandatory 4 Verification Pillars"
          },
          {
            name: "docs/testing/TESTING_CHECKLIST.md",
            path: "Quality Assurance Standard",
            type: "doc",
            desc: "QA Checklist: Syntax checks, regression testing, database migrations, and API contract validations"
          }
        ]
      },
      {
        step: "03",
        title: "Visual Proof Protocol (Screenshots & Video)",
        subtitle: "Mandatory Visual Proof for Every Change",
        desc: "Enforce Pillar 3 (Visual): Mandatory UI screenshots or screen-recording videos demonstrating end-to-end user workflows before PR creation.",
        actionItems: [
          "UI/Component edits: MANDATORY Screenshots (Normal, Empty, Error, Responsive)",
          "User Flow edits: MANDATORY Video screen recording / GIF (.mp4)",
          "Pure Backend edits: Mandatory Toast alert, Modal popup, or database table visualization"
        ],
        proofLabel: "Visual Proof Protocol",
        createdFiles: [
          {
            name: "docs/rules/VISUAL_PROOF_GUIDELINES.md",
            path: "Media Proof Standard",
            type: "doc",
            desc: "Standard guidelines for multi-state screenshots and live user journey recordings"
          },
          {
            name: "docs/proofs/PROOF_ASSET_STORAGE.md",
            path: "Evidence Repository Spec",
            type: "doc",
            desc: "Media compression, storage standards, and Markdown syntax to embed assets into GitHub PRs"
          }
        ]
      },
      {
        step: "04",
        title: "Fresh-Context AI Review & Safe Merge Gate",
        subtitle: "Independent Git Diff Review & Safe Merging",
        desc: "Enforce Fresh-Context Review: Independent reviewer receives only the User Request and git diff to critique logic, security, and code quality before merge.",
        actionItems: [
          "Spawn independent reviewer inspecting clean git diffs only",
          "Audit 3 criteria: Logic regressions, security/secrets leaks, code cleanliness",
          "Merge permitted ONLY when Reviewer confirms APPROVED with 100% checklist passed"
        ],
        proofLabel: "Fresh-Context Review",
        createdFiles: [
          {
            name: "docs/rules/FRESH_CONTEXT_CODE_REVIEW.md",
            path: "Anti-Confirmation Bias Rule",
            type: "doc",
            desc: "Independent git diff code review rule eliminating confirmation bias"
          },
          {
            name: "docs/release/PR_ACCEPTANCE_SIGNOFF.md",
            path: "Merge Gate Checklist",
            type: "doc",
            desc: "Merge Gate Checklist: CI GitHub Actions passed, 0 security bugs, 100% visual proof attached"
          }
        ]
      }
    ],
    markdownGuides: [
      {
        id: "pr-template",
        fileName: ".github/PULL_REQUEST_TEMPLATE.md",
        title: "Standard GitHub Pull Request Template (PR Template)",
        badge: "GitHub PR Standard",
        description: "Template auto-loaded into every GitHub PR, standardizing mandatory sections: Overview, 4 Verification Pillars (Tests, Runtime, Visual, Confidence), and Deployment Checklist.",
        content: `## 📌 Overview
<!-- Concise summary of PR purpose and key modifications -->

---

## 🔍 Proof of Change & Confidence Report

### 1. 🧪 Tests (Focused logic and integration checks)
- [ ] Syntax check: \`node --check server.js local/entry.js src/app.js src/ui.js\`
- [ ] Automated tests: \`npm test\` passed
- [ ] Pre-launch attack squad: \`npm run attack\` passed

### 2. ⚡ Runtime (Use the actual feature end to end)
- **Endpoint / Action**: <!-- e.g., POST /api/campaigns/create -->
- **Status code / Response**: <!-- e.g., HTTP 200 OK -->
- **Database verification**: <!-- e.g., D1 record inserted/updated -->

### 3. 👁️ Visual (Inspect what the user will see)
<!-- 
MANDATORY:
- UI / Component edits: ATTACH SCREENSHOTS (Drag and drop images here)
- User Flow edits: ATTACH SCREEN RECORDING VIDEO / GIF (.mp4/.mov)
- Backend/API edits: Illustrate toast notification or returned data table
-->

### 4. 🎯 Confidence (State what was verified — and what was not)
- **Confidence level**: High / Medium / Low
- **Verified items**:
  - 
  - 
- **NOT verified / external dependencies**:
  - 
  - 

---

## 🚀 Deployment Checklist
- [ ] Code passes CI pipeline on GitHub Actions
- [ ] Attack Squad passes with 0 critical security/bug issues
- [ ] Screenshots / Videos attached for visual proof`
      },
      {
        id: "verification-protocol",
        fileName: ".agents/rules/verification-protocol.md",
        title: "Technical Verification Protocol (Verification Protocol Rule)",
        badge: "Core Engineering Rule",
        description: "Core rule 'Prove the Change and Report Confidence' binding engineers and AI: No subjective assumptions, mandatory 4 Pillars execution, and Fresh-Context Review.",
        content: `# Rule: Verification Protocol — "Prove the Change and Report Confidence"

## Core Philosophy
Every code change, new feature, or bugfix must be substantiated with concrete proof before being marked as complete.
Subjective claims like "it should work now" without verified output are strictly forbidden.

## The 4 Verification Pillars
1. 🧪 Tests: Syntax checks, Unit & Integration Tests, zero regression.
2. ⚡ Runtime: Live End-to-End execution, HTTP 200/201 status, verified DB records.
3. 👁️ Visual: UI changes require Screenshots; Workflow changes require Screen recordings.
4. 🎯 Confidence: Explicit confidence rating (High/Med/Low), detailing what was tested vs untested.

## 🧐 Fresh-Context AI Code Review
Before commit & push, an independent Reviewer must inspect only the User Request and git diff:
1. Logic & Regressions: Does not break adjacent modules.
2. Security & Secrets: Zero leaked environment variables, API tokens, SQLi/XSS.
3. Code Cleanliness: Zero debugging console.log, zero redundant mock data.
Commit & Push permitted ONLY after Reviewer signs off with APPROVED.`
      }
    ],
    realWorldProof: [
      {
        id: "examtrust",
        title: "ExamTrust Graduation Thesis (TDTU)",
        repo: "trungducnguyen4/ExamTrust",
        prCount: "28 Pull Requests",
        badge: "Honors Thesis",
        desc: "Distributed online assessment platform engineered across 28 standardized GitHub PRs. Every PR strictly separates Feature branches, validates builds, and embeds live proof of exam management, telemetry, and proctoring.",
        prUrl: "https://github.com/trungducnguyen4/ExamTrust/pulls?q=is%3Apr+is%3Aclosed",
        highlights: [
          "28 standardized PRs strictly adhering to Git Workflow",
          "Every PR embeds UI screenshots and test execution logs",
          "Zero merge conflicts and 100% type safety prior to merge"
        ]
      },
      {
        id: "netviet",
        title: "NetViet HR Pro & Enterprise AI Copilot",
        repo: "trungducnguyen4/nexrall-hr-manager---marketing",
        prCount: "Feature PR Verified",
        badge: "Production Deployment",
        desc: "Digital HR ecosystem powering 12 enterprise modules at $0 infrastructure cost for < 100 employees. All Circuit Breaker logic, Serverless D1, and GPS Radar features were verified with evidence-backed PRs.",
        prUrl: "https://github.com/trungducnguyen4/nexrall-hr-manager---marketing/pulls?q=is%3Apr",
        highlights: [
          "Comprehensive on-site survey of all staff and HR department",
          "Saved 8.4 million VND/year in fixed infrastructure costs",
          "Proof of Work for 24 AI Copilot Tools & GPS Radar"
        ]
      },
      {
        id: "rikkei",
        title: "OneConnect Mock Project (Rikkeisoft)",
        repo: "Rikkeisoft Hybrid Internship",
        prCount: "5 Scrum Sprints",
        badge: "Enterprise Agile / Scrum",
        desc: "Built enterprise-standard platform across 5 consecutive Scrum sprints, standardizing Feature branching, peer Pull Request code reviews, and live merge conflict resolutions.",
        prUrl: "https://rikkeisoft.com",
        highlights: [
          "5 full Scrum sprints (Planning, Daily, Retro)",
          "Feature branching & rigorous PR Code Review",
          "Attached test verification for RBAC authorization module"
        ]
      }
    ]
  },
  experiences: [
    {
      id: "netviet",
      company: "NetViet",
      role: "ERP & AI Systems Developer",
      period: "Jul 2026 - Present",
      duration: "3 months",
      location: "Ho Chi Minh City · On-site",
      workType: "Internship",
      logo: "/logos/netviet-logo.svg",
      description: "Proactively conducted on-site surveys with Board of Directors and HR department to engineer **NetViet HR Pro** integrated with **Enterprise AI Copilot** (independent demo on Cloudflare: `nexrall-hr-demo.netviettv-hr-manager.workers.dev`). Optimized infrastructure with **Serverless Zero-Cost architecture ($0/month for < 100 staff)**, transitioning from basic CRUD to **deep operational analytics** and **intelligent AI Agents** supporting real-time decision making.",
      responsibilities: [
        "**SME Operational Survey & Digitization**: Interviewed and surveyed all staff (< 100 employees) and HR department to uncover operational pain points; standardized and digitized **12 core HR modules** (**attendance**, **leaves**, **Kanban tasks**, **payroll**, **project handovers**).",
        "**Serverless Zero-Cost Architecture ($0/month for < 100 staff)**: Designed infrastructure on **Cloudflare Workers**, **Cloudflare D1 (SQLite)**, **R2 Buckets**, and **Durable Objects**, operating reliably at **zero hosting cost**. Compared to traditional server hosting and dedicated static IP networks (~700,000 VND/month), saved the enterprise **8.4 million VND/year** in fixed infrastructure expenses.",
        "**Enterprise AI Copilot & Multi-Provider Gateway**: Built AI Copilot with **24 Native Function Calling Tools**, **Stateful Circuit Breaker (30s cooldown)** to prevent cascading outages, **multi-tier rate limiting**, and automated **fallbacks between Gemini, OpenAI, and Edge Heuristics**, protecting **100% of token budgets**.",
        "**Tool-Layer RBAC Security & Anti-Hallucination**: Enforced permission controls **independent of prompts at the source code layer**, eliminating **Prompt Injection / Jailbreak** risks for sensitive payroll data; integrated **Citation Grounding** to weed out fake references and **Human-in-the-Loop Action Cards**.",
        "**Streaming SSE & GPS Radar Attendance**: Implemented **Server-Sent Events (SSE)** with **True TTFT telemetry**, paired with **multi-location GPS attendance** (HCMC, Hanoi offices) utilizing **smart radar geofencing** instead of static office Wi-Fi.",
        "**Git Flow & PR Proof of Work Protocol**: Maintained professional Git workflow on GitHub; always attached **screenshots/video demos** in PR descriptions as verifiable **Proof of Work** prior to review and merging."
      ],
      tags: ["NetViet HR Pro", "Enterprise AI Copilot", "Multi-Provider AI Gateway", "Function Calling (24 Tools)", "Server-Sent Events (SSE)", "Serverless Zero Cost", "Cloudflare Workers & D1", "GPS Radar Geofence", "Tool-Layer RBAC", "Git Flow & PR Proof of Work"],
      media: {
        imageUrl: "/images/netviet-ai-copilot-desktop.png",
        images: [
          {
            url: "/images/netviet-ai-copilot-desktop.png",
            caption: "NetViet HR Pro Operational Dashboard with Enterprise AI Copilot & GPS Radar Attendance"
          },
          {
            url: "/images/netviet-ai-copilot-chat.png",
            caption: "AI Copilot Virtual Assistant: Multi-module, smart routing & real-time Telemetry"
          },
          {
            url: "/images/netviet-ai-copilot-telemetry.png",
            caption: "Multi-Provider AI Gateway Telemetry: Latency monitoring (1262ms), token costs & Gemini model"
          },
          {
            url: "/images/netviet-hr-dashboard.png",
            caption: "Operational Overview Dashboard & GPS Radar Attendance (NetViet HR Pro)"
          },
          {
            url: "/images/netviet-lighthouse-perf.png",
            caption: "Lighthouse Performance Near-Perfect 99/100 (FCP 0.6s, LCP 0.8s, TBT 0ms)"
          },
          {
            url: "/images/netviet-cloudflare-observatory.png",
            caption: "Cloudflare Observatory Metrics: LCP 97.9% Good, INP 95.5% Good, TTFB 91.1% Good"
          },
          {
            url: "/images/netviet-hr-attendance.png",
            caption: "Attendance Module & Real-world Work Shift Data Processing"
          },
          {
            url: "/images/netviet-hr-tasks.png",
            caption: "Kanban Task Management & Staff Progress Board"
          },
          {
            url: "/images/netviet-hr-payroll.png",
            caption: "Payroll Module & Automated Staff Cost Calculations"
          }
        ],
        projectUrl: "https://nexrall-hr-demo.netviettv-hr-manager.workers.dev",
        repoUrl: "https://github.com/trungducnguyen4/nexrall-hr-manager---marketing"
      }
    },
    {
      id: "rikkei",
      company: "Rikkeisoft",
      role: "Software Developer",
      period: "Jan 2026 - Apr 2026",
      duration: "4 months",
      location: "Ho Chi Minh City · Hybrid",
      workType: "Internship",
      logo: "/logos/rikkei-logo.png",
      description: "Participated in enterprise-standard **Mock Project (OneConnect)** on **Java** platform to master Git workflows and gain hands-on experience with **Scrum / Agile**.",
      responsibilities: [
        "Worked in teams across **5 sprints** (2-week sprint cycle), actively contributing to Product Backlog creation and refinement.",
        "Fully participated in **Sprint Planning**, **Daily Scrum**, and **Task Estimation** sessions.",
        "Developed core authentication and authorization features: **Sign Up**, **Sign In**, **Sign Out**, **User Authorization & RBAC**, and **Account Management**.",
        "Standardized **Git workflow**: Attached **screenshots/video demos** directly in GitHub PR descriptions as verifiable **Proof of Work** for peer code reviews (**Feature branch**, **PR reviews**, **Merge conflict resolution**)."
      ],
      tags: ["Java", "Spring Framework", "Scrum / Agile", "Git Flow", "Authentication / Authorization", "Sprint Planning", "PR Proof of Work"],
      media: {
        imageUrl: "/images/rikkei-issues-list.png",
        images: [
          {
            url: "/images/rikkei-issues-list.png",
            caption: "Task & Issue List (OneConnect) - Completed by Nguyen Trung Duc"
          },
          {
            url: "/images/rikkei-project-summary.png",
            caption: "Project Summary & Staff Allocation for Headhunt Project (OneConnect)"
          },
          {
            url: "/images/rikkei-project-info.png",
            caption: "General Project Information - Scrum Workflow (OneConnect)"
          }
        ],
        projectUrl: "https://rikkeisoft.com"
      }
    },
    {
      id: "vco",
      company: "VCO Group",
      role: "Member of External Relations",
      period: "Jul 2023 - Aug 2023",
      duration: "2 months",
      location: "District 5, Ho Chi Minh City · Hybrid",
      workType: "Part-time",
      logo: "/logos/vco-logo.png",
      description: "Managed external affairs, negotiated workshop venues, and built strategic sponsorship partnerships with reputable brands.",
      responsibilities: [
        "Surveyed and secured venues for corporate workshops, negotiating optimal rental rates.",
        "Approached and successfully acquired sponsorships from diverse brands to support event execution.",
        "Ensured win-win collaboration agreements between the organization and external sponsors."
      ],
      tags: ["External Relations", "Sponsorship Acquisition", "Negotiation", "Event Coordination", "Partnership"],
      media: {
        imageUrl: "/images/vco-workshop.png",
        videoUrl: "https://www.facebook.com/share/r/1Eq1AV4i4k/",
        videoTitle: "Career Workshop: On The Path #3: RAISE & KNOW - VCO Group",
        projectUrl: "https://vcogroup.com.vn"
      }
    }
  ],
  projects: [
    {
      id: "nexrall-hr-copilot",
      title: "Nexrall Enterprise HR Copilot",
      tagline: "Production AI Copilot: 24 Native Tools & Multi-Provider AI Gateway",
      category: "AI Workflow",
      featured: true,
      description: "Enterprise-grade **HR AI Agent system** integrated into **NetViet HR Pro**, serving **40 active personnel** at **$0/month infrastructure cost**. Equipped with **Multi-Provider AI Gateway (Gemini, OpenAI, Workers AI)** featuring **self-healing Circuit Breakers**, **24 Native Function Calling Tools**, **Tool-Layer RBAC anti-jailbreak security**, and real-time **streaming SSE**.",
      features: [
        "**Multi-Provider AI Gateway**: 30s cooldown Circuit Breaker, Rate Limiting & Fast-fail 429",
        "**24 Native Function Calling Tools**: Leave approvals, payroll audits, GPS attendance & Action Cards",
        "**Zero-Trust Tool-Layer RBAC**: Blocks prompt injection, enforcing database-level permission boundaries",
        "**Server-Sent Events (SSE) & True TTFT Telemetry**: Visualizing token generation velocity & Citation Grounding",
        "**Git Flow & PR Verification**: Standardizing screenshots and video demo proofs embedded directly in GitHub PR descriptions before merging"
      ],
      techStack: ["Cloudflare Workers", "D1 Database", "Gemini & OpenAI API", "SSE Streaming", "Vector Search", "TypeScript/ESM"],
      imageUrl: "/images/netviet-ai-copilot-desktop.png",
      liveUrl: "https://nexrall-hr-demo.netviettv-hr-manager.workers.dev",
      githubUrl: "https://github.com/trungducnguyen4/nexrall-hr-manager---marketing"
    },
    {
      id: "rag-knowledge-hub",
      title: "Enterprise RAG Knowledge Search",
      tagline: "Intelligent Corporate Knowledge Base with Vector Search",
      category: "AI Workflow",
      featured: true,
      description: "Enterprise knowledge search platform for corporate policies, standard operating procedures, and technical documentation using Retrieval-Augmented Generation (RAG) with precise source citations.",
      features: [
        "Automated vector indexing for thousands of Word, PDF, Notion documents",
        "Semantic search combined with re-ranking for superior accuracy",
        "Department-level role-based access control"
      ],
      techStack: ["LangChain", "TypeScript", "ChromaDB", "Next.js", "Claude 3.5 API"],
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      liveUrl: "https://demo.example.com/rag-hub",
      githubUrl: "https://github.com/example/enterprise-rag"
    },
    {
      id: "ai-code-auditor",
      title: "AI Code Reviewer & Bug Hunter",
      tagline: "Automated Pull Request Code Auditor & Performance Optimizer",
      category: "Full-stack",
      featured: true,
      description: "Intelligent Pull Request analysis tool automatically detecting OWASP vulnerabilities, logic bugs, and generating unit test suites prior to QA handover.",
      features: [
        "GitHub Webhook integration analyzing code instantaneously upon PR creation",
        "Code architectural evaluation against Clean Architecture and SOLID principles",
        "Automated edge-case test generation"
      ],
      techStack: ["Java", "Spring Boot", "TypeScript", "Docker", "GitHub Actions"],
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      liveUrl: "https://demo.example.com/code-auditor",
      githubUrl: "https://github.com/example/ai-code-auditor"
    }
  ],
  skills: {
    aiArsenal: [
      "Multi-Provider AI Gateway & Resilient Circuit Breakers",
      "Native Function Calling & Agentic Action Engine (HITL)",
      "Zero-Trust Tool-Layer RBAC & Prompt-Injection Defense",
      "Server-Sent Events (SSE) Streaming & True TTFT Telemetry",
      "Vector Embeddings, Cosine Similarity & Citation Grounding",
      "AI-Assisted Coding (Cursor, Claude, Antigravity, Copilot)"
    ],
    languages: [
      "TypeScript & JavaScript (ES6+ / ESM)",
      "Python (Automation & API)",
      "SQL (SQLite / D1, PostgreSQL, MySQL)"
    ],
    frameworks: [
      "Cloudflare Workers & Serverless Edge",
      "NestJS (Modular Architecture)",
      "Next.js & React.js",
      "RESTful API & OpenAPI / Swagger"
    ],
    toolsAndDevops: [
      "Cloudflare D1, R2 & Durable Objects",
      "Git & GitHub (Branching, PRs, CI/CD)",
      "Docker & Containerization basics",
      "Postman API Testing",
      "Scrum / Agile Methodology"
    ]
  },
  certifications: [
    {
      id: "aptis-esol",
      name: "Aptis ESOL General (CEFR Level B2)",
      issuer: "British Council",
      credentialUrl: "https://credentials.britishcouncil.org/55f3380b-08a7-4740-aed8-166a9b592a6c?key=9d8a95ea99814cb50a6a8df20d0878e01017a722bdb9f4dd5dd21548c8fa018d#acc.vZVejIy7",
      credentialId: "BC10000032406",
      enrolmentId: "ESOL~0057438",
      issuedDate: "31/10/2023",
      testDate: "29/10/2023",
      level: "CEFR B2",
      score: "161 / 200",
      skills: {
        listening: "34 / 50 (CEFR C)",
        reading: "44 / 50 (CEFR B2)",
        speaking: "41 / 50 (CEFR B2)",
        writing: "42 / 50 (CEFR B2)",
        grammarAndVocab: "40 / 50"
      },
      image: "/images/aptis_esol_b2.png",
      badge: "Ofqual Regulated · Blockchain Verified",
      description: "International 4-skill English credential issued by British Council, benchmarked against the Common European Framework of Reference for Languages (CEFR B2). Digitally verified on Blockchain."
    }
  ],
  activities: [
    {
      id: "vco",
      organization: "VCO Group",
      role: "Member of External Relations",
      period: "Jul 2023 - Aug 2023",
      duration: "2 months",
      location: "District 5, Ho Chi Minh City · Hybrid",
      workType: "Part-time / Extracurricular",
      logo: "/logos/vco-logo.png",
      description: "Managed external affairs, negotiated workshop venues, and built strategic sponsorship partnerships with reputable brands.",
      responsibilities: [
        "Surveyed and secured venues for corporate workshops, negotiating optimal rental rates.",
        "Approached and successfully acquired sponsorships from diverse brands to support event execution.",
        "Ensured win-win collaboration agreements between the organization and external sponsors."
      ],
      tags: ["External Relations", "Sponsorship Acquisition", "Negotiation", "Event Coordination", "Partnership"],
      media: {
        imageUrl: "/images/vco-workshop.png",
        videoUrl: "https://www.facebook.com/reel/267926715873994",
        videoTitle: "Career Workshop: On The Path #3: RAISE & KNOW YOUR VALUE",
        images: [
          {
            url: "/images/vco-workshop.png",
            caption: "Career Workshop: On The Path #3: RAISE & KNOW YOUR VALUE"
          }
        ],
        projectUrl: "https://vcogroup.vn"
      }
    }
  ],
  highSchoolAchievement: {
    school: "Vo Truong Toan High School",
    period: "2019 - 2022",
    className: "Class 12 STEM Focus (Block A01: Math - Physics - English)",
    sbd: "02062953",
    scoresUrl: "https://vietnamnet.vn/giao-duc/diem-thi/tra-cuu-diem-thi-tot-nghiep-thpt/2022/02062953.html",
    scoreImage: "/images/thpt-vinh-danh-nqh-2022.png",
    honorTitle: "Top English Student Honoree 2K4",
    honorBadge: "NQH High School Golden Wall of Fame",
    scores: {
      math: 8.4,
      physics: 8.5,
      english: 9.4,
      literature: 5,
      chemistry: 5.25,
      biology: 4.5,
      totalA01: 26.3
    },
    note: "STEM advanced student in Block A01 with outstanding performance: Math 8.4, Physics 8.5, English 9.4 — Total A01 score: 26.3/30 in the 2022 National High School Graduation Exam. Honored on the NQH Golden Wall of Fame for top English achievement."
  }
};
