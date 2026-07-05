"use client";

import { useRef, useState } from "react";
import { FiAward } from "react-icons/fi";
import {
  CurriculumIcon,
  CommentsIcon,
  QuestionIcon,
} from "@/components/common/Icons";

export function ShortcutLinks({
  onAskQuestion,
  onLeaderboard,
}: {
  onAskQuestion: () => void;
  onLeaderboard: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const handleSmoothScroll = (targetId: string) => {
    if (hasMoved) return;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCommentsScroll = () => {
    const targetId = window.matchMedia("(min-width: 1024px)").matches
      ? "comments-section-desktop"
      : "comments-section-mobile";
    handleSmoothScroll(targetId);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDown(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
    setHasMoved(false);
  };

  const onMouseLeave = () => {
    setIsDown(false);
  };

  const onMouseUp = () => {
    setIsDown(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const el = scrollRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasMoved(true);
    }
    el.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className={`flex items-center gap-3 mt-5 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 whitespace-nowrap select-none cursor-grab active:cursor-grabbing`}
    >
      {/* Curriculum */}
      <button
        onClick={() => handleSmoothScroll("curriculum-section")}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-600 font-medium hover:border-emerald-400 hover:text-emerald-600 transition-colors cursor-pointer shrink-0 pointer-events-auto"
      >
        <CurriculumIcon />
        Curriculum
      </button>

      {/* Comments */}
      <button
        onClick={handleCommentsScroll}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-600 font-medium hover:border-emerald-400 hover:text-emerald-600 transition-colors cursor-pointer shrink-0 pointer-events-auto"
      >
        <CommentsIcon />
        Comments
      </button>

      {/* Ask a Question */}
      <button
        onClick={() => {
          if (!hasMoved) onAskQuestion();
        }}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-600 font-medium hover:border-rose-400 hover:text-rose-500 transition-colors cursor-pointer shrink-0 pointer-events-auto"
      >
        <QuestionIcon />
        Ask a Question
      </button>

      {/* Leaderboard */}
      <button
        onClick={() => {
          if (!hasMoved) onLeaderboard();
        }}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm text-gray-600 font-medium hover:border-amber-400 hover:text-amber-600 transition-colors cursor-pointer shrink-0 pointer-events-auto"
      >
        <FiAward className="w-5 h-5" />
        Leaderboard
      </button>
    </div>
  );
}
