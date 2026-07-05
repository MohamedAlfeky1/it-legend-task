import type {
  Week,
  Comment,
  LeaderboardStudent,
  MotivationalMessage,
} from "@/types";

/* ── Course Curriculum ───────────────────────────────────────── */

export const WEEKS: Week[] = [
  {
    title: "Week 1-4",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    lessons: [
      { title: "Introduction" },
      {
        title: "Course Overview",
        pdfUrl: "/pdfs/Mohamed_Elfeky_Full_Stack_Developer_Resume.pdf",
        tags: [
          { label: "0 QUESTION", color: "text-emerald-600" },
          { label: "10 MINUTES", color: "text-rose-500" },
        ],
      },
      { title: "Course Exercise / Reference Files" },
      { title: "Code Editor Installation (Optional if you have one)" },
      { title: "Embedding PHP in HTML", hasExam: true },
    ],
  },
  {
    title: "Week 5-8",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    lessons: [
      { title: "Defining Functions" },
      { title: "Function Parameters" },
      {
        title: "Return Values From Functions",
        pdfUrl: "/pdfs/Mohamed_Elfeky_Full_Stack_Developer_Resume.pdf",
        tags: [
          { label: "2 QUESTION", color: "text-emerald-600" },
          { label: "15 MINUTES", color: "text-rose-500" },
        ],
      },
      { title: "Global Variable and Scope" },
      { title: "Newer Way of creating a Constant" },
      { title: "Constants" },
    ],
  },
  {
    title: "Week 5-8",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    lessons: [
      { title: "Defining Functions" },
      { title: "Function Parameters" },
      {
        title: "Return Values From Functions",
        tags: [
          { label: "2 QUESTION", color: "text-emerald-600" },
          { label: "15 MINUTES", color: "text-rose-500" },
        ],
      },
      { title: "Global Variable and Scope" },
      { title: "Newer Way of creating a Constant" },
      { title: "Constants" },
    ],
  },
];

/* ── Comments ────────────────────────────────────────────────── */

export const COMMENTS: Comment[] = [
  {
    name: "Student Name Goes Here",
    date: "Oct 10, 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Student Name Goes Here",
    date: "Oct 10, 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Student Name Goes Here",
    date: "Oct 10, 2021",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

/* ── Leaderboard ─────────────────────────────────────────────── */

export const LEADERBOARD_STUDENTS: LeaderboardStudent[] = [
  {
    name: "Ahmed Hassan",
    score: 98,
    level: "Advanced",
    completedLessons: 24,
    totalLessons: 24,
  },
  {
    name: "Sara Mohamed",
    score: 95,
    level: "Advanced",
    completedLessons: 23,
    totalLessons: 24,
  },
  {
    name: "Omar Khaled",
    score: 88,
    level: "Intermediate",
    completedLessons: 21,
    totalLessons: 24,
  },
  {
    name: "Nour El-Din",
    score: 82,
    level: "Intermediate",
    completedLessons: 19,
    totalLessons: 24,
  },
  {
    name: "Fatma Ali",
    score: 75,
    level: "Intermediate",
    completedLessons: 17,
    totalLessons: 24,
  },
  {
    name: "Youssef Tarek",
    score: 63,
    level: "Beginner",
    completedLessons: 15,
    totalLessons: 24,
  },
  {
    name: "Mona Saeed",
    score: 55,
    level: "Beginner",
    completedLessons: 12,
    totalLessons: 24,
  },
  {
    name: "Karim Adel",
    score: 42,
    level: "Beginner",
    completedLessons: 9,
    totalLessons: 24,
  },
  {
    name: "Hana Mostafa",
    score: 30,
    level: "Beginner",
    completedLessons: 6,
    totalLessons: 24,
  },
  {
    name: "Ali Ibrahim",
    score: 18,
    level: "Beginner",
    completedLessons: 3,
    totalLessons: 24,
  },
];

/* ── Current Student ─────────────────────────────────────────── */

export const CURRENT_STUDENT_NAME = "Youssef Tarek";

/* ── Eng. Ali Shaheen Motivational Messages ──────────────────── */

export const ALI_SHAHEEN_MESSAGES: MotivationalMessage[] = [
  // ── Celebratory (top performers: 90-100) ──
  {
    text: "ما شاء الله عليك! 🏆 أنت في الصدارة وده نتيجة تعبك وانضباطك. متوقفش هنا، كمّل وكون قدوة لغيرك! 💪🔥",
    tone: "celebratory",
    minScore: 90,
    maxScore: 100,
  },
  {
    text: "عاش يا بطل! 🔥 ده بالظبط اللي مستنيه من أشطر طلاب عندي. الانضباط والالتزام هما سر النجاح دايماً. استمر على نفس القوة! ⚡🏅",
    tone: "celebratory",
    minScore: 90,
    maxScore: 100,
  },
  // ── Highly motivational (good performers: 70-89) ──
  {
    text: "عظيم يا صديقي.. أداءك في الكورس ده أفضل من 60% من باقي الطلبة.. كمّل عايز أشوف اسمك في الليدر بورد هنا",
    tone: "motivational",
    minScore: 70,
    maxScore: 89,
  },
  {
    text: "خطواتك ثابتة ومستواك ممتاز! 👏 الفرق بينك وبين الصدارة بسيط جداً.. شد حيلك كمان شوية وهتكون في المركز الأول! 💪✨",
    tone: "motivational",
    minScore: 70,
    maxScore: 89,
  },
  // ── Tough love (mid performers: 40-69) ──
  {
    text: "أنت في منتصف الطريق وتقدر تقدم أداء أفضل بكتير من ده. ⚠️ سيب الأعذار وابدأ ركز في التطبيق، الليدر بورد مش بتكذب! 💢",
    tone: "tough-love",
    minScore: 40,
    maxScore: 69,
  },
  {
    text: "عظيم يا صديقي.. أداءك في الكورس ده أفضل من 60% من باقي الطلبة.. كمّل عايز أشوف اسمك في الليدر بورد هنا",
    tone: "tough-love",
    minScore: 40,
    maxScore: 69,
  },
  // ── Strict / urgent (low performers: 0-39) ──
  {
    text: "🚨 تنبيه مهم جداً! أنت متأخر في الدروس والوقت بيجري. لو مابدأتش دلوقتي حالا هتندم.. مفيش وقت للتسويف تاني! ⏰😠",
    tone: "tough-love",
    minScore: 0,
    maxScore: 39,
  },
  {
    text: "يا صديقي الكورس مش هيخلص لوحده! 😤 افتكر السبب اللي خلاك تشترك من الأول وقوم ابدأ شغل.. مستني أشوف اسمك بيتحرك في الليدر بورد الأسبوع ده! 👀📈",
    tone: "tough-love",
    minScore: 0,
    maxScore: 39,
  },
];

/* ── Session storage key for Ask a Question draft ────────────── */

export const QUESTION_DRAFT_KEY = "ask-question-draft";
