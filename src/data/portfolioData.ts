import type { PortfolioData } from '../types/portfolio';

export const initialPortfolioData: PortfolioData = {
  profile: {
    name: "Trung Đức",
    title: "AI-Augmented Software Engineer",
    tagline: "Xây dựng sản phẩm phần mềm hiện đại và giải pháp ERP thông minh với tốc độ vượt trội nhờ AI-assisted workflows",
    bio: "Kỹ sư phần mềm tốt nghiệp loại Giỏi Đại học Tôn Đức Thắng (GPA 8.34). Đam mê ứng dụng các công cụ AI thế hệ mới (Cursor, Claude, Copilot, LLM Integration) kết hợp nền tảng kỹ thuật phần mềm vững chắc để giải quyết bài toán nghiệp vụ doanh nghiệp, tối ưu hóa năng suất lập trình và bàn giao sản phẩm nhanh chóng, chuẩn xác.",
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
          "RBAC Auth (JWT)"
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
  experiences: [
    {
      id: "netviet",
      company: "NetViet",
      role: "ERP & Internal Systems Developer",
      period: "Tháng 07/2026 - Hiện tại",
      duration: "3 tháng",
      location: "TP. Hồ Chí Minh · On-site",
      workType: "Internship",
      logo: "/logos/netviet-logo.svg",
      description: "Chủ động khảo sát và bám sát quy trình làm việc thực tế tại doanh nghiệp để phát triển hệ thống NetViet HR Pro (hr.netviet.live). Tối ưu hóa triệt để chi phí hạ tầng với kiến trúc Zero Cost và chuyển dịch từ ứng dụng CRUD thông thường sang hệ thống cung cấp Data & Insights chuyên sâu cho Ban Giám đốc và bộ phận Nhân sự.",
      responsibilities: [
        "Khảo sát và bám sát thực tế vận hành: Đi sâu vào từng phòng ban để xây dựng quy trình số hóa chuẩn xác theo thực tế công việc hàng ngày của công ty, thay vì áp dụng máy móc lý thuyết trên giấy tờ.",
        "Kiến trúc giải pháp Zero Cost cho SME: Giải quyết bài toán công ty SME không có IP tĩnh và không có máy chủ on-premise. Chủ động đo lường lưu lượng request hàng ngày để thiết kế kiến trúc Serverless (Cloudflare Workers & Cloud Edge) vận hành với chi phí 0 đồng (ZERO COST), giúp doanh nghiệp tiết kiệm ngân sách đáng kể.",
        "Thay thế chấm công Wifi bằng GPS Radar: Thay vì tốn kém chi phí IP tĩnh cho mạng Wifi, phát triển tính năng chấm công GPS đa địa điểm (Văn phòng HCM, Hà Nội) với bán kính radar thông minh, độ chính xác cao.",
        "Tập trung Data & Insight cho HR và Sếp tổng: Vượt qua các tính năng CRUD đơn thuần để tập trung khai thác và trực quan hóa dữ liệu (tỷ lệ check-in thời gian thực, phân tích đi muộn, thống kê tiến độ Kanban và tính lương tự động), hỗ trợ Ban Giám đốc ra quyết định điều hành chính xác."
      ],
      tags: ["NetViet HR Pro", "Serverless Architecture", "Zero Cost Optimization", "Data & Insights", "GPS Attendance", "Kanban & Payroll", "Cloudflare Workers"],
      media: {
        imageUrl: "/images/netviet-hr-dashboard.png",
        images: [
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
        projectUrl: "https://hr.netviet.live",
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
      description: "Tham gia dự án mô phỏng (Mock project) chuẩn doanh nghiệp trên nền tảng Java để rèn luyện quy trình Git và tích lũy kinh nghiệm thực tế sâu sắc với Scrum / Agile.",
      responsibilities: [
        "Làm việc theo nhóm qua 5 sprint (mỗi sprint 2 tuần), chủ động đóng góp vào việc khởi tạo và làm mịn Product Backlog.",
        "Tham gia đầy đủ các buổi Sprint Planning, Daily Scrum và ước lượng công việc (Task Estimation).",
        "Phát triển toàn diện các tính năng xác thực và phân quyền cốt lõi: Đăng ký, Đăng nhập, Đăng xuất, Phân quyền người dùng (Authorization & RBAC) và Quản lý tài khoản.",
        "Thực hành chuẩn hóa Git workflow (Feature branch, Pull Request review, Merge conflict resolution)."
      ],
      tags: ["Java", "Spring Framework", "Scrum / Agile", "Git Flow", "Authentication / Authorization", "Sprint Planning"],
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
      id: "erp-ai-assistant",
      title: "ERP Workflow AI Assistant",
      tagline: "Trợ lý AI tự động hóa xử lý chứng từ và tổng hợp dữ liệu ERP",
      category: "ERP / Enterprise",
      featured: true,
      description: "Hệ thống AI tích hợp vào ERP doanh nghiệp giúp tự động hóa khâu đọc hiểu chứng từ, trích xuất dữ liệu bán hàng và sinh báo cáo tài chính tự động bằng các mô hình LLM chuyên biệt.",
      features: [
        "Trích xuất thực thể từ tài liệu PDF/Hóa đơn với độ chính xác >98%",
        "Chatbot nội bộ tra cứu trạng thái đơn hàng và tồn kho realtime",
        "Tích hợp quy trình kiểm thử tự động xác thực dữ liệu đầu ra"
      ],
      techStack: ["Python", "FastAPI", "React", "OpenAI API", "Tailwind CSS", "PostgreSQL"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      liveUrl: "https://demo.example.com/erp-assistant",
      githubUrl: "https://github.com/example/erp-ai-assistant"
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
      "AI-Assisted Coding (Cursor, Claude, Copilot)",
      "Prompt Engineering & Chain-of-Thought",
      "LLM Integration & Agentic Reasoning",
      "RAG & Vector Search Concepts"
    ],
    languages: [
      "TypeScript & JavaScript (ES6+)",
      "Python (Automation & API)",
      "SQL (PostgreSQL, MySQL)"
    ],
    frameworks: [
      "NestJS (Modular Architecture)",
      "Next.js & React.js",
      "RESTful API Architecture"
    ],
    toolsAndDevops: [
      "Git & GitHub (Branching, PRs)",
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
