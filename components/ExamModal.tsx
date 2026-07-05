"use client";

import { useEffect, useState } from "react";
import { FiArrowLeft, FiClock, FiCheck, FiArrowRight } from "react-icons/fi";

/* ── Mock exam data ──────────────────────────────────────────── */

const EXAM_QUESTIONS = [
  {
    id: 1,
    text: "Among the following status of India, which one has the oldest rock formations in the country?",
    options: ["Asam", "Bahar", "Kamaltake", "Utter Pardesh"],
  },
  {
    id: 2,
    text: "Which PHP function is used to include the content of one PHP file into another?",
    options: ["import()", "include()", "require_once()", "fetch()"],
  },
  {
    id: 3,
    text: "What does PHP stand for?",
    options: [
      "Personal Home Page",
      "PHP: Hypertext Preprocessor",
      "Preprocessed Hypertext Page",
      "Programming Home Page",
    ],
  },
  {
    id: 4,
    text: "Which tag is used to embed PHP code inside HTML?",
    options: ["<script>", "<?php ?>", "<% %>", "<php>"],
  },
  {
    id: 5,
    text: "What is the correct way to end a PHP statement?",
    options: [".", ":", ";", "!"],
  },
];

const OPTION_LETTERS = ["A", "B", "C", "D"];

/* ── Component ───────────────────────────────────────────────── */

export function ExamModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [timeLeft, setTimeLeft] = useState(572); // 9:32 in seconds

  // Timer countdown
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const question = EXAM_QUESTIONS[currentQuestion];
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
    const seconds = (timeLeft % 60).toString().padStart(2, "0");

  const handleSelectAnswer = (optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: optionIndex,
    }));
  };

  const answeredCount = Object.keys(selectedAnswers).length;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700 overflow-y-auto">
      {/* ── Top bar ──────────────────────────────────────────── */}
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between px-4 md:px-8 pt-5 md:pt-8 pb-3">
        <button
          onClick={onClose}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer shadow-sm"
        >
          <FiArrowLeft className="w-6 h-6" />
        </button>

        {/* Timer pill */}
        <div className="flex items-center gap-2.5 bg-yellow-400 text-gray-900 px-5 md:px-6 py-2 rounded-full font-semibold text-sm md:text-base shadow-lg shadow-yellow-500/20 animate-pulse-subtle">
          <FiClock className="w-4 h-4 md:w-5 md:h-5 text-gray-900" />
          <span className="tabular-nums">
            {minutes}:{seconds}
          </span>
        </div>

        {/* Progress Counter badge */}
        <div className="hidden sm:flex items-center gap-1.5 bg-white/10 text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold border border-white/20">
          <span>{answeredCount}/{EXAM_QUESTIONS.length}</span>
          <span className="text-white/70">Answered</span>
        </div>
        <div className="sm:hidden w-10" />
      </div>

      {/* ── Question navigation circles ──────────────────────── */}
      <div className="w-full max-w-5xl mx-auto flex items-center justify-center gap-3 md:gap-4 py-4 md:py-6 px-4">
        {EXAM_QUESTIONS.map((_, idx) => {
          const isActive = idx === currentQuestion;
          const isAnswered = idx in selectedAnswers;
          return (
            <button
              key={idx}
              onClick={() => setCurrentQuestion(idx)}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-base font-semibold border-2 transition-all cursor-pointer ${
                isActive
                  ? "bg-white text-blue-600 border-white shadow-xl scale-110 ring-4 ring-white/30"
                  : isAnswered
                    ? "bg-blue-400/60 text-white border-blue-300 shadow-md"
                    : "bg-transparent text-white/70 border-white/40 hover:border-white/70 hover:bg-white/10"
              }`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* ── Question card wrapper (Centered on Desktop) ──────── */}
      <div className="flex-1 w-full max-w-3xl mx-auto px-4 md:px-6 pb-8 flex flex-col justify-between">
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20 transition-all">
          {/* Card Header info */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs md:text-sm font-semibold bg-blue-50 text-blue-600 border border-blue-100">
              Question {currentQuestion + 1} of {EXAM_QUESTIONS.length}
            </span>
            <span className={`text-xs md:text-sm font-semibold flex items-center gap-1 ${
              selectedAnswers[currentQuestion] !== undefined ? "text-emerald-600" : "text-gray-400"
            }`}>
              {selectedAnswers[currentQuestion] !== undefined ? (
                <>
                  <FiCheck className="w-4 h-4" />
                  Answered
                </>
              ) : (
                "Not answered yet"
              )}
            </span>
          </div>

          {/* Question text */}
          <div className="mb-6 md:mb-8">
            <p className="text-base md:text-xl font-semibold text-gray-900 leading-relaxed">
              <span className="text-blue-600 mr-2">{question.id}.</span>
              {question.text}
            </p>
          </div>

          {/* Enhanced Options */}
          <div className="space-y-3.5 md:space-y-4">
            {question.options.map((option, optIdx) => {
              const isSelected = selectedAnswers[currentQuestion] === optIdx;
              const letter = OPTION_LETTERS[optIdx] || `${optIdx + 1}`;
              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectAnswer(optIdx)}
                  className={`group w-full flex items-center gap-3.5 md:gap-4 px-4 md:px-5 py-3.5 md:py-4 rounded-xl md:rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-600 text-white shadow-lg shadow-blue-500/25 scale-[1.01]"
                      : "bg-white border-gray-200 text-gray-700 hover:border-blue-400 hover:bg-blue-50/40 hover:shadow-md hover:-translate-y-0.5"
                  }`}
                >
                  {/* Option Badge (A, B, C, D or checkmark) */}
                  <div
                    className={`w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center shrink-0 border-2 font-semibold text-xs md:text-sm transition-all ${
                      isSelected
                        ? "bg-white border-white text-blue-600 shadow scale-110"
                        : "border-gray-300 bg-gray-50 text-gray-500 group-hover:border-blue-500 group-hover:bg-blue-100 group-hover:text-blue-600"
                    }`}
                  >
                    {isSelected ? (
                      <FiCheck className="w-4 h-4 md:w-5 md:h-5 stroke-[3]" />
                    ) : (
                      letter
                    )}
                  </div>

                  <span className="text-sm md:text-base font-semibold flex-1 leading-snug">
                    {option}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Navigation buttons ──────────────────────────────── */}
        <div className="flex items-center justify-between mt-6 md:mt-8 gap-3 md:gap-4">
          <button
            onClick={() =>
              setCurrentQuestion((prev) => Math.max(0, prev - 1))
            }
            disabled={currentQuestion === 0}
            className="px-6 md:px-8 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          {currentQuestion < EXAM_QUESTIONS.length - 1 ? (
            <button
              onClick={() =>
                setCurrentQuestion((prev) =>
                  Math.min(EXAM_QUESTIONS.length - 1, prev + 1)
                )
              }
              className="flex-1 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold text-blue-600 bg-white hover:bg-blue-50 transition-all cursor-pointer shadow-lg shadow-black/10 flex items-center justify-center gap-2"
            >
              Next Question
              <FiArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="flex-1 py-3.5 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold text-white bg-emerald-500 hover:bg-emerald-600 transition-all cursor-pointer shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2"
            >
              Submit Exam
              <FiCheck className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
