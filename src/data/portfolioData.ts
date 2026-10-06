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
      description: "Hệ sinh thái khảo thí và đánh giá học thuật khép kín All-in-One: từ **ngân hàng câu hỏi có versioning**, **sinh đề gợi ý bằng AI đa nhà cung cấp**, cơ chế **sinh đề ngẫu nhiên hóa snapshot bất biến** cho từng sinh viên, đến hệ thống **giám sát liêm chính 3 tầng** (**browser telemetry + AI risk scoring + human audit**) và phân tích học thuật chuyên sâu.",
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
            desc: "Xây dựng **AiEvaluationJudge** kết hợp **Golden Dataset (golden-dataset.ts)** để benchmark tự động chất lượng sinh đề, đo lường **độ tuân thủ JSON Schema 100%** và **kiểm soát ảo giác (hallucination)**.",
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
    badge: "AI-Augmented Software Engineering & PR Verification",
    title: "Agentic Workflow trong Kỹ thuật Phần mềm & Quy trình Pull Request (PR)",
    subtitle: "Đối chiếu sự khác biệt cốt lõi giữa việc sử dụng AI thông thường (thụ động, copy-paste) và Quy trình Kỹ thuật Agentic tự động hóa gắn liền với Minh chứng Kiểm thử (Proof of Work) trong từng Pull Request trên GitHub",
    manifesto: "AI không thể thay thế tư duy kỹ sư. Khi đặt vào tay một Software Engineer có nền tảng học thuật bài bản (Tốt nghiệp loại Giỏi TDTU, GPA 8.34), công nghệ Agentic trở thành đòn bẩy gia tăng năng suất gấp 3 - 5 lần mà vẫn kiểm soát 100% tính toàn vẹn kiến trúc, type safety và không bao giờ merge mã nguồn thiếu minh chứng kiểm thử.",
    stats: [
      { label: "Pull Requests Chuẩn hóa", val: "28+ PRs", desc: "Đính kèm ảnh/video minh chứng thực tế trên GitHub" },
      { label: "Gia tốc Bàn giao Mã", val: "3x - 5x", desc: "Nhờ Multi-Agent Tooling & Self-Healing Loop" },
      { label: "Độ tin cậy Type Safety", val: "100%", desc: "Tự động chạy Static Typecheck (tsc -b) trước PR" },
      { label: "Minh chứng Kiểm thử", val: "Zero-Blind", desc: "Không merge mã nguồn khi thiếu Proof of Work" }
    ],
    comparisons: [
      {
        criterion: "1. Ngữ cảnh & Phạm vi Dự án (Context Grounding)",
        traditionalWay: {
          title: "Prompt Rời rạc & Copy-Paste Web UI",
          desc: "Kỹ sư copy từng đoạn code nhỏ vào ChatGPT/Claude web chat; AI hoàn toàn mù về cấu trúc cây thư mục, type definitions toàn cục và quan hệ giữa các module.",
          drawback: "Dễ sinh mã nguồn xung đột version thư viện, sai lệch API contracts và gãy cấu trúc tổng thể."
        },
        agenticWay: {
          title: "Agentic Tooling & Deep Context Grounding",
          desc: "Sử dụng các Agentic IDE/CLI (Antigravity, Cursor, Terminal CLI) có quyền đọc trực tiếp codebase, phân tích cây file, AST, Prisma schema và các interface dùng chung.",
          advantage: "Code sinh ra khớp hoàn toàn với kiến trúc hiện có, tôn trọng quy chuẩn Clean Architecture và Modular Pattern."
        }
      },
      {
        criterion: "2. Chu trình Xử lý Lỗi & Debug (Self-Healing Loop)",
        traditionalWay: {
          title: "Thao tác Thủ công & Thử sai Mù quáng",
          desc: "Khi code sinh ra bị lỗi biên dịch hoặc runtime crash, kỹ sư phải copy lỗi quay lại chat dán tới dán lui; AI sửa được chỗ này lại phá hỏng chỗ khác.",
          drawback: "Tạo vòng luẩn quẩn 'sửa một lỗi sinh ba lỗi mới', tiêu tốn thời gian debug gấp 3 lần bình thường."
        },
        agenticWay: {
          title: "Vòng lặp Tự sửa lỗi (Self-Healing Feedback Loop)",
          desc: "Agent tự động chạy lệnh compiler (`tsc -b`), phân tích compiler diagnostics, tự định vị file phát sinh lỗi và điều chỉnh mã nguồn cho đến khi đạt zero-error.",
          advantage: "Toàn bộ chu trình bóc tách lỗi và sửa chữa diễn ra tự trị trong terminal dưới sự giám sát logic của kỹ sư."
        }
      },
      {
        criterion: "3. Kiến trúc, Ràng buộc & An toàn Mã nguồn",
        traditionalWay: {
          title: "'Vibe Coding' Mất kiểm soát",
          desc: "Phó mặc hoàn toàn cho AI quyết định logic; bỏ qua các tầng kiểm tra bảo mật, không có validation biên (Edge Cases), dễ bị prompt injection hoặc rò rỉ dữ liệu.",
          drawback: "Tích tụ nợ kỹ thuật (Technical Debt) khổng lồ, code lỏng lẻo không đủ tiêu chuẩn chạy Production."
        },
        agenticWay: {
          title: "Kỹ sư Làm Chủ Kiến trúc (Architect-in-the-Loop)",
          desc: "Kỹ sư định hình ranh giới trách nhiệm (Separation of Concerns), đóng khung RBAC, schema validation và circuit breakers; AI chỉ đóng vai trò cánh tay thực thi thần tốc.",
          advantage: "Bảo đảm tiêu chuẩn cấp doanh nghiệp (Enterprise-grade): Zero-Trust, phân tầng chặt chẽ, tối ưu hiệu năng."
        }
      },
      {
        criterion: "4. Quy trình Git Flow & Pull Request (Proof of Work)",
        traditionalWay: {
          title: "Commit Thiếu Trách nhiệm & Zero Verification",
          desc: "Commit trực tiếp vào nhánh chính (main) hoặc tạo Pull Request sơ sài; không kiểm thử môi trường thực tế, không có bằng chứng chứng minh tính năng hoạt động.",
          drawback: "Dễ gây lỗi dây chuyền cho đồng đội (break build) và làm sập môi trường staging/production."
        },
        agenticWay: {
          title: "Quy chuẩn PR Minh chứng (Pull Request Proof of Work)",
          desc: "Luôn phân nhánh Feature branch; bắt buộc khởi chạy server thực tế, ghi lại ảnh chụp màn hình UI và video demo luồng nghiệp vụ đính kèm trực tiếp vào mô tả PR trên GitHub.",
          advantage: "Minh bạch 100% bằng chứng kiểm thử trước khi review và merge; đồng đội và Tech Lead nghiệm thu tức thì."
        }
      },
      {
        criterion: "5. Năng suất Thực tế & Giá trị Bàn giao",
        traditionalWay: {
          title: "Cảm giác Nhanh Ảo (Illusion of Speed)",
          desc: "Tạo cảm giác gõ code rất nhanh ở vài phút đầu nhưng mất hàng giờ hoặc hàng ngày để truy tìm các bug ngầm do AI hallucination sinh ra.",
          drawback: "Năng suất bàn giao cuối cùng bị kéo tụt, sản phẩm thiếu tính ổn định lâu dài."
        },
        agenticWay: {
          title: "Gia tốc Bàn giao Bền vững (Production-Ready Velocity)",
          desc: "Kết hợp tư duy toán học/thuật toán vững chắc với năng lực mở rộng context của Agent giúp hoàn thiện cả tính năng, test cases và tài liệu chỉ trong 1 chu trình.",
          advantage: "Bàn giao sản phẩm thật chạy ổn định (đã chứng minh qua 28 PRs ExamTrust & hệ thống NetViet HR Pro)."
        }
      }
    ],
    pipeline: [
      {
        step: "01",
        title: "Architectural Blueprinting",
        subtitle: "Định hình Kiến trúc & Ràng buộc",
        desc: "Kỹ sư phân tích nghiệp vụ, thiết kế Data Model, API Specs, bảo mật RBAC và các ca kiểm thử biên (Edge Cases) trước khi yêu cầu Agent thực thi.",
        actionItems: [
          "Phân tích yêu cầu và bóc tách modulize",
          "Thiết kế schema database & interface contracts",
          "Xác định ranh giới bảo mật và error handling"
        ],
        proofLabel: "Architectural Constraints"
      },
      {
        step: "02",
        title: "Autonomous Agentic Execution",
        subtitle: "Thực thi Mã nguồn Đa tác vụ",
        desc: "Khai thác Agentic Tools (Antigravity, Cursor, CLI) đọc trực tiếp toàn bộ codebase, điều hướng file và tái cấu trúc mã nguồn theo chuẩn Clean Code.",
        actionItems: [
          "Duyệt cây file và inject context chính xác",
          "Sinh mã nguồn tuân thủ Strict TypeScript & SOLID",
          "Tách biệt rõ rệt Controller, Service, Worker"
        ],
        proofLabel: "Deep Codebase Grounding"
      },
      {
        step: "03",
        title: "Self-Healing Verification Loop",
        subtitle: "Vòng lặp Kiểm chứng Tự phục hồi",
        desc: "Tự động kích hoạt compiler checks (`tsc -b`), build pipeline và test suite. Agent tự đọc stack trace, chẩn đoán nguyên nhân gốc rễ và tự vá lỗi ngay trong terminal.",
        actionItems: [
          "Static type checking & Lint verification tự động",
          "Tự sửa lỗi biên dịch không cần can thiệp thủ công",
          "Kiểm tra tính tương thích backwards-compatibility"
        ],
        proofLabel: "100% Build & Type Passing"
      },
      {
        step: "04",
        title: "PR Delivery with Proof of Work",
        subtitle: "Nghiệm thu Minh chứng trên GitHub",
        desc: "Khởi chạy ứng dụng thực tế, ghi lại ảnh chụp màn hình UI và video demo tính năng trực tiếp. Soạn thảo Pull Request (PR) chuẩn chỉnh kèm bằng chứng kiểm thử trước khi merge.",
        actionItems: [
          "Kiểm thử runtime luồng người dùng (User journey)",
          "Chụp screenshot UI & quay video record màn hình",
          "Đính kèm Proof of Work vào mô tả PR trên GitHub"
        ],
        proofLabel: "Verified PR Proof of Work"
      }
    ],
    realWorldProof: [
      {
        id: "examtrust",
        title: "Khóa luận Tốt nghiệp ExamTrust (TDTU)",
        repo: "trungducnguyen4/ExamTrust",
        prCount: "28 Pull Requests",
        badge: "Khóa luận Loại Giỏi",
        desc: "Hệ thống khảo thí trực tuyến phân tán với 28 Pull Requests chuẩn hóa trên GitHub. Mọi PR đều phân tách rõ Feature branch, kiểm tra build và đính kèm bằng chứng thực thi chức năng sinh đề, telemetry và proctoring.",
        prUrl: "https://github.com/trungducnguyen4/ExamTrust/pulls?q=is%3Apr+is%3Aclosed",
        highlights: [
          "28 PRs tuân thủ nghiêm ngặt Git Workflow",
          "Tách biệt API Server và AI Bull Worker",
          "Minh chứng màn hình cho 10 Browser Telemetry Events"
        ]
      },
      {
        id: "netviet",
        title: "NetViet HR Pro & Enterprise AI Copilot",
        repo: "trungducnguyen4/nexrall-hr-manager---marketing",
        prCount: "Feature PR Verified",
        badge: "Triển khai Thực tế",
        desc: "Hệ sinh thái số hóa vận hành 12 phân hệ nhân sự với chi phí $0 hạ tầng cho dưới 100 nhân viên. Toàn bộ logic chức năng Circuit Breaker, Serverless D1 và GPS Radar đều được kiểm thử và tạo PR nghiệm thu.",
        prUrl: "https://github.com/trungducnguyen4/nexrall-hr-manager---marketing/pulls?q=is%3Apr",
        highlights: [
          "Khảo sát toàn bộ nhân sự và phòng HR",
          "Tiết kiệm 25 - 30 triệu VNĐ/năm chi phí hạ tầng",
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
        "**Kiến trúc Serverless Zero-Cost ($0/tháng cho quy mô dưới 100 nhân sự)**: Thiết kế toàn bộ hạ tầng trên **Cloudflare Workers**, **Cloudflare D1 (SQLite)**, **R2 Bucket** và **Durable Objects**, vận hành ổn định cho **quy mô dưới 100 nhân viên** với **chi phí 0 đồng**. So với chi phí thị trường khi thuê **cụm Web & Database Server (~1.5 - 2 triệu/tháng)** kết hợp đường truyền **IP tĩnh (Static IP ~600k/tháng)**, giải pháp giúp doanh nghiệp **tiết kiệm trực tiếp ~25 - 30 triệu VNĐ/năm** chi phí hạ tầng cố định.",
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
