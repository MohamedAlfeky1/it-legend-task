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
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8 lg:items-start">
        {/* 1. Path & Course Title - spans full width on desktop */}
        <div className="lg:col-span-3 flex flex-col gap-2">
          <div>
            <Breadcrumb />
          </div>
          <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight">
            Starting SEO as your Home
          </h1>
        </div>

        {/* Theater Mode Video Player (Desktop Only, spans 3 columns) */}
        {isTheaterMode && (
          <div className="hidden lg:block lg:col-span-3 w-full mb-2">
            <VideoPlayer
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              isTheaterMode={isTheaterMode}
              onToggleTheater={() => setIsTheaterMode(false)}
            />
          </div>
        )}

        {/* Left Column on Desktop (spans 2 cols), normal sequence on mobile */}
        <div className="lg:col-span-2 flex flex-col gap-6 w-full">
          {/* 3. Video Player (Sticky on mobile, relative on desktop) */}
          {!isTheaterMode ? (
            <div className="sticky top-0 z-30 lg:relative bg-gray-50 py-2 -mx-4 px-4 lg:mx-0 lg:px-0 lg:py-0 shadow-sm lg:shadow-none border-b lg:border-none border-gray-100">
              <VideoPlayer
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                isTheaterMode={isTheaterMode}
                onToggleTheater={() => setIsTheaterMode(true)}
              />
            </div>
          ) : (
            <div className="block lg:hidden sticky top-0 z-30 bg-gray-50 py-2 -mx-4 px-4 shadow-sm border-b border-gray-100">
              <VideoPlayer
                isPlaying={isPlaying && !isTheaterMode}
                setIsPlaying={setIsPlaying}
                isTheaterMode={false}
              />
            </div>
          )}

          {/* 4. Scroll Shortlinks */}
          <ShortcutLinks
            onAskQuestion={() => setIsModalOpen(true)}
            onLeaderboard={() => setIsLeaderboardOpen(true)}
          />

          {/* 5. Course Material */}
          <CourseMaterials />

          {/* 8. Comments Section on Desktop (directly under Course Materials) */}
          <div className="hidden lg:block mt-2">
            <CommentsSection />
          </div>
        </div>

        {/* Right Column on Desktop (spans 1 col), normal sequence on mobile */}
        <div className="lg:col-span-1 flex flex-col gap-6 w-full lg:pl-2">
          {/* 6. Progress Bar (Topics for This Course) */}
          <ProgressBar />

          {/* 7. Course Intro and Curriculum */}
          <div id="curriculum-section" className="space-y-4 scroll-mt-24">
            <h3 className="text-xl font-semibold text-gray-900">
              Course Curriculum
            </h3>
            {WEEKS.map((week, i) => (
              <WeekCard
                key={i}
                week={week}
                onExamClick={() => setIsExamOpen(true)}
              />
            ))}
          </div>
        </div>

        {/* 8. Comments Section on Mobile (at the very bottom after Curriculum) */}
        <div className="block lg:hidden w-full">
          <CommentsSection />
        </div>
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
      <ExamModal isOpen={isExamOpen} onClose={() => setIsExamOpen(false)} />
    </div>
  );
}
