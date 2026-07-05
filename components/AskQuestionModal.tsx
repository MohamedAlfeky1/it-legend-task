"use client";

import { useEffect, useState } from "react";
import { COMMENTS, QUESTION_DRAFT_KEY } from "@/data";
import { CloseIcon, ArrowRightIcon } from "@/components/common/Icons";

export function AskQuestionModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [questionText, setQuestionText] = useState("");

  /* Restore draft from sessionStorage whenever modal opens */
  useEffect(() => {
    if (isOpen) {
      const saved = sessionStorage.getItem(QUESTION_DRAFT_KEY);
      setQuestionText(saved || "");
    }
  }, [isOpen]);

  /* Persist every keystroke to sessionStorage */
  const handleChange = (value: string) => {
    setQuestionText(value);
    sessionStorage.setItem(QUESTION_DRAFT_KEY, value);
  };

  /* Clear draft on successful submit */
  const handleSubmit = () => {
    sessionStorage.removeItem(QUESTION_DRAFT_KEY);
    setQuestionText("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Modal panel */}
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Ask a Question</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Existing questions (reuse Comment styling) */}
        <div className="px-6 py-5 space-y-5">
          {COMMENTS.map((c, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt={c.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{c.name}</p>
                <p className="text-xs text-gray-400 mb-1">{c.date}</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {c.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Write a question */}
        <div className="px-6 pb-6">
          <textarea
            placeholder="Write your question…"
            rows={3}
            value={questionText}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
          />
          <button
            onClick={handleSubmit}
            className="mt-3 px-6 py-3 bg-[#3cb49b] hover:bg-[#339b85] text-white text-sm font-semibold rounded-[5px] flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
          >
            Submit Question
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
