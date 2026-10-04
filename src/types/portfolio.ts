export interface TimelineMedia {
  imageUrl?: string;
  images?: { url: string; caption: string }[];
  videoUrl?: string; // YouTube, Loom, or direct mp4/webm
  videoTitle?: string;
  projectUrl?: string;
  repoUrl?: string;
}

export interface TimelineItem {
  id: string;
  company: string;
  role: string;
  period: string;
  duration?: string;
  location: string;
  workType: 'Internship' | 'Part-time' | 'Full-time' | 'Freelance';
  logo: string;
  logoBg?: string; // optional background for logo container
  description: string;
  responsibilities: string[];
  tags: string[];
  media?: TimelineMedia;
}

export interface ThesisPillar {
  title: string;
  desc: string;
  badge?: string;
  metrics?: string;
}

export interface GraduationThesis {
  title: string;
  subtitle: string;
  role: string;
  period?: string;
  badge?: string;
  score?: string;
  description: string;
  softwareCore?: {
    title: string;
    tagline?: string;
    badge?: string;
    description?: string;
    metrics?: { label: string; val: string }[];
    highlights: ThesisPillar[];
    tech: string[];
  };
  aiCore?: {
    title: string;
    tagline?: string;
    badge?: string;
    description?: string;
    metrics?: { label: string; val: string }[];
    highlights: ThesisPillar[];
    tech: string[];
  };
  keyPillars: {
    title: string;
    desc: string;
    badge?: string;
  }[];
  tech: string[];
  media: {
    imageUrl: string;
    images: { url: string; caption: string; title?: string }[];
    demoUrl?: string;
    repoUrl?: string;
  };
}

export interface EducationActivity {
  title: string;
  award: string;
  extraAward?: string;
  contest: string;
  contestFullName?: string;
  organizer: string;
  time: string;
  role: string;
  image?: string;
  description?: string;
  skills?: string[];
}

export interface EducationItem {
  id: string;
  school: string;
  schoolEn: string;
  degree: string;
  major: string;
  gpa: string;
  classification: string;
  period: string;
  location: string;
  logo: string;
  diplomaCover?: string;
  honors: string[];
  coursework?: string[];
  activity?: EducationActivity;
  aiThesis?: {
    title: string;
    description: string;
    tech: string[];
  };
  graduationThesis?: GraduationThesis;
  highSchool?: {
    school: string;
    period: string;
    className: string;
    sbd: string;
    scoresUrl: string;
    scoreImage: string;
    honorTitle?: string;
    honorBadge?: string;
    scores: {
      math: number;
      physics: number;
      english: number;
      chemistry?: number;
      biology?: number;
      literature?: number;
      totalA01: number;
    };
    note: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  imageUrl: string;
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'AI Workflow' | 'Full-stack' | 'ERP / Enterprise';
}

export interface SkillItem {
  name: string;
  category: string;
  highlighted?: boolean;
  note?: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  status: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  phone: string;
  stats: {
    gpa: string;
    gpaNote: string;
    experienceMonths: string;
    experienceNote: string;
    aiDeliveryRate: string;
    aiDeliveryNote: string;
  };
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issuedDate: string;
  testDate?: string;
  credentialUrl?: string;
  credentialId?: string;
  enrolmentId?: string;
  level: string;
  score: string;
  skills: {
    listening: string;
    reading: string;
    speaking: string;
    writing: string;
    grammarAndVocab?: string;
  };
  image: string;
  badge?: string;
  description: string;
}

export interface ActivityItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  duration?: string;
  location?: string;
  workType?: string;
  logo?: string;
  description: string;
  responsibilities: string[];
  tags: string[];
  media?: {
    imageUrl?: string;
    videoUrl?: string;
    videoTitle?: string;
    images?: Array<{ url: string; caption?: string; title?: string }>;
    projectUrl?: string;
  };
}

export interface AcademicAchievementItem {
  school: string;
  period: string;
  className: string;
  sbd: string;
  scoresUrl: string;
  scoreImage: string;
  honorTitle?: string;
  honorBadge?: string;
  scores: {
    math: number;
    physics: number;
    english: number;
    chemistry?: number;
    biology?: number;
    literature?: number;
    totalA01: number;
  };
  note: string;
}

export interface PortfolioData {
  profile: ProfileInfo;
  education: EducationItem;
  experiences: TimelineItem[];
  projects: ProjectItem[];
  skills: {
    aiArsenal: string[];
    languages: string[];
    frameworks: string[];
    toolsAndDevops: string[];
  };
  certifications?: CertificationItem[];
  activities?: ActivityItem[];
  highSchoolAchievement?: AcademicAchievementItem;
}
