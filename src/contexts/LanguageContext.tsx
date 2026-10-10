import React, { createContext, useContext, useState } from 'react';

export type Language = 'vi' | 'en';

export interface Translations {
  // Nav
  navAbout: string;
  navEducation: string;
  navAgentic: string;
  navPrs: string;
  navExperience: string;
  navAchievements: string;
  navCustomize: string;
  navContact: string;

  // Hero
  heroGreeting: string;
  heroBtnExperience: string;
  heroBtnEducation: string;
  heroBtnCustomize: string;
  heroCopyEmail: string;
  heroCopiedEmail: string;
  heroMascotTitle: string;
  heroMascotSpeech: string;

  // Education
  eduBadge: string;
  eduTitle: string;
  eduSubtitle: string;
  eduBtnDiploma: string;
  eduModalDiplomaTitle: string;
  eduGpaLabel: string;
  eduClassLabel: string;
  eduHonorsHighlights: string;
  eduAcademicAwards: string;
  eduOrganizerLabel: string;
  eduRoleLabel: string;
  eduContestPrefix: string;
  eduThesisHeaderBadge: string;
  eduThesisRoleLabel: string;
  eduThesisTabBoth: string;
  eduThesisTabAiFocus: string;
  eduThesisTabSweFocus: string;
  eduThesisPerspective: string;
  eduThesisTechSwe: string;
  eduThesisTechAi: string;
  eduThesisProofs: string;
  eduThesisProofHint: string;
  eduThesisZoom: string;
  eduThesisClickZoom: string;
  eduThesisAiBannerTag: string;
  eduThesisAiBannerTitle: string;
  eduThesisAiPlus: string;
  eduThesisSweBannerTag: string;
  eduThesisSweBannerTitle: string;
  eduThesisSwePlus: string;
  eduMascotTitle: string;
  eduMascotSpeech: string;

  // Agentic Workflow
  workflowBadge: string;
  workflowManifestoTag: string;
  workflowCommitment: string;
  workflowCommitmentVal: string;
  workflowComparisonTitle: string;
  workflowTradTitle: string;
  workflowTradRisks: string;
  workflowTradDrawback: string;
  workflowAgenticTitle: string;
  workflowAgenticStandards: string;
  workflowAgenticAdvantage: string;
  workflowPipelineTitle: string;
  workflowStepPrefix: string;
  workflowActionItems: string;
  workflowCreatedFiles: string;
  workflowGuidesTag: string;
  workflowGuidesTitle: string;
  workflowGuidesSubtitle: string;
  workflowBtnCopy: string;
  workflowBtnCopied: string;
  workflowProofTitle: string;
  workflowProofSubtitle: string;
  workflowBtnViewPrs: string;

  // Experience / Timeline
  expBadge: string;
  expTitle: string;
  expSubtitle: string;
  expBtnAddTimeline: string;
  expBtnVideo: string;
  expBtnImages: string;
  expSkillsLabel: string;
  expPhotosLabel: string;
  expZoomHint: string;
  expMascotTitle: string;
  expMascotSpeech: string;

  // Achievements
  achieveBadge: string;
  achieveTitle: string;
  achieveSubtitle: string;
  achieveAllTab: string;
  achieveTabCerts: string;
  achieveTabAcademic: string;
  achieveTabActivities: string;
  achieveIssuerLabel: string;
  achieveOfqualLabel: string;
  achieveScoreLabel: string;
  achieveVerifyBlockchain: string;
  achieveBlockchainTitle: string;
  achieveCredentialId: string;
  achieveEnrolment: string;
  achieveIssuedDate: string;
  achieveAptisScoreScale50: string;
  achieveAptisZoomHint: string;
  achieveHighSchoolClass: string;
  achieveHighSchoolDept: string;
  achieveHighSchoolCandidateId: string;
  achieveHighSchoolPeriodPrefix: string;
  achieveA01ScoreLabel: string;
  achieveLookupBtn: string;
  achieveLookupTitle: string;
  achieveSubjectMath: string;
  achieveSubjectPhysics: string;
  achieveSubjectEnglish: string;
  achieveSubjectLiterature: string;
  achieveSubjectChemistry: string;
  achieveSubjectBiology: string;
  achieveBtnVideo: string;
  achieveBtnPhotos: string;
  achieveBtnWebsite: string;
  achieveSoftSkillsLabel: string;

  // Footer
  footerBannerTag: string;
  footerBannerTitle: string;
  footerBannerText: string;
  footerBtnEmail: string;
  footerCopyEmail: string;
  footerCopiedEmail: string;
  footerRights: string;
  footerAlumnus: string;
  footerScrollTop: string;
  footerMascotTitle: string;
  footerMascotSpeech: string;

  // Customizer
  customizerVisualTitle: string;
  customizerSavedSuccess: string;
  customizerVisualSubtitle: string;
  customizerBtnSave: string;
  customizerBtnReset: string;
  customizerClose: string;
}

export const translations: Record<Language, Translations> = {
  vi: {
    // Nav
    navAbout: 'Giới thiệu',
    navEducation: 'Học vấn',
    navAgentic: 'Agentic Workflow',
    navPrs: 'PRs',
    navExperience: 'Kinh nghiệm',
    navAchievements: 'Hoạt động & Chứng chỉ',
    navCustomize: 'Tùy chỉnh Dữ liệu',
    navContact: 'Liên hệ',

    // Hero
    heroGreeting: 'Xin chào, tôi là',
    heroBtnExperience: 'Kinh nghiệm Thực chiến',
    heroBtnEducation: 'Khóa luận & Học vấn',
    heroBtnCustomize: 'Tùy chỉnh Dữ liệu',
    heroCopyEmail: 'Sao chép Email',
    heroCopiedEmail: 'Đã sao chép!',
    heroMascotTitle: 'Chào bạn! Mình là Trung Đức 👋',
    heroMascotSpeech: 'Software Engineer đam mê lập trình Backend vững chắc, kiến trúc phân tán & ứng dụng AI Agent thực tiễn.',

    // Education
    eduBadge: 'Nền tảng Học vấn & Thành tích',
    eduTitle: 'Quá trình Đào tạo & Nền tảng Học thuật',
    eduSubtitle: 'Được đào tạo chính quy, bài bản với nền tảng kỹ thuật phần mềm vững vàng và tư duy logic tự nhiên sắc bén.',
    eduBtnDiploma: 'Xem Bằng Tốt nghiệp',
    eduModalDiplomaTitle: 'Bìa Bằng Tốt nghiệp Kỹ sư — ĐH Tôn Đức Thắng (TDTU)',
    eduGpaLabel: 'Điểm GPA Toàn khóa',
    eduClassLabel: 'Xếp loại Tốt nghiệp',
    eduHonorsHighlights: 'Điểm nổi bật & Năng lực Đào tạo',
    eduAcademicAwards: 'Hoạt động & Giải thưởng Học thuật',
    eduOrganizerLabel: 'Đơn vị:',
    eduRoleLabel: 'Vai trò:',
    eduContestPrefix: 'Cuộc thi',
    eduThesisHeaderBadge: 'KHÓA LUẬN TỐT NGHIỆP CỬ NHÂN KỸ THUẬT PHẦN MỀM',
    eduThesisRoleLabel: 'Phụ trách chính',
    eduThesisTabBoth: 'Toàn cảnh Hai Lõi (SWE + AI)',
    eduThesisTabAiFocus: 'Lõi AI / LLM & Agentic',
    eduThesisTabSweFocus: 'Lõi Kỹ thuật Phần mềm (SWE)',
    eduThesisPerspective: 'Lựa chọn góc nhìn chuyên môn để đánh giá',
    eduThesisTechSwe: 'Tech Stack Phần mềm & Triển khai',
    eduThesisTechAi: 'Tech Stack AI & Agentic Orchestration',
    eduThesisProofs: 'Minh chứng Giao diện & Kiến trúc Thực tế (Live Screenshot Proofs)',
    eduThesisProofHint: 'Bấm vào ảnh chụp thực tế để mở phóng to Lightbox',
    eduThesisZoom: 'Phóng to giao diện',
    eduThesisClickZoom: 'Click phóng to',
    eduThesisAiBannerTag: 'Góc nhìn Tuyển dụng AI Engineer',
    eduThesisAiBannerTitle: 'Khảo sát Chuyên sâu Lõi AI & Agentic Engineering trong ExamTrust',
    eduThesisAiPlus: 'Điểm cộng cho vị trí AI Engineer',
    eduThesisSweBannerTag: 'Góc nhìn Tech Lead / Senior SWE',
    eduThesisSweBannerTitle: 'Khảo sát Chuyên sâu Hạ tầng & Kỹ thuật Phần mềm trong ExamTrust',
    eduThesisSwePlus: 'Điểm cộng cho vị trí Software Engineer',
    eduMascotTitle: 'Tốt nghiệp Loại Giỏi TDTU 🎓',
    eduMascotSpeech: 'GPA 8.34/10 · Software Engineering · Khóa luận ExamTrust kết hợp AI và vi mô phân tán.',

    // Agentic Workflow
    workflowBadge: 'Git Flow & Pull Request Verification Standard',
    workflowManifestoTag: 'Kỷ luật Kỹ sư trong Kỷ nguyên AI',
    workflowCommitment: 'Cam kết Kỹ thuật',
    workflowCommitmentVal: '100% Verified PRs',
    workflowComparisonTitle: 'Trực diện Đối chiếu (Side-by-Side Comparison)',
    workflowTradTitle: 'Cách dùng AI Thông thường',
    workflowTradRisks: 'Thực trạng & Rủi ro tồn tại:',
    workflowTradDrawback: 'Hậu quả:',
    workflowAgenticTitle: 'Kỷ luật Kỹ sư & Git Flow',
    workflowAgenticStandards: 'Quy chuẩn Bắt buộc trong mỗi PR:',
    workflowAgenticAdvantage: 'Giá trị mang lại:',
    workflowPipelineTitle: 'Quy trình 4 Bước Nghiệm thu PR (Pull Request Pipeline)',
    workflowStepPrefix: 'Giai đoạn',
    workflowActionItems: 'Nghiệp vụ thực thi:',
    workflowCreatedFiles: 'File .MD Quy Chuẩn PR:',
    workflowGuidesTag: 'Tài Liệu Kỹ Thuật & Quy Chuẩn PR Thực Tế',
    workflowGuidesTitle: 'Hệ Thống File .MD Hướng Dẫn & Kiểm Soát Quy Trình PR',
    workflowGuidesSubtitle: 'Khung tài liệu Markdown được áp dụng trực tiếp trong dự án để chuẩn hóa hành vi commit, kiểm định 4 Trụ Cột và review mã nguồn.',
    workflowBtnCopy: 'Sao chép File .md',
    workflowBtnCopied: 'Đã sao chép',
    workflowProofTitle: 'Minh chứng Thực tế trên GitHub (Real-World Pull Requests)',
    workflowProofSubtitle: 'Minh chứng Đã Kiểm thử:',
    workflowBtnViewPrs: 'Xem Pull Requests trên GitHub',

    // Experience / Timeline
    expBadge: 'Lộ trình Nghề nghiệp & Trải nghiệm Doanh nghiệp',
    expTitle: 'Kinh nghiệm Làm việc (Timeline)',
    expSubtitle: 'Hành trình tích lũy kỹ năng lập trình thực tế, quy trình Scrum/Agile, và phát triển giải pháp ERP với sự hỗ trợ của AI.',
    expBtnAddTimeline: 'Thêm / Sửa Mốc Timeline',
    expBtnVideo: 'Video Demo',
    expBtnImages: 'Xem Ảnh',
    expSkillsLabel: 'Kỹ năng:',
    expPhotosLabel: 'Hình ảnh dự án',
    expZoomHint: 'Click ảnh để phóng to',
    expMascotTitle: 'Thực chiến Doanh nghiệp 💼',
    expMascotSpeech: 'Tối ưu chi phí hạ tầng về 0đ tại NetViet và quy trình Scrum chuẩn chỉnh tại Rikkeisoft!',

    // Achievements
    achieveBadge: 'Hoạt động · Thành tựu · Chứng chỉ',
    achieveTitle: 'Hoạt động, Thành tựu & Chứng chỉ Quốc tế',
    achieveSubtitle: 'Năng lực phát triển toàn diện: Kỹ năng ngoại ngữ chuẩn quốc tế, tư duy học thuật tự nhiên sắc bén và trải nghiệm đối ngoại thực tế.',
    achieveAllTab: 'Tất cả Mục',
    achieveTabCerts: 'Chứng chỉ Quốc tế',
    achieveTabAcademic: 'Thành tựu Học thuật',
    achieveTabActivities: 'Hoạt động Đối ngoại',
    achieveIssuerLabel: 'Đơn vị cấp:',
    achieveOfqualLabel: 'Quản lý bởi Ofqual Vương quốc Anh',
    achieveScoreLabel: 'Điểm Tổng Thang Đo',
    achieveVerifyBlockchain: 'Xác thực Blockchain ↗',
    achieveBlockchainTitle: 'Xác thực chứng chỉ trên hệ thống Blockchain của British Council',
    achieveCredentialId: 'Số hiệu:',
    achieveEnrolment: 'Enrolment:',
    achieveIssuedDate: 'Ngày cấp:',
    achieveAptisScoreScale50: 'Thang 50',
    achieveAptisZoomHint: 'Chứng chỉ Aptis ESOL · Nhấn để phóng to',
    achieveHighSchoolClass: 'Lớp 12 Chọn Tự nhiên',
    achieveHighSchoolDept: 'Sở GD&ĐT Thành phố Hồ Chí Minh',
    achieveHighSchoolCandidateId: 'Số báo danh:',
    achieveHighSchoolPeriodPrefix: 'Niên khóa',
    achieveA01ScoreLabel: 'Tổng điểm Khối A01',
    achieveLookupBtn: 'Tra cứu SBD',
    achieveLookupTitle: 'Tra cứu điểm thi chính thức trên Báo VietNamNet',
    achieveSubjectMath: 'Toán',
    achieveSubjectPhysics: 'Vật lí',
    achieveSubjectEnglish: 'Ngoại ngữ',
    achieveSubjectLiterature: 'Ngữ văn',
    achieveSubjectChemistry: 'Hóa học',
    achieveSubjectBiology: 'Sinh học',
    achieveBtnVideo: 'Video Demo',
    achieveBtnPhotos: 'Xem Ảnh',
    achieveBtnWebsite: 'Website',
    achieveSoftSkillsLabel: 'Kỹ năng mềm:',

    // Footer
    footerBannerTag: 'Sẵn sàng Hợp tác & Cơ hội Mới',
    footerBannerTitle: 'Bạn đang tìm kiếm một Software Engineer tạo ra sản phẩm đột phá với AI?',
    footerBannerText: 'Tôi luôn sẵn sàng kết nối với các doanh nghiệp, startup và đội ngũ kỹ thuật đang tìm kiếm nhân sự có nền tảng Kỹ thuật phần mềm vững chắc (Tốt nghiệp loại Giỏi ĐH Tôn Đức Thắng) và tinh thần tiên phong ứng dụng AI để tối ưu năng suất.',
    footerBtnEmail: 'Gửi Email Trực tiếp',
    footerCopyEmail: 'Sao chép Email',
    footerCopiedEmail: 'Đã sao chép Email',
    footerRights: 'Xây dựng với React, Vite, Tailwind CSS · Bộ màu Đỏ - Trắng - Đen.',
    footerAlumnus: 'TDTU Alumnus (GPA 8.34 - Giỏi)',
    footerScrollTop: 'Lên đầu trang',
    footerMascotTitle: 'Sẵn sàng Cống hiến',
    footerMascotSpeech: 'Rất mong được trao đổi và cống hiến cùng quý công ty! ✉️',

    // Customizer
    customizerVisualTitle: 'Trình Tùy chỉnh Portfolio Trực quan',
    customizerSavedSuccess: 'Đã lưu thành công!',
    customizerVisualSubtitle: 'Thêm logo, video demo, ảnh minh họa hoặc cập nhật hồ sơ ngay tức thì',
    customizerBtnSave: 'Lưu thay đổi',
    customizerBtnReset: 'Đặt lại mặc định',
    customizerClose: 'Đóng',
  },
  en: {
    // Nav
    navAbout: 'About',
    navEducation: 'Education',
    navAgentic: 'Agentic Workflow',
    navPrs: 'PRs',
    navExperience: 'Experience',
    navAchievements: 'Activities & Certs',
    navCustomize: 'Customize',
    navContact: 'Contact',

    // Hero
    heroGreeting: "Hello, I'm",
    heroBtnExperience: 'Work Experience',
    heroBtnEducation: 'Thesis & Education',
    heroBtnCustomize: 'Customize Data',
    heroCopyEmail: 'Copy Email',
    heroCopiedEmail: 'Copied!',
    heroMascotTitle: "Hello! I'm Trung Duc 👋",
    heroMascotSpeech: 'Software Engineer passionate about resilient Backend systems, distributed architecture & practical AI Agents.',

    // Education
    eduBadge: 'Academic Foundation & Honors',
    eduTitle: 'Education & Academic Background',
    eduSubtitle: 'Formally and rigorously trained with strong software engineering fundamentals and sharp analytical logic.',
    eduBtnDiploma: 'View Degree Cover',
    eduModalDiplomaTitle: 'Engineer Degree Cover — Ton Duc Thang University (TDTU)',
    eduGpaLabel: 'Cumulative GPA',
    eduClassLabel: 'Degree Classification',
    eduHonorsHighlights: 'Key Academic Highlights',
    eduAcademicAwards: 'Academic Competitions & Awards',
    eduOrganizerLabel: 'Organizer:',
    eduRoleLabel: 'Role:',
    eduContestPrefix: 'Contest:',
    eduThesisHeaderBadge: 'SOFTWARE ENGINEERING GRADUATION THESIS',
    eduThesisRoleLabel: 'Core Responsibility',
    eduThesisTabBoth: 'Dual-Core View (SWE + AI)',
    eduThesisTabAiFocus: 'AI / LLM & Agentic Core',
    eduThesisTabSweFocus: 'Software Engineering Core (SWE)',
    eduThesisPerspective: 'Select an engineering perspective for technical assessment',
    eduThesisTechSwe: 'Software Engineering & Deployment Tech Stack',
    eduThesisTechAi: 'AI & Agentic Orchestraction Tech Stack',
    eduThesisProofs: 'Live Screenshots & Architectural Telemetry',
    eduThesisProofHint: 'Click any screenshot to zoom in Lightbox view',
    eduThesisZoom: 'Zoom Screenshot',
    eduThesisClickZoom: 'Click to zoom',
    eduThesisAiBannerTag: 'AI Engineer Recruiter Focus',
    eduThesisAiBannerTitle: 'In-depth Survey: AI & Agentic Engineering Core in ExamTrust',
    eduThesisAiPlus: 'Key Highlights for AI Engineer Roles',
    eduThesisSweBannerTag: 'Tech Lead / Senior SWE Focus',
    eduThesisSweBannerTitle: 'In-depth Survey: Infrastructure & Software Engineering in ExamTrust',
    eduThesisSwePlus: 'Key Highlights for Software Engineer Roles',
    eduMascotTitle: 'TDTU Honors Graduate 🎓',
    eduMascotSpeech: 'GPA 8.34/10 · Software Engineering · ExamTrust thesis combining AI & distributed micro-workers.',

    // Agentic Workflow
    workflowBadge: 'Git Flow & Pull Request Verification Standard',
    workflowManifestoTag: 'Engineering Rigor in the AI Era',
    workflowCommitment: 'Technical Commitment',
    workflowCommitmentVal: '100% Verified PRs',
    workflowComparisonTitle: 'Side-by-Side Comparison',
    workflowTradTitle: 'Traditional / Naive AI Usage',
    workflowTradRisks: 'Current Pitfalls & Risks:',
    workflowTradDrawback: 'Consequences:',
    workflowAgenticTitle: 'Engineering Rigor & Git Flow',
    workflowAgenticStandards: 'Mandatory Standards in Every PR:',
    workflowAgenticAdvantage: 'Delivered Value:',
    workflowPipelineTitle: '4-Stage Pull Request Verification Pipeline',
    workflowStepPrefix: 'Stage',
    workflowActionItems: 'Action Items:',
    workflowCreatedFiles: 'PR Guideline .MD Files:',
    workflowGuidesTag: 'Technical Documentation & Production PR Standards',
    workflowGuidesTitle: 'Markdown Specifications & PR Verification Guidelines',
    workflowGuidesSubtitle: 'Production-grade markdown documentation enforced in actual repositories to standardize commits, 4 Pillars verification, and code review.',
    workflowBtnCopy: 'Copy .md File',
    workflowBtnCopied: 'Copied',
    workflowProofTitle: 'Real-World Proof of Work on GitHub (Verified PRs)',
    workflowProofSubtitle: 'Verified Evidence:',
    workflowBtnViewPrs: 'View Pull Requests on GitHub',

    // Experience / Timeline
    expBadge: 'Professional Roadmap & Enterprise Experience',
    expTitle: 'Work Experience (Timeline)',
    expSubtitle: 'Hands-on journey mastering production software engineering, Scrum/Agile workflows, and AI-accelerated ERP development.',
    expBtnAddTimeline: 'Add / Edit Timeline Milestone',
    expBtnVideo: 'Demo Video',
    expBtnImages: 'View Photos',
    expSkillsLabel: 'Skills:',
    expPhotosLabel: 'Project Photos',
    expZoomHint: 'Click photo to enlarge',
    expMascotTitle: 'Production Experience 💼',
    expMascotSpeech: 'Zero-cost serverless infrastructure at NetViet and enterprise Scrum workflow at Rikkeisoft!',

    // Achievements
    achieveBadge: 'Activities · Honors · Certifications',
    achieveTitle: 'Activities, Honors & International Certifications',
    achieveSubtitle: 'Comprehensive excellence: International language credentials, rigorous analytical logic, and real-world external relations experience.',
    achieveAllTab: 'All Items',
    achieveTabCerts: 'International Certifications',
    achieveTabAcademic: 'Academic Honors',
    achieveTabActivities: 'Extracurricular & External Relations',
    achieveIssuerLabel: 'Issuer:',
    achieveOfqualLabel: 'Regulated by Ofqual (UK)',
    achieveScoreLabel: 'Overall Scaled Score',
    achieveVerifyBlockchain: 'Blockchain Verification ↗',
    achieveBlockchainTitle: 'Verify credentials on the British Council Blockchain registry',
    achieveCredentialId: 'Credential ID:',
    achieveEnrolment: 'Enrolment:',
    achieveIssuedDate: 'Issued Date:',
    achieveAptisScoreScale50: 'Scale of 50',
    achieveAptisZoomHint: 'Aptis ESOL Certificate · Click to enlarge',
    achieveHighSchoolClass: 'Grade 12 STEM Specialization',
    achieveHighSchoolDept: 'Department of Education and Training, Ho Chi Minh City',
    achieveHighSchoolCandidateId: 'Candidate ID:',
    achieveHighSchoolPeriodPrefix: 'Academic Years',
    achieveA01ScoreLabel: 'Total Block A01 Score',
    achieveLookupBtn: 'Lookup Candidate ID',
    achieveLookupTitle: 'Lookup official national exam results on VietNamNet',
    achieveSubjectMath: 'Mathematics',
    achieveSubjectPhysics: 'Physics',
    achieveSubjectEnglish: 'English',
    achieveSubjectLiterature: 'Literature',
    achieveSubjectChemistry: 'Chemistry',
    achieveSubjectBiology: 'Biology',
    achieveBtnVideo: 'Demo Video',
    achieveBtnPhotos: 'View Photos',
    achieveBtnWebsite: 'Website',
    achieveSoftSkillsLabel: 'Soft Skills:',

    // Footer
    footerBannerTag: 'Open for Collaboration & Opportunities',
    footerBannerTitle: 'Looking for a Software Engineer who builds impactful AI products?',
    footerBannerText: 'I am eager to connect with engineering teams, startups, and enterprises seeking a talent with solid Software Engineering foundations (Honors Graduate from Ton Duc Thang University) and a forward-thinking mindset in leveraging AI to maximize productivity.',
    footerBtnEmail: 'Send Direct Email',
    footerCopyEmail: 'Copy Email',
    footerCopiedEmail: 'Email Copied',
    footerRights: 'Built with React, Vite, Tailwind CSS · Red - White - Black theme.',
    footerAlumnus: 'TDTU Alumnus (GPA 8.34 - Honors)',
    footerScrollTop: 'Back to top',
    footerMascotTitle: 'Ready to Contribute',
    footerMascotSpeech: 'Looking forward to connecting and contributing to your team! ✉️',

    // Customizer
    customizerVisualTitle: 'Visual Portfolio Customizer',
    customizerSavedSuccess: 'Saved successfully!',
    customizerVisualSubtitle: 'Add logos, video demos, illustrations or update profile data in realtime',
    customizerBtnSave: 'Save Changes',
    customizerBtnReset: 'Reset to Default',
    customizerClose: 'Close',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('trungduc_portfolio_lang');
      if (saved === 'vi' || saved === 'en') return saved;
    } catch {
      // ignore
    }
    return 'vi';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('trungduc_portfolio_lang', lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  const t = (key: keyof Translations): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
