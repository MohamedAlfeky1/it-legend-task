"use client";

import { useEffect, useState } from "react";
import { FiArrowLeft, FiClock } from "react-icons/fi";

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

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentQuestion(0);
      setSelectedAnswers({});
      setTimeLeft(572);
    }
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

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-gradient-to-br from-indigo-500 via-blue-500 to-blue-600">
      {/* ── Top bar ──────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 pt-5 pb-3">
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <FiArrowLeft className="w-6 h-6" />
        </button>

        {/* Timer pill */}
        <div className="flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full font-bold text-sm shadow-md">
          <FiClock className="w-4 h-4" />
          <span>
            {minutes}:{seconds}
          </span>
        </div>

        {/* Spacer for centering timer */}
        <div className="w-10" />
      </div>

      {/* ── Question navigation circles ──────────────────────── */}
      <div className="flex items-center justify-center gap-3 py-4">
        {EXAM_QUESTIONS.map((_, idx) => {
          const isActive = idx === currentQuestion;
          const isAnswered = idx in selectedAnswers;
          return (
            <button
              key={idx}
              onClick={() => setCurrentQuestion(idx)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all cursor-pointer ${
                isActive
                  ? "bg-white text-blue-600 border-white shadow-lg scale-110"
                  : isAnswered
                    ? "bg-blue-400/50 text-white border-blue-300"
                    : "bg-transparent text-white/70 border-white/40 hover:border-white/70"
              }`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* ── Question card ────────────────────────────────────── */}
      <div className="flex-1 px-4 pb-6 overflow-y-auto">
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          {/* Question number + text */}
          <div className="mb-6">
            <span className="text-lg font-bold text-gray-900">
              {question.id}.
            </span>
            <p className="text-base font-semibold text-gray-800 mt-1 leading-relaxed">
              {question.text}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, optIdx) => {
              const isSelected = selectedAnswers[currentQuestion] === optIdx;
              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectAnswer(optIdx)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-blue-500 border-blue-500 text-white shadow-md"
                      : "bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50/50"
                  }`}
                >
                  {/* Checkbox */}
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border-2 transition-colors ${
                      isSelected
                        ? "bg-white border-white"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    {isSelected && (
                      <svg
                        className="w-3 h-3 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>

                  <span className="text-sm font-medium">{option}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Navigation buttons ──────────────────────────────── */}
        <div className="flex items-center justify-between mt-6 gap-3">
          <button
            onClick={() =>
              setCurrentQuestion((prev) => Math.max(0, prev - 1))
            }
            disabled={currentQuestion === 0}
            className="flex-1 py-3 rounded-xl text-sm font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
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
              className="flex-1 py-3 rounded-xl text-sm font-bold text-blue-600 bg-white hover:bg-blue-50 transition-colors cursor-pointer shadow-md"
            >
              Next
            </button>
          ) : (
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-xl text-sm font-bold text-white bg-green-500 hover:bg-green-600 transition-colors cursor-pointer shadow-md"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
