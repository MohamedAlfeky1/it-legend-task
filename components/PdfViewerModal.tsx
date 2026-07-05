"use client";

import { useEffect } from "react";
import { CloseIcon } from "@/components/common/Icons";

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

export function PdfViewerModal({
  isOpen,
  onClose,
  pdfUrl,
}: PdfViewerModalProps) {
  // Prevent background scrolling when modal is open
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

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Header bar */}
      <div className="h-14 bg-slate-900 flex items-center justify-between px-4 text-white shadow-md">
        <span className="font-semibold text-sm truncate">Course Overview</span>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer text-gray-400 hover:text-white"
        >
          <CloseIcon />
        </button>
      </div>

      {/* PDF Frame */}
      <div className="flex-1 w-full bg-slate-800 overflow-hidden">
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0`}
          className="w-full h-full border-none"
          title="Course Overview PDF"
        />
      </div>
    </div>
  );
}
