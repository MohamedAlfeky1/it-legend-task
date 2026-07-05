"use client";

import { useMemo } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { LEADERBOARD_STUDENTS, CURRENT_STUDENT_NAME } from "@/data";
import {
  getMotivationalMessage,
  getRankDisplay,
  getMessageStyle,
} from "@/lib/leaderboard-utils";

export function LeaderboardModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const currentStudent = LEADERBOARD_STUDENTS.find(
    (s) => s.name === CURRENT_STUDENT_NAME,
  );

  const message = useMemo(
    () => getMotivationalMessage(currentStudent?.score ?? 0),
    [currentStudent?.score],
  );

  const messageStyle = useMemo(
    () => getMessageStyle(message.tone),
    [message.tone]
  );

  if (!isOpen) return null;

  return (
    /* Backdrop: Fullscreen solid on mobile, dark blurred centered modal on desktop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50 md:bg-black/60 md:backdrop-blur-sm md:p-6"
      onClick={onClose}
    >
      {/* Modal Window: Fullscreen on mobile, rounded card on desktop */}
      <div
        className="flex flex-col w-full h-full bg-slate-50 md:h-auto md:max-h-[85vh] md:w-full md:max-w-2xl md:rounded-3xl md:shadow-2xl md:border md:border-white/20 overflow-hidden transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Top bar ─────────────────────────────────────────── */}
        <div className="relative flex items-center justify-center px-6 pt-5 pb-3 md:pt-6 md:pb-4 md:border-b md:border-gray-100 md:bg-white/60">
          <button
            onClick={onClose}
            className="absolute left-4 md:left-6 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 md:hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <FiArrowLeft className="w-5 h-5 md:w-5 md:h-5" />
          </button>
          <div className="text-center">
            <p className="text-gray-500 text-xs md:text-sm">
              Starting SEO as your Home
            </p>
            <h2 className="text-[#1a1a4e] font-semibold text-lg md:text-xl">
              Leaderboard
            </h2>
          </div>
        </div>

        {/* ── Motivational message (Arabic RTL) ────────────────── */}
        <div
          className="mx-auto mt-4 w-[366px] max-w-[92%] md:w-[92%] md:max-w-xl h-[95px] md:h-auto md:min-h-[95px] bg-[#e8ecf4] px-4 md:px-6 py-3 flex items-center justify-between gap-4 rounded-[5px] md:rounded-2xl shadow-sm border border-white/60 transition-all"
        >
          <p
            className="flex-1 text-[#1a1a4e]"
            dir="rtl"
            lang="ar"
            style={{
              fontFamily: "'GE SS Two', 'Noto Sans Arabic', sans-serif",
              fontWeight: 300,
              fontSize: "15px",
              lineHeight: "175%",
              textAlign: "right",
            }}
          >
            {message.text}
          </p>
          <span className="text-4xl md:text-5xl shrink-0 select-none filter drop-shadow-sm animate-pulse-subtle">
            {messageStyle.icon}
          </span>
        </div>

        {/* ── Student cards list ───────────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-4 md:px-6 pt-5 pb-8 space-y-3">
          {LEADERBOARD_STUDENTS.map((student, index) => {
            const rank = index + 1;
            const isCurrentUser = student.name === CURRENT_STUDENT_NAME;
            const progress = Math.round(
              (student.completedLessons / student.totalLessons) * 100,
            );

            return (
              <div
                key={student.name}
                className={`rounded-2xl bg-white px-4 md:px-5 py-4 shadow-sm border transition-all md:hover:shadow-md ${
                  isCurrentUser
                    ? "border-blue-300 ring-2 ring-blue-100 md:ring-4 md:ring-blue-50/80 bg-gradient-to-r from-blue-50/30 to-white"
                    : "border-gray-100 md:hover:border-gray-200"
                }`}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  {/* Rank */}
                  <div className="w-8 md:w-10 text-center shrink-0">
                    {rank <= 3 ? (
                      <span className="text-xl md:text-2xl">{getRankDisplay(rank)}</span>
                    ) : (
                      <span className="text-sm md:text-base font-semibold text-gray-400">
                        #{rank}
                      </span>
                    )}
                  </div>

                  {/* Avatar */}
                  <div
                    className={`w-11 h-11 md:w-12 md:h-12 rounded-full shrink-0 overflow-hidden border-2 ${
                      isCurrentUser ? "border-blue-400" : "border-gray-200"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.pravatar.cc/80?u=lb-${student.name}`}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name & details */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm md:text-base font-semibold truncate ${
                        isCurrentUser ? "text-blue-900" : "text-gray-900"
                      }`}
                    >
                      {student.name}
                      {isCurrentUser && (
                         <span className="ml-1.5 text-[10px] md:text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                          YOU
                        </span>
                      )}
                    </p>
                    <p className="text-[11px] md:text-xs text-gray-400 mt-0.5">
                      {student.level} · {student.completedLessons}/
                      {student.totalLessons} lessons
                    </p>
                  </div>

                  {/* Score */}
                  <div className="text-right shrink-0">
                    <p className="text-lg md:text-xl font-semibold text-[#1a1a4e]">
                      {student.score}
                    </p>
                    <p className="text-[10px] md:text-xs text-gray-400 -mt-0.5">pts</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-3 flex items-center gap-2 md:gap-3">
                  <div className="flex-1 h-1.5 md:h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        isCurrentUser
                          ? "bg-gradient-to-r from-blue-400 to-blue-600"
                          : "bg-gradient-to-r from-gray-300 to-gray-400"
                      }`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="text-[10px] md:text-xs text-gray-400 tabular-nums font-medium">
                    {progress}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
