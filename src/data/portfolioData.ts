import type { PortfolioData } from '../types/portfolio';

export const initialPortfolioData: PortfolioData = {
  profile: {
    name: "Trung Đức",
    title: "AI-Augmented Software Engineer",
    tagline: "Xây dựng hệ thống phần mềm doanh nghiệp & AI Agent cấp Production với kiến trúc Serverless hiệu năng cao và chi phí tối ưu",
    bio: "Kỹ sư phần mềm tốt nghiệp loại Giỏi Đại học Tôn Đức Thắng (GPA 8.34). Đam mê ứng dụng các công cụ AI thế hệ mới (Cursor, Claude, Antigravity, LLM Integration) kết hợp nền tảng kỹ thuật phần mềm vững chắc và kiến trúc Multi-Provider AI Gateway, Agentic Tools để giải quyết bài toán nghiệp vụ doanh nghiệp, tối ưu hóa năng suất lập trình và bàn giao sản phẩm nhanh chóng, chuẩn xác.",
    status: "Sẵn sàng đón nhận cơ hội việc làm mới",
    location: "TP. Hồ Chí Minh, Việt Nam",
    email: "nguyentrungduc.forwork@gmail.com",
    github: "https://github.com/trungducnguyen4",
    linkedin: "https://www.linkedin.com/in/trungducnguyen1407",
    phone: "(+84) 9xx xxx xxx",
    stats: {
      gpa: "8.34",
      gpaNote: "Loại Giỏi · ĐH Tôn Đức Thắng",
      experienceMonths: "3+ Th.",
      experienceNote: "Dự án Doanh nghiệp thực tế",
      aiDeliveryRate: "3x",
      aiDeliveryNote: "Tốc độ bàn giao với AI"
    }
  },
  education: {
    id: "tdtu",
    school: "Trường Đại học Tôn Đức Thắng",
    schoolEn: "Ton Duc Thang University (TDTU)",
    degree: "Cử nhân Kỹ thuật Phần mềm",
    major: "Software Engineering",
    gpa: "8.34 / 10",
    classification: "Loại Giỏi",
    period: "2022 - 2026",
    location: "Quận 7, TP. Hồ Chí Minh",
    logo: "/logos/tdtu-logo.png",
    diplomaCover: "/images/tdtu-diploma-cover.jpg",
    honors: [
      "Tốt nghiệp loại Giỏi chuyên ngành Kỹ thuật Phần mềm (GPA 8.34/10)",
      "Nắm vững kiến thức nền tảng và đạt kết quả tốt ở các môn Cơ sở dữ liệu, Kiến trúc phần mềm, Lập trình nâng cao",
      "Chủ động tìm hiểu và ứng dụng các công cụ AI hỗ trợ viết code, tìm lỗi và hoàn thiện đồ án học tập"
    ],
    activity: {
      title: "Giải Khuyến Khích Cuộc thi AISC 2024",
      award: "Giải Khuyến Khích",
      extraAward: "Đề tài được Yêu thích nhất",
      contest: "AISC 2024",
      contestFullName: "Advanced Information Systems Contest 2024",
      organizer: "Khoa Hệ thống Thông tin — Trường ĐH Công nghệ Thông tin (UIT - ĐHQG-HCM)",
      time: "12/2024",
      role: "Developer",
      image: "/images/aisc_2024.jpg",
      description: "Cuộc thi học thuật uy tín do Khoa HTTT - Trường ĐH Công nghệ Thông tin (ĐHQG-HCM) tổ chức. Đảm nhiệm vai trò **Developer**, trực tiếp tham gia thiết kế giải pháp công nghệ và lập trình hoàn thiện sản phẩm dự thi.",
      skills: ["System Architecture", "Software Development", "Teamwork"]
    },
    aiThesis: {
      title: "ExamTrust — Nền tảng Đánh giá Học thuật Thông minh & Giám sát Liêm chính",
      description: "Khóa luận tốt nghiệp chuyên ngành Kỹ thuật Phần mềm TDTU: Ứng dụng AI đa mô hình sinh câu hỏi, sinh đề thi ngẫu nhiên hóa snapshot và giám sát phòng thi 3 tầng bảo mật.",
      tech: ["NestJS", "Next.js 15", "Redis Bull Queue", "Ollama / LLMs", "Prisma MySQL"]
    },
    graduationThesis: {
      title: "ExamTrust — Nền tảng Đánh giá Học thuật & Khảo thí Trực tuyến Thông minh",
      subtitle: "Smart Academic Assessment & Integrity Proctoring Platform (Khóa luận Tốt nghiệp TDTU)",
      role: "Lead Full-stack Architecture & AI Integration",
      period: "2026",
      badge: "Đề tài Khóa luận Tốt nghiệp",
      description: "Hệ sinh thái khảo thí và đánh giá học thuật khép kín All-in-One: từ **ngân hàng câu hỏi có versioning**, **hỗ trợ sinh câu hỏi gợi ý bằng AI đa nhà cung cấp (Human-in-the-Loop có giảng viên kiểm duyệt)**, cơ chế **sinh đề ngẫu nhiên hóa snapshot bất biến** cho từng sinh viên, đến hệ thống **giám sát liêm chính 3 tầng** (**browser telemetry + AI risk scoring + human audit**) và phân tích học thuật chuyên sâu.",
      softwareCore: {
        title: "Lõi Kỹ thuật Phần mềm (Software Engineering Core)",
        tagline: "Kiến trúc Phân tán, Hàng đợi Bất đồng bộ & Tính toàn vẹn Dữ liệu Cấp Doanh nghiệp",
        badge: "Production-Grade",
        metrics: [
          { label: "QPS Đỉnh", val: "100% Zero-Loss" },
          { label: "Chi phí Serverless", val: "$0/mo (Cloudflare)" },
          { label: "Sự kiện Telemetry", val: "10 Events/Client" }
        ],
        description: "Thiết kế kiến trúc hệ thống chuẩn enterprise phân tách rõ rệt giữa API Server và Background Worker, đảm bảo tính bất biến của bài thi và khả năng mở rộng quy mô lớn.",
        highlights: [
          {
            title: "Kiến trúc Phân tán & Tách biệt Worker Process",
            desc: "Phân tách hoàn toàn **API Web Server (NestJS)** và tiến trình **AI Worker độc lập (ai-worker.ts)** thông qua **Redis Bull Queue**, triệt tiêu hoàn toàn nguy cơ **nghẽn I/O HTTP** khi xử lý tác vụ AI nặng.",
            badge: "Distributed Worker",
            metrics: "Zero-blocking HTTP"
          },
          {
            title: "Snapshot Bài thi Ngẫu nhiên & Bất biến",
            desc: "Thuật toán **sinh đề ngẫu nhiên hóa riêng biệt** theo ma trận độ khó cho từng thí sinh; **snapshot khóa cứng trạng thái đề** ngay khi làm bài, loại bỏ triệt để **nguy cơ lộ đề và gian lận**.",
            badge: "State Snapshot",
            metrics: "Immutable Exam State"
          },
          {
            title: "Ngân hàng Câu hỏi Versioning (Git-like VCS)",
            desc: "Thiết kế bảng **QuestionVersion lưu trữ diff lịch sử chỉnh sửa**, hỗ trợ **rollback phiên bản** và ghi **nhật ký kiểm toán (Audit Trail)** phục vụ công tác thanh tra khảo thí.",
            badge: "Git-like Versioning",
            metrics: "Full Diff & Rollback"
          },
          {
            title: "Telemetry Phòng thi Thời gian thực Không Xâm phạm",
            desc: "Thu thập **10 loại tín hiệu hành vi trình duyệt** (blur, tab switch, fullscreen exit, clipboard copy/paste...) hoàn toàn qua **Browser API** mà **không cần cài đặt phần mềm can thiệp OS**.",
            badge: "Browser Telemetry",
            metrics: "10 Event Types"
          },
          {
            title: "Bảo mật Phân quyền RBAC & Kiểm soát Chặn Gian lận",
            desc: "Kiến trúc xác thực **JWT Stateless + HTTP-only Cookie** phân quyền 3 cấp (**Admin, Giảng viên, Thí sinh**); tích hợp **Rate Limiting chống spam request** và **mã hóa payload** bài nộp.",
            badge: "RBAC & Security",
            metrics: "3-Tier RBAC"
          },
          {
            title: "Hạ tầng Serverless & Tối ưu Chi phí 0 Đồng",
            desc: "Triển khai Frontend trên **Cloudflare Workers (OpenNext)**, lưu trữ chứng cứ webcam trên **Cloudflare R2**, webhook **AWS Lambda** và container hóa môi trường với **Docker Compose**.",
            badge: "Cloudflare Serverless",
            metrics: "Zero-Cost Infra"
          },
          {
            title: "Quy trình Git Flow & Pull Request Minh chứng (28 PRs)",
            desc: "Tuân thủ nghiêm ngặt **Git Workflow** với **28 Pull Requests (PR)** trên GitHub; chuẩn hóa việc đính kèm **screenshot / video demo kiểm thử thực tế (Proof of Work)** trong mô tả PR giúp rà soát logic chặt chẽ và nghiệm thu trước khi merge vào nhánh chính.",
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
        title: "Lõi AI / LLM & Agentic (AI & Agentic Engineering Core)",
        tagline: "Multi-Provider Orchestration, Vector Search, LLM Evaluation & Multimodal Vision",
        badge: "HR AI Focus",
        metrics: [
          { label: "Mô hình Tích hợp", val: "5+ Multi-Provider" },
          { label: "Độ trễ Tạo đề", val: "Stream & Bull Worker" },
          { label: "Dung sai JSON", val: "100% Tự sửa lỗi (jsonrepair)" }
        ],
        description: "Làm chủ chu trình kỹ thuật Generative AI: từ trừu tượng hóa mô hình LLM, hàng đợi bất đồng bộ, vector embedding khử trùng lặp, thị giác máy tính webcam, đến khung benchmark tự động (LLM-as-a-Judge) và quản trị chi phí token.",
        highlights: [
          {
            title: "Điều phối Đa Mô hình LLM (Multi-Provider Orchestration)",
            desc: "Tích hợp và trừu tượng hóa thống nhất **7 provider** (**Google Gemini, DeepSeek, OpenRouter, NVIDIA, Local Ollama**), hỗ trợ **runtime fallback tự động** khi có sự cố API.",
            badge: "Multi-LLM Abstraction",
            metrics: "7 AI Providers"
          },
          {
            title: "Vector Embeddings & Semantic Search (RAG Foundation)",
            desc: "Xây dựng **EmbeddingService** vector hóa văn bản học thuật (128-dim normalized semantic vector), tính toán **Cosine Similarity** để **khử trùng lặp câu hỏi ngữ nghĩa** và **gom cụm chủ đề môn học**.",
            badge: "Vector Cosine Search",
            metrics: "128-dim Embedding"
          },
          {
            title: "Pipeline Xử lý Hàng đợi & Tự sửa Lỗi JSON (JSON Repair Loop)",
            desc: "Vòng lặp **Bull Queue xử lý đa nhiệm bất đồng bộ**, tự động bóc tách markdown fence và **tự sửa lỗi cú pháp JSON sinh ra từ LLM qua jsonrepair**; kiểm soát timeout an toàn với **AbortSignal**.",
            badge: "Queue Loop & Repair",
            metrics: "100% Parse Success"
          },
          {
            title: "Thị giác Máy tính Đa phương thức (Multimodal Vision Proctoring)",
            desc: "Tích hợp **mô hình Vision cục bộ (Moondream / Ollama Vision)** phân tích ảnh webcam phòng thi để **nhận diện 9 thẻ nghi vấn** (mất mặt, nhiều người, điện thoại, tài liệu cấm), **tự purge sau 30 ngày** bảo vệ riêng tư.",
            badge: "Multimodal Vision",
            metrics: "9 Visual Tags"
          },
          {
            title: "Đánh giá & Benchmark Tự động (LLM-as-a-Judge)",
            desc: "Xây dựng **AiEvaluationJudge** kết hợp **Golden Dataset (golden-dataset.ts)** để benchmark tự động chất lượng sinh câu hỏi AI, đo lường **độ tuân thủ JSON Schema 100%** và **kiểm soát ảo giác (hallucination)**.",
            badge: "LLM-as-a-Judge Eval",
            metrics: "Golden Dataset Suite"
          },
          {
            title: "Giám sát Chi phí Token & Quản trị AI Liêm chính (Telemetry & Governance)",
            desc: "Module **AiTelemetryService** theo dõi độ trễ, ước lượng token và **tính chi phí USD realtime**. Kết hợp cơ chế **Human-in-the-Loop**: AI đóng vai trò **khuyến nghị (Advisory Evidence)**, giảng viên toàn quyền quyết định.",
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
          title: "Trợ lý AI Đa mô hình & Human-in-the-Loop",
          desc: "Tích hợp Ollama (Gemma 3, Moondream), Gemini, DeepSeek để sinh 7-9 loại câu hỏi tự động. Xử lý bất đồng bộ qua Redis + Bull Queue với worker riêng, đảm bảo không nghẽn API; giảng viên toàn quyền kiểm duyệt trước khi đưa vào ngân hàng câu hỏi.",
          badge: "AI & Queue Worker"
        },
        {
          title: "Sinh Đề ngẫu nhiên & Snapshot Bài làm Bất biến",
          desc: "Đề thi sinh ngẫu nhiên theo ma trận trọng số và độ khó riêng biệt cho từng sinh viên, chống lộ đề và sao chép. Toàn bộ nội dung bài thi được snapshot khóa cứng ngay thời điểm bắt đầu làm bài.",
          badge: "Anti-Leak Matrix"
        },
        {
          title: "Giám sát Liêm chính 3 Tầng (Privacy-first Proctoring)",
          desc: "Tầng 1 thu thập 10 loại tín hiệu trình duyệt (mất focus, chuyển tab, thoát toàn màn hình, paste bất thường...). Tầng 2 đánh giá rủi ro kép Dual-layer (Risk Score 0-100) kết hợp AI Vision phân tích ảnh webcam lưu trữ cục bộ (tự động xóa sau 30 ngày). Tầng 3 cung cấp Audit trail minh bạch cho giảng viên.",
          badge: "3-Layer Integrity"
        },
        {
          title: "Kiến trúc Hiện đại & Hiệu năng cao",
          desc: "Backend NestJS phân tách tiến trình API và AI Worker, Prisma ORM, MySQL, Redis Cache. Frontend Next.js 15 App Router, React, Tailwind CSS, Radix UI và kiến trúc Zero Cost Serverless trên Cloudflare.",
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
            caption: "Dashboard Quản trị Giảng viên & Trợ lý AI Tạo câu hỏi Tự động (ExamTrust)",
            title: "Tổng quan Quản trị & Trợ lý AI Sinh Câu hỏi"
          },
          {
            url: "/images/examtrust-integrity-monitor.png",
            caption: "Trung tâm Giám sát Rủi ro Phòng thi: Thống kê tần suất vi phạm & Xu hướng tín hiệu toàn vẹn",
            title: "Bảng điều khiển Giám sát Liêm chính & Rủi ro Phòng thi"
          },
          {
            url: "/images/examtrust-question-bank.png",
            caption: "Ngân hàng 500+ Câu hỏi: Quản lý đa định dạng (Trắc nghiệm, Tự luận, Điền khuyết...) có Version Control",
            title: "Ngân hàng Câu hỏi Học thuật với Versioning & Đánh giá Độ khó"
          }
        ]
      }
    },
    highSchool: {
      school: "THPT Võ Trường Toản",
      period: "2019 - 2022",
      className: "Lớp 12 Chọn Tự nhiên (Khối A01: Toán - Vật lí - Tiếng Anh)",
      sbd: "02062953",
      scoresUrl: "https://vietnamnet.vn/giao-duc/diem-thi/tra-cuu-diem-thi-tot-nghiep-thpt/2022/02062953.html",
      scoreImage: "/images/thpt-vinh-danh-nqh-2022.png",
      honorTitle: "Đạt thành tích xuất sắc môn Anh - Khóa 2K4",
      honorBadge: "Vinh danh Học sinh xuất sắc môn Tiếng Anh 2K4 · Hệ thống Luyện thi NQH Cấp 3",
      scores: {
        math: 8.4,
        physics: 8.5,
        english: 9.4,
        chemistry: 5.25,
        biology: 4.5,
        literature: 5.0,
        totalA01: 26.3
      },
      note: "Học sinh lớp chọn khối A01 với thành tích xuất sắc: Toán 8.4, Lí 8.5, Tiếng Anh 9.4 — Tổng điểm Khối A01 đạt 26.3 điểm (Kỳ thi Tốt nghiệp THPT Quốc gia 2022). Được Hệ thống Luyện thi NQH Cấp 3 vinh danh trong danh sách học sinh đạt thành tích xuất sắc môn Tiếng Anh khóa 2K4."
    }
  },
  agenticWorkflow: {
    badge: "Git Flow & Pull Request Verification Standard",
    title: "Kỷ luật Pull Request & Minh chứng Kiểm thử (Proof of Work)",
    subtitle: "Đối chiếu sự khác biệt cốt lõi giữa việc dùng AI thiếu kiểm chứng (Commit bừa bãi) và Quy chuẩn Kỹ thuật chuyên nghiệp: Bắt buộc khởi chạy server thực tế, đính kèm Screenshot UI và Video demo trực tiếp trong mô tả PR trên GitHub trước khi merge.",
    manifesto: "AI giúp gia tốc viết code gấp 3 - 5 lần, nhưng kỷ luật kỹ sư quyết định chất lượng production. Không bao giờ commit mù quáng hay merge mã nguồn mà không có ảnh chụp hoặc video minh chứng luồng người dùng thực tế trên GitHub.",
    stats: [
      { label: "Pull Requests Chuẩn hóa", val: "28+ PRs", desc: "Đính kèm ảnh/video minh chứng thực tế trên GitHub" },
      { label: "Độ tin cậy Type Safety", val: "100%", desc: "Bắt buộc pass Static Typecheck (tsc -b) trước PR" },
      { label: "Chạy Thử Nghiệm Runtime", val: "Local & Cloud", desc: "Kiểm thử server thật trước khi tạo PR" },
      { label: "Minh chứng Kiểm thử", val: "100% PRs", desc: "Đính kèm Screenshot UI & Video Demo nghiệp vụ" }
    ],
    comparisons: [
      {
        criterion: "Quy chuẩn Thực thi Pull Request & Minh chứng Kiểm thử (PR Proof of Work)",
        traditionalWay: {
          title: "Commit Thiếu Trách nhiệm & Zero Verification",
          desc: "Kỹ sư copy-paste code từ AI rồi commit thẳng vào nhánh main hoặc tạo Pull Request sơ sài. Không khởi chạy server thực tế, không kiểm thử luồng người dùng (User Journey), hoàn toàn không có ảnh chụp hay video chứng minh tính năng hoạt động.",
          drawback: "Đồng đội review mù quáng (blind review), tiềm ẩn rủi ro gãy build dây chuyền, xung đột mã nguồn và làm sập môi trường Staging/Production.",
          bullets: [
            "Commit trực tiếp vào nhánh chính (main/master) hoặc PR rỗng",
            "Không khởi chạy local server để phát hiện lỗi runtime",
            "Hoàn toàn thiếu Screenshot UI và Video ghi hình tính năng",
            "Đẩy toàn bộ rủi ro crash runtime sang cho đồng đội hoặc tester"
          ]
        },
        agenticWay: {
          title: "Quy chuẩn PR Minh chứng (Pull Request Proof of Work)",
          desc: "Luôn phân nhánh Feature branch; bắt buộc khởi chạy server thực tế, ghi lại ảnh chụp màn hình UI và video demo luồng nghiệp vụ đính kèm trực tiếp vào mô tả PR trên GitHub.",
          advantage: "Minh bạch 100% bằng chứng kiểm thử trước khi review và merge; đồng đội và Tech Lead nghiệm thu tức thì.",
          bullets: [
            "Tách nhánh feature/* độc lập và tuân thủ chặt chẽ Git Flow",
            "Bắt buộc pass 100% compiler check (tsc -b) & runtime tests",
            "Bắt buộc đính kèm Screenshot UI & Video demo luồng nghiệp vụ",
            "Mô tả chi tiết Scope of Changes & Edge Cases đã xử lý trước khi merge"
          ]
        }
      }
    ],
    pipeline: [
      {
        step: "01",
        title: "Feature Branching & PR Template Spec",
        subtitle: "Khởi tạo Nhánh & Áp dụng Mẫu PR Chuẩn",
        desc: "Phân nhánh `feature/*` độc lập từ `develop/main`. Thiết lập quy chuẩn commit và nạp sẵn khung mẫu Pull Request chuẩn chỉ trước khi bắt tay viết code.",
        actionItems: [
          "Phân nhánh feature/[ticket] độc lập, tuân thủ nghiêm ngặt Git Flow",
          "Thiết lập Conventional Commits (feat:, fix:, refactor:)",
          "Bắt buộc định hình phạm vi Scope of Changes theo mẫu .md"
        ],
        proofLabel: "Git Flow & PR Template",
        createdFiles: [
          {
            name: ".github/PULL_REQUEST_TEMPLATE.md",
            path: "GitHub Repository Root",
            type: "doc",
            desc: "Khung mẫu PR chuẩn hóa trên GitHub: Bắt buộc điền Overview, Proof of Change (4 Trụ cột) và Deployment Checklist"
          },
          {
            name: "docs/guidelines/GIT_WORKFLOW.md",
            path: "Engineering Standard Spec",
            type: "doc",
            desc: "Sổ tay quy chuẩn phân nhánh, bảo vệ nhánh main, cấm commit file rác / credentials và cấm gộp PR quá 500 lines"
          }
        ]
      },
      {
        step: "02",
        title: "Verification Protocol & 4 Pillars Testing",
        subtitle: "Giao thức 4 Trụ Cột: 'Prove the Change'",
        desc: "Thực thi quy tắc Verification Protocol: Mọi thay đổi đều phải được chứng minh bằng kết quả kiểm thử thực tế, tuyệt đối không suy đoán chủ quan.",
        actionItems: [
          "Trụ cột 1 (Tests): Syntax check node --check / tsc -b, automated tests npm test",
          "Trụ cột 2 (Runtime): Thực thi API endpoint thật, status HTTP 200/201, audit DB",
          "Trụ cột 4 (Confidence): Tuyên bố rõ ràng những gì ĐÃ kiểm chứng vs CHƯA kiểm thử"
        ],
        proofLabel: "Verification Protocol",
        createdFiles: [
          {
            name: ".agents/rules/verification-protocol.md",
            path: "Engineering Protocol Rule",
            type: "doc",
            desc: "Quy chuẩn Kỹ thuật: 'Prove the Change and Report Confidence' — Định nghĩa chi tiết 4 Trụ Cột kiểm định bắt buộc"
          },
          {
            name: "docs/testing/TESTING_CHECKLIST.md",
            path: "Quality Assurance Standard",
            type: "doc",
            desc: "Danh mục nghiệm thu kỹ thuật: Syntax check, regression tests, database migration và API contracts validation"
          }
        ]
      },
      {
        step: "03",
        title: "Visual Proof Protocol (Screenshots & Video)",
        subtitle: "Minh chứng Thị giác Bắt buộc cho Mọi Thay đổi",
        desc: "Thực thi Trụ cột 3 (Visual): Bắt buộc chụp ảnh màn hình hoặc quay video screen recording luồng thao tác người dùng trước khi tạo Pull Request.",
        actionItems: [
          "Chỉnh sửa UI/Component: BẮT BUỘC chụp Screenshot (Normal, Empty, Error, Responsive)",
          "Chỉnh sửa Luồng người dùng: BẮT BUỘC quay Video screen recording / GIF (.mp4)",
          "Chỉnh sửa Backend thuần: Bắt buộc minh họa Toast thông báo, Modal popup hoặc dữ liệu bảng"
        ],
        proofLabel: "Visual Proof Protocol",
        createdFiles: [
          {
            name: "docs/rules/VISUAL_PROOF_GUIDELINES.md",
            path: "Media Proof Standard",
            type: "doc",
            desc: "Quy định tiêu chuẩn chụp screenshot đa trạng thái và quay video thao tác hành trình người dùng thật"
          },
          {
            name: "docs/proofs/PROOF_ASSET_STORAGE.md",
            path: "Evidence Repository Spec",
            type: "doc",
            desc: "Tiêu chuẩn lưu trữ, nén ảnh/video và cú pháp Markdown để nhúng trực tiếp media vào mô tả PR trên GitHub"
          }
        ]
      },
      {
        step: "04",
        title: "Fresh-Context AI Review & Safe Merge Gate",
        subtitle: "Phản biện Độc lập trên Git Diff & Merge An toàn",
        desc: "Áp dụng cơ chế Fresh-Context Review: Reviewer độc lập chỉ nhận User Request và git diff để phản biện logic, bảo mật và clean code trước khi được phép merge.",
        actionItems: [
          "Khởi tạo reviewer độc lập chỉ duyệt trên bản git diff sạch",
          "Rà soát 3 tiêu chí: Regressions logic, Security/Secrets leaks, Code cleanliness",
          "Chỉ khi Reviewer xác nhận APPROVED và pass 100% checklist thì mới cho phép merge"
        ],
        proofLabel: "Fresh-Context Review",
        createdFiles: [
          {
            name: "docs/rules/FRESH_CONTEXT_CODE_REVIEW.md",
            path: "Anti-Confirmation Bias Rule",
            type: "doc",
            desc: "Quy chuẩn review mã nguồn độc lập trên git diff, loại bỏ hoàn toàn thiên kiến xác nhận (Confirmation Bias)"
          },
          {
            name: "docs/release/PR_ACCEPTANCE_SIGNOFF.md",
            path: "Merge Gate Checklist",
            type: "doc",
            desc: "Checklist nghiệm thu đóng PR: CI GitHub Actions passed, 0 security/bug issue, 100% visual proof đính kèm"
          }
        ]
      }
    ],
    markdownGuides: [
      {
        id: "pr-template",
        fileName: ".github/PULL_REQUEST_TEMPLATE.md",
        title: "Mẫu Pull Request Chuẩn mực trên GitHub (PR Template)",
        badge: "GitHub PR Standard",
        description: "Template tự động nạp vào mọi PR trên GitHub, chuẩn hóa cấu trúc bắt buộc: Overview, 4 Trụ Cột Minh Chứng (Tests, Runtime, Visual, Confidence) và Deployment Checklist.",
        content: `## 📌 Overview
<!-- Tóm tắt ngắn gọn mục tiêu của Pull Request và các thay đổi chính -->

---

## 🔍 Proof of Change & Confidence Report

### 1. 🧪 Tests (Focused logic and integration checks)
- [ ] Syntax check: \`node --check server.js local/entry.js src/app.js src/ui.js\`
- [ ] Automated tests: \`npm test\` passed
- [ ] Pre-launch attack squad: \`npm run attack\` passed

### 2. ⚡ Runtime (Use the actual feature end to end)
- **Endpoint / Action**: <!-- ví dụ: POST /api/campaigns/create -->
- **Status code / Response**: <!-- ví dụ: HTTP 200 OK -->
- **Database verification**: <!-- ví dụ: D1 record inserted/updated -->

### 3. 👁️ Visual (Inspect what the user will see)
<!-- 
BẮT BUỘC:
- Nếu chỉnh UI / Component: ĐÍNH KÈM SCREENSHOT (Kéo thả ảnh vào đây)
- Nếu chỉnh Luồng người dùng (User Flow): ĐÍNH KÈM VIDEO QUAY MÀN HÌNH / GIF (Kéo thả file video mp4/mov hoặc gif vào đây)
- Nếu chỉnh Backend/API: Minh họa Toast thông báo hoặc bảng dữ liệu hiển thị
-->

### 4. 🎯 Confidence (State what was verified — and what was not)
- **Mức độ tự tin (Confidence level)**: High / Medium / Low
- **Những gì ĐÃ được chứng minh (Verified)**:
  - 
  - 
- **Những gì CHƯA kiểm thử / Ranh giới phụ thuộc (NOT verified)**:
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
        title: "Giao thức Kỹ thuật Xác minh (Verification Protocol Rule)",
        badge: "Core Engineering Rule",
        description: "Bộ quy tắc cốt lõi 'Prove the Change and Report Confidence' ràng buộc kỹ sư và AI: Tuyệt đối không phán đoán chủ quan, bắt buộc thực thi 4 Trụ Cột và Fresh-Context Review.",
        content: `# Rule: Verification Protocol — "Prove the Change and Report Confidence"

## Core Philosophy
Mọi thay đổi mã nguồn, tính năng mới hoặc sửa lỗi (bugfix) đều phải được chứng minh bằng bằng chứng thực tế trước khi coi là hoàn thành.
Tuyệt đối không phán đoán "chắc là chạy được rồi" mà không có kết quả xác minh cụ thể.

## 4 Trụ Cột Xác Minh (The 4 Pillars)
1. 🧪 Tests: Syntax check, Unit & Integration Tests, zero regression.
2. ⚡ Runtime: Chạy thực tế End-to-End, HTTP Status 200/201, kiểm tra DB records.
3. 👁️ Visual: Chỉnh UI bắt buộc có Screenshot; Chỉnh luồng người dùng bắt buộc có Video screen recording.
4. 🎯 Confidence: Tuyên bố mức độ tự tin (High/Med/Low), liệt kê rõ ĐÃ kiểm vs CHƯA kiểm.

## 🧐 Fresh-Context AI Code Review
Trước khi commit & push, bắt buộc spawn Reviewer độc lập chỉ nhận User Request và git diff:
1. Logic & Regressions: Không làm vỡ module lân cận.
2. Security & Secrets: Không lộ biến môi trường, API tokens, SQLi/XSS.
3. Code Cleanliness: Không console.log rác, không mock data thừa.
Chỉ khi reviewer xác nhận APPROVED mới đủ điều kiện Commit & Push lên GitHub.`
      }
    ],
    realWorldProof: [
      {
        id: "examtrust",
        title: "Khóa luận Tốt nghiệp ExamTrust (TDTU)",
        repo: "trungducnguyen4/ExamTrust",
        prCount: "28 Pull Requests",
        badge: "Khóa luận Loại Giỏi",
        desc: "Hệ thống khảo thí trực tuyến phân tán với 28 Pull Requests chuẩn hóa trên GitHub. Mọi PR đều phân tách rõ Feature branch, kiểm tra build và đính kèm bằng chứng thực thi chức năng quản lý bài thi, telemetry và proctoring.",
        prUrl: "https://github.com/trungducnguyen4/ExamTrust/pulls?q=is%3Apr+is%3Aclosed",
        highlights: [
          "28 PRs chuẩn hóa tuân thủ nghiêm ngặt Git Workflow",
          "Mỗi PR đính kèm minh chứng màn hình và log kiểm thử",
          "Zero merge conflict và 100% type safety trước khi merge"
        ]
      },
      {
        id: "netviet",
        title: "NetViet HR Pro & Enterprise AI Copilot",
        repo: "trungducnguyen4/nexrall-hr-manager---marketing",
        prCount: "Feature PR Verified",
        badge: "Triển khai Thực tế",
        desc: "Hệ sinh thái số hóa vận hành 12 phân hệ nhân sự với chi phí $0 hạ tầng cho dưới 100 nhân viên. Toàn bộ logic chức năng Circuit Breaker, Serverless D1 và GPS Radar đều được kiểm thử và tạo PR nghiệm thu kèm minh chứng.",
        prUrl: "https://github.com/trungducnguyen4/nexrall-hr-manager---marketing/pulls?q=is%3Apr",
        highlights: [
          "Khảo sát toàn bộ nhân sự và phòng HR thực tế",
          "Tiết kiệm 8.4 triệu VNĐ/năm chi phí hạ tầng",
          "Proof of Work cho 24 Tools AI Copilot & Radar GPS"
        ]
      },
      {
        id: "rikkei",
        title: "Dự án Mock Project OneConnect (Rikkeisoft)",
        repo: "Rikkeisoft Hybrid Internship",
        prCount: "5 Sprints Scrum",
        badge: "Agile / Scrum Doanh nghiệp",
        desc: "Tham gia phát triển dự án chuẩn doanh nghiệp qua 5 Sprint liên tục, chuẩn hóa quy trình phân nhánh Feature branch, review Pull Request và xử lý merge conflict thực tế.",
        prUrl: "https://rikkeisoft.com",
        highlights: [
          "5 Sprint Scrum chuẩn chỉ (Planning, Daily, Retro)",
          "Thực hành Feature branch & PR Code Review",
          "Đính kèm kết quả test module phân quyền RBAC"
        ]
      }
    ]
  },
  experiences: [
    {
      id: "netviet",
      company: "NetViet",
      role: "ERP & AI Systems Developer",
      period: "Tháng 07/2026 - Hiện tại",
      duration: "3 tháng",
      location: "TP. Hồ Chí Minh · On-site",
      workType: "Internship",
      logo: "/logos/netviet-logo.svg",
      description: "Chủ động khảo sát toàn diện quy trình làm việc thực tế cùng Ban Giám đốc và phòng Hành chính - Nhân sự để phát triển hệ thống **NetViet HR Pro** kết hợp **Enterprise AI Copilot** (phiên bản demo độc lập trên Cloudflare: `nexrall-hr-demo.netviettv-hr-manager.workers.dev`). Tối ưu hóa triệt để chi phí hạ tầng với kiến trúc **Serverless Zero Cost ($0/tháng cho quy mô dưới 100 nhân sự)**, chuyển dịch từ CRUD thông thường sang **hệ thống phân tích dữ liệu chuyên sâu** và tích hợp **AI Agent thông minh** hỗ trợ ra quyết định thời gian thực.",
      responsibilities: [
        "**Khảo sát & số hóa vận hành SME**: Trực tiếp phỏng vấn và khảo sát thực tế **toàn bộ nhân viên** (quy mô dưới 100 người) cùng **phòng Hành chính - Nhân sự (HR)** để bóc tách triệt để các pain point vận hành; từ đó chuẩn hóa và số hóa chính xác **12 phân hệ nhân sự** (**chấm công**, **nghỉ phép**, **công việc Kanban**, **tính lương**, **bàn giao dự án**), thay vì áp dụng máy móc lý thuyết.",
        "**Kiến trúc Serverless Zero-Cost ($0/tháng cho quy mô dưới 100 nhân sự)**: Thiết kế toàn bộ hạ tầng trên **Cloudflare Workers**, **Cloudflare D1 (SQLite)**, **R2 Bucket** và **Durable Objects**, vận hành ổn định cho **quy mô dưới 100 nhân viên** với **chi phí 0 đồng**. So với giải pháp thuê máy chủ và duy trì đường truyền mạng chuyên dụng (~700.000 đ/tháng), giải pháp giúp doanh nghiệp **tiết kiệm trực tiếp 8.4 triệu VNĐ/năm** chi phí hạ tầng cố định.",
        "**Phát triển Enterprise AI Copilot & Multi-Provider Gateway**: Xây dựng AI Copilot với **24 Native Function Calling Tools**, **Stateful Circuit Breaker (cooldown 30s)** chống cascading outages, **rate limiting đa tầng** và tự động **fallback giữa Gemini, OpenAI và Edge Heuristics**, bảo vệ **100% ngân sách token**.",
        "**Bảo mật Tool-Layer RBAC & Chống Hallucination**: Triển khai kiểm soát quyền **độc lập khỏi prompt ở tầng mã nguồn**, loại bỏ nguy cơ **Prompt Injection / Jailbreak** đối với dữ liệu lương nhạy cảm; tích hợp **Citation Grounding** lọc trích dẫn giả mạo và **Human-in-the-Loop Action Cards**.",
        "**Streaming SSE & Chấm công Radar GPS**: Xây dựng cơ chế truyền phát **Server-Sent Events (SSE)** kèm đo lường **True TTFT**, kết hợp tính năng **chấm công GPS đa địa điểm** (văn phòng HCM, Hà Nội) với **radar bán kính thông minh** thay thế mạng Wifi IP tĩnh.",
        "**Quy trình Git Flow & Pull Request Minh chứng (Proof of Work)**: Tuân thủ quy trình phát triển chuyên nghiệp với **Pull Request (PR) trên GitHub**; luôn đính kèm **screenshot / video demo kết quả chạy thực tế** trong phần mô tả PR làm bằng chứng kiểm thử (**Proof of Work / Verification**) trước khi review & merge mã nguồn."
      ],
      tags: ["NetViet HR Pro", "Enterprise AI Copilot", "Multi-Provider AI Gateway", "Function Calling (24 Tools)", "Server-Sent Events (SSE)", "Serverless Zero Cost", "Cloudflare Workers & D1", "GPS Radar Geofence", "Tool-Layer RBAC", "Git Flow & PR Proof of Work"],
      media: {
        imageUrl: "/images/netviet-ai-copilot-desktop.png",
        images: [
          {
            url: "/images/netviet-ai-copilot-desktop.png",
            caption: "Dashboard Vận hành NetViet HR Pro tích hợp Enterprise AI Copilot & Radar Chấm công GPS"
          },
          {
            url: "/images/netviet-ai-copilot-chat.png",
            caption: "Giao diện Trợ lý ảo AI Copilot: Đa phân hệ, điều hướng thông minh & Telemetry thời gian thực"
          },
          {
            url: "/images/netviet-ai-copilot-telemetry.png",
            caption: "Multi-Provider AI Gateway Telemetry: Đo lường độ trễ (1262ms), chi phí token và mô hình Gemini"
          },
          {
            url: "/images/netviet-hr-dashboard.png",
            caption: "Dashboard Tổng quan Vận hành & Radar Chấm công GPS (NetViet HR Pro)"
          },
          {
            url: "/images/netviet-lighthouse-perf.png",
            caption: "Lighthouse Performance Đạt Điểm Gần Như Tuyệt Đối 99/100 (FCP 0.6s, LCP 0.8s, TBT 0ms)"
          },
          {
            url: "/images/netviet-cloudflare-observatory.png",
            caption: "Cloudflare Observatory Metrics: LCP 97.9% Good, INP 95.5% Good, TTFB 91.1% Good"
          },
          {
            url: "/images/netviet-hr-attendance.png",
            caption: "Phân hệ Chấm công & Xử lý Dữ liệu Ca làm việc Thực tế"
          },
          {
            url: "/images/netviet-hr-tasks.png",
            caption: "Bảng Quản trị Công việc Kanban & Tiến độ Nhân sự"
          },
          {
            url: "/images/netviet-hr-payroll.png",
            caption: "Phân hệ Bảng lương & Tự động hóa Tính toán Chi phí Nhân sự"
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
      period: "Tháng 01/2026 - Tháng 04/2026",
      duration: "4 tháng",
      location: "TP. Hồ Chí Minh · Hybrid",
      workType: "Internship",
      logo: "/logos/rikkei-logo.png",
      description: "Tham gia dự án mô phỏng (**Mock project**) chuẩn doanh nghiệp trên nền tảng **Java** để rèn luyện quy trình Git và tích lũy kinh nghiệm thực tế sâu sắc với **Scrum / Agile**.",
      responsibilities: [
        "Làm việc theo nhóm qua **5 sprint** (mỗi sprint 2 tuần), chủ động đóng góp vào việc khởi tạo và làm mịn **Product Backlog**.",
        "Tham gia đầy đủ các buổi **Sprint Planning**, **Daily Scrum** và ước lượng công việc (**Task Estimation**).",
        "Phát triển toàn diện các tính năng xác thực và phân quyền cốt lõi: **Đăng ký**, **Đăng nhập**, **Đăng xuất**, **Phân quyền người dùng (Authorization & RBAC)** và **Quản lý tài khoản**.",
        "Thực hành chuẩn hóa **Git workflow**: Tuân thủ quy trình đính kèm **screenshot / video demo kết quả thực thi** trực tiếp vào mô tả từng **Pull Request (PR) trên GitHub** làm minh chứng kiểm thử (**Proof of Work**) cho đồng đội review trước khi merge code (**Feature branch**, **Pull Request review**, **Merge conflict resolution**)."
      ],
      tags: ["Java", "Spring Framework", "Scrum / Agile", "Git Flow", "Authentication / Authorization", "Sprint Planning", "PR Proof of Work"],
      media: {
        imageUrl: "/images/rikkei-issues-list.png",
        images: [
          {
            url: "/images/rikkei-issues-list.png",
            caption: "Danh sách công việc (OneConnect) - Phụ trách & hoàn thành bởi Nguyễn Trung Đức"
          },
          {
            url: "/images/rikkei-project-summary.png",
            caption: "Bảng tóm tắt & phân bổ nhân sự dự án Headhunt (OneConnect)"
          },
          {
            url: "/images/rikkei-project-info.png",
            caption: "Thông tin chung dự án Headhunt - Quy trình Scrum (OneConnect)"
          }
        ],
        projectUrl: "https://rikkeisoft.com",
      }
    },
    {
      id: "vco",
      company: "VCO Group",
      role: "Member of External Relationship",
      period: "Tháng 07/2023 - Tháng 08/2023",
      duration: "2 tháng",
      location: "Quận 5, TP. Hồ Chí Minh · Hybrid",
      workType: "Part-time",
      logo: "/logos/vco-logo.png",
      description: "Đảm nhiệm công tác đối ngoại, đàm phán địa điểm tổ chức sự kiện và xây dựng quan hệ hợp tác tài trợ chiến lược với các thương hiệu uy tín.",
      responsibilities: [
        "Khảo sát và bảo đảm địa điểm tổ chức các workshop cho công ty, đàm phán mức giá thuê tối ưu ngân sách.",
        "Tiếp cận và kêu gọi tài trợ thành công từ nhiều thương hiệu khác nhau để hỗ trợ tổ chức sự kiện.",
        "Đảm bảo các thỏa thuận hợp tác cùng có lợi (win-win collaboration) giữa công ty và các nhà tài trợ."
      ],
      tags: ["External Relations", "Sponsorship Acquisition", "Negotiation", "Event Coordination", "Partnership"],
      media: {
        imageUrl: "/images/vco-workshop.png",
        videoUrl: "https://www.facebook.com/share/r/1Eq1AV4i4k/",
        videoTitle: "Workshop Hướng nghiệp: On The Path #3: RAISE & KNOW - VCO Group",
        projectUrl: "https://vcogroup.com.vn",
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
      description: "Hệ thống **AI Agent nhân sự cấp doanh nghiệp** tích hợp vào nền tảng **NetViet HR Pro**, phục vụ ổn định **40 nhân sự** với **chi phí hạ tầng $0/tháng**. Trang bị **Multi-Provider AI Gateway (Gemini, OpenAI, Workers AI)** có **Circuit Breaker tự phục hồi**, **24 Native Function Calling Tools**, bảo mật **Tool-Layer RBAC chống Jailbreak** và **streaming SSE** thời gian thực.",
      features: [
        "**Multi-Provider AI Gateway**: Circuit Breaker ngắt 30s chống sập, Rate Limiting & Fast-fail 429",
        "**24 Native Function Calling Tools**: Phê duyệt đơn, kiểm toán bảng lương, chấm công GPS & Action Cards",
        "**Bảo mật Zero-Trust Tool-Layer RBAC**: Chặn đứng Prompt Injection, kiểm soát quyền truy cập cấp DB",
        "**Server-Sent Events (SSE) & True TTFT Telemetry**: Trực quan hóa tốc độ sinh token và Citation Grounding",
        "**Quy trình Git Flow & PR Verification**: Chuẩn hóa việc đính kèm screenshot và video demo tính năng thực tế trực tiếp trong mô tả từng Pull Request trên GitHub làm minh chứng kiểm thử (Proof of Work) trước khi merge"
      ],
      techStack: ["Cloudflare Workers", "D1 Database", "Gemini & OpenAI API", "SSE Streaming", "Vector Search", "TypeScript/ESM"],
      imageUrl: "/images/netviet-ai-copilot-desktop.png",
      liveUrl: "https://nexrall-hr-demo.netviettv-hr-manager.workers.dev",
      githubUrl: "https://github.com/trungducnguyen4/nexrall-hr-manager---marketing"
    },
    {
      id: "rag-knowledge-hub",
      title: "Enterprise RAG Knowledge Search",
      tagline: "Hệ thống tra cứu tài liệu nghiệp vụ thông minh tích hợp Vector Search",
      category: "AI Workflow",
      featured: true,
      description: "Nền tảng tra cứu tài liệu quy trình, chính sách và cẩm nang kỹ thuật cho nhân sự công ty bằng kỹ thuật Retrieval-Augmented Generation (RAG) với khả năng trích dẫn nguồn chính xác.",
      features: [
        "Đánh chỉ mục vector tự động cho hàng ngàn tài liệu Word, PDF, Notion",
        "Semantic Search kết hợp Re-ranking cho độ chính xác vượt trội",
        "Hỗ trợ phân quyền truy cập thông tin theo phòng ban"
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
      tagline: "Bot kiểm thử mã nguồn tự động và gợi ý tối ưu hiệu năng bằng AI",
      category: "Full-stack",
      featured: true,
      description: "Công cụ phân tích Pull Request thông minh, tự động phát hiện các lỗ hổng OWASP, lỗi logic, và tự động tạo Unit Test mẫu trước khi bàn giao cho đội ngũ QA.",
      features: [
        "Tích hợp Webhook GitHub phân tích code tức thì khi có PR mới",
        "Đánh giá cấu trúc code theo Clean Architecture và SOLID",
        "Tự động sinh các ca kiểm thử biên (Edge-case tests)"
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
      issuer: "British Council (Hội đồng Anh)",
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
      description: "Chứng chỉ tiếng Anh Quốc tế 4 kỹ năng do Hội đồng Anh (British Council) cấp, đạt chuẩn Khung tham chiếu trình độ ngôn ngữ chung châu Âu (CEFR B2). Xác thực kỹ thuật số minh bạch qua Blockchain."
    }
  ],
  activities: [
    {
      id: "vco",
      organization: "VCO Group",
      role: "Member of External Relationship",
      period: "Tháng 07/2023 - Tháng 08/2023",
      duration: "2 tháng",
      location: "Quận 5, TP. Hồ Chí Minh · Hybrid",
      workType: "Part-time / Hoạt động Ngoại khóa",
      logo: "/logos/vco-logo.png",
      description: "Đảm nhiệm công tác đối ngoại, khảo sát đàm phán địa điểm tổ chức sự kiện và xây dựng quan hệ hợp tác tài trợ chiến lược với các thương hiệu uy tín.",
      responsibilities: [
        "Khảo sát và bảo đảm địa điểm tổ chức các workshop cho công ty, đàm phán mức giá thuê tối ưu ngân sách.",
        "Tiếp cận và kêu gọi tài trợ thành công từ nhiều thương hiệu khác nhau để hỗ trợ tổ chức sự kiện.",
        "Đảm bảo các thỏa thuận hợp tác cùng có lợi (win-win collaboration) giữa công ty và các nhà tài trợ."
      ],
      tags: ["External Relations", "Sponsorship Acquisition", "Negotiation", "Event Coordination", "Partnership"],
      media: {
        imageUrl: "/images/vco-workshop.png",
        videoUrl: "https://www.facebook.com/reel/267926715873994",
        videoTitle: "Workshop Hướng nghiệp: On The Path #3: RAISE & KNOW YOUR VALUE",
        images: [
          {
            url: "/images/vco-workshop.png",
            caption: "Workshop Hướng nghiệp: On The Path #3: RAISE & KNOW YOUR VALUE"
          }
        ],
        projectUrl: "https://vcogroup.vn"
      }
    }
  ],
  highSchoolAchievement: {
    school: "THPT Võ Trường Toản",
    period: "2019 - 2022",
    className: "Lớp 12 Chọn Tự nhiên (Khối A01: Toán - Vật lí - Tiếng Anh)",
    sbd: "02062953",
    scoresUrl: "https://vietnamnet.vn/giao-duc/diem-thi/tra-cuu-diem-thi-tot-nghiep-thpt/2022/02062953.html",
    scoreImage: "/images/thpt-vinh-danh-nqh-2022.png",
    honorTitle: "Vinh danh Học sinh Xuất sắc Môn Tiếng Anh 2K4",
    honorBadge: "Bảng Vàng NQH Cấp 3",
    scores: {
      math: 8.4,
      physics: 8.5,
      english: 9.4,
      literature: 5,
      chemistry: 5.25,
      biology: 4.5,
      totalA01: 26.3
    },
    note: "Học sinh lớp chọn khối A01 với thành tích xuất sắc: Toán 8.4, Lí 8.5, Tiếng Anh 9.4 — Tổng điểm Khối A01 đạt 26.3 điểm (Kỳ thi Tốt nghiệp THPT Quốc gia 2022). Được Hệ thống Luyện thi NQH Cấp 3 vinh danh trong danh sách học sinh đạt thành tích xuất sắc môn Tiếng Anh khóa 2K4."
  }
};
