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
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-50/95 backdrop-blur-md">
      {/* ── Top bar ─────────────────────────────────────────── */}
      <div className="relative flex items-center justify-center px-4 pt-5 pb-2">
        <button
          onClick={onClose}
          className="absolute left-4 w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors cursor-pointer"
        >
          <FiArrowLeft className="w-5 h-5" />
        </button>
        <div 
          className="text-center"
          style={{
            fontFamily: "'GE SS Two', 'Noto Sans Arabic', sans-serif",
            fontWeight: 300,
            fontSize: "15px",
            lineHeight: "175%",
            textAlign: "center"
          }}
        >
          <p className="text-gray-500">
            Starting SEO as your Home
          </p>
          <h2 className="text-[#1a1a4e] font-bold">
            Leaderboard
          </h2>
        </div>
      </div>

      {/* ── Motivational message (Arabic RTL) ────────────────── */}
      <div 
        className="mx-auto mt-4 bg-[#e8ecf4] px-4 flex items-center justify-between gap-3"
        style={{
          width: "366px",
          height: "95px",
          borderRadius: "5px",
          opacity: 1
        }}
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
            textAlign: "right"
          }}
        >
          {message.text}
        </p>
        <span className="text-4xl shrink-0 select-none filter drop-shadow-sm animate-pulse-subtle">
          {messageStyle.icon}
        </span>
      </div>

      {/* ── Student cards list ───────────────────────────────── */}
      <div className="flex-1 overflow-y-auto px-4 pt-5 pb-8 space-y-3">
        {LEADERBOARD_STUDENTS.map((student, index) => {
          const rank = index + 1;
          const isCurrentUser = student.name === CURRENT_STUDENT_NAME;
          const progress = Math.round(
            (student.completedLessons / student.totalLessons) * 100,
          );

          return (
            <div
              key={student.name}
              className={`rounded-2xl bg-white px-4 py-4 shadow-sm border transition-all ${
                isCurrentUser
                  ? "border-blue-300 ring-2 ring-blue-100"
                  : "border-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Rank */}
                <div className="w-8 text-center shrink-0">
                  {rank <= 3 ? (
                    <span className="text-xl">{getRankDisplay(rank)}</span>
                  ) : (
                    <span className="text-sm font-bold text-gray-400">
                      #{rank}
                    </span>
                  )}
                </div>

                {/* Avatar */}
                <div
                  className={`w-11 h-11 rounded-full shrink-0 overflow-hidden border-2 ${
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
                    className={`text-sm font-bold truncate ${
                      isCurrentUser ? "text-blue-900" : "text-gray-900"
                    }`}
                  >
                    {student.name}
                    {isCurrentUser && (
                      <span className="ml-1.5 text-[10px] font-bold text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded-full">
                        YOU
                      </span>
                    )}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {student.level} · {student.completedLessons}/
                    {student.totalLessons} lessons
                  </p>
                </div>

                {/* Score */}
                <div className="text-right shrink-0">
                  <p className="text-lg font-extrabold text-[#1a1a4e]">
                    {student.score}
                  </p>
                  <p className="text-[10px] text-gray-400 -mt-0.5">pts</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-3 flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      isCurrentUser
                        ? "bg-gradient-to-r from-blue-400 to-blue-600"
                        : "bg-gradient-to-r from-gray-300 to-gray-400"
                    }`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-[10px] text-gray-400 tabular-nums">
                  {progress}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
