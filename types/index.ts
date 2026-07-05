export interface Lesson {
  title: string;
  tags?: { label: string; color: string }[];
  /** If set, clicking this lesson opens the PDF at this URL in a new tab */
  pdfUrl?: string;
  /** If true, clicking this lesson opens the exam modal */
  hasExam?: boolean;
}

export interface Week {
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Comment {
  name: string;
  date: string;
  text: string;
}

export interface LeaderboardStudent {
  name: string;
  score: number;
  level: string;
  completedLessons: number;
  totalLessons: number;
}

export interface MotivationalMessage {
  text: string;
  tone: "motivational" | "tough-love" | "celebratory";
  /** Minimum score threshold for this message to appear */
  minScore: number;
  /** Maximum score threshold for this message to appear */
  maxScore: number;
}
