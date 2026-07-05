"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { WEEKS } from "@/data";
import { AskQuestionModal } from "@/components/AskQuestionModal";
import { ExamModal } from "@/components/ExamModal";
import { LeaderboardModal } from "@/components/LeaderboardModal";
import { ProgressBar } from "@/components/ProgressBar";
import { ShortcutLinks } from "@/components/ShortcutLinks";
import { VideoPlayer } from "@/components/VideoPlayer";
import { WeekCard } from "@/components/WeekCard";

export function CourseDetailsClient({
  courseMaterials,
  desktopComments,
  mobileComments,
}: {
  courseMaterials: ReactNode;
  desktopComments: ReactNode;
  mobileComments: ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isExamOpen, setIsExamOpen] = useState(false);
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
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

      <div className="lg:col-span-2 flex flex-col gap-6 w-full">
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

        <ShortcutLinks
          onAskQuestion={() => setIsModalOpen(true)}
          onLeaderboard={() => setIsLeaderboardOpen(true)}
        />

        {courseMaterials}
        {desktopComments}
      </div>

      <div className="lg:col-span-1 flex flex-col gap-6 w-full lg:pl-2">
        <ProgressBar />

        <div id="curriculum-section" className="space-y-4 scroll-mt-24">
          <h3 className="text-xl font-semibold text-gray-900">
            Course Curriculum
          </h3>
          {WEEKS.map((week, index) => (
            <WeekCard
              key={`${week.title}-${index}`}
              week={week}
              onExamClick={() => setIsExamOpen(true)}
            />
          ))}
        </div>
      </div>

      {mobileComments}

      <AskQuestionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
      />
      {isExamOpen && (
        <ExamModal isOpen={isExamOpen} onClose={() => setIsExamOpen(false)} />
      )}
    </>
  );
}
