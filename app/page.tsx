"use client";

import { useState } from "react";
import { WEEKS } from "@/data";
import {
  Breadcrumb,
  VideoPlayer,
  ShortcutLinks,
  CourseMaterials,
  CommentsSection,
  ProgressBar,
  WeekCard,
  AskQuestionModal,
  LeaderboardModal,
  ExamModal,
} from "@/components";

/* ── Page ─────────────────────────────────────────────────────── */

export default function CourseDetailsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isExamOpen, setIsExamOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="w-full px-4 py-6 flex flex-col gap-6">
        {/* 1. Path */}
        <div>
          <Breadcrumb />
        </div>

        {/* 2. Course Title */}
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Starting SEO as your Home
        </h1>

        {/* 3. Video Player (Sticky) */}
        <div className="sticky top-0 z-30 bg-gray-50 py-2 -mx-4 px-4 shadow-sm border-b border-gray-100">
          <VideoPlayer />
        </div>

        {/* 4. Scroll Shortlinks */}
        <ShortcutLinks
          onAskQuestion={() => setIsModalOpen(true)}
          onLeaderboard={() => setIsLeaderboardOpen(true)}
        />

        {/* 5. Course Material */}
        <CourseMaterials />

        {/* 6. Progress Bar */}
        <ProgressBar />

        {/* 7. Course Intro and Curriculum */}
        <div id="curriculum-section" className="space-y-4 scroll-mt-24">
          <h3 className="text-xl font-bold text-gray-900">Course Curriculum</h3>
          {WEEKS.map((week, i) => (
            <WeekCard
              key={i}
              week={week}
              onExamClick={() => setIsExamOpen(true)}
            />
          ))}
        </div>

        {/* 8. Comments Section */}
        <CommentsSection />
      </div>

      {/* Ask a Question Modal */}
      <AskQuestionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Leaderboard Modal */}
      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
      />

      {/* Exam Modal */}
      <ExamModal
        isOpen={isExamOpen}
        onClose={() => setIsExamOpen(false)}
      />
    </div>
  );
}

