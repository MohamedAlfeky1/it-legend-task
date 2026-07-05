import type { Week } from "@/types";
import { FileIcon, LockIcon } from "@/components/common/Icons";

export function WeekCard({
  week,
  onExamClick,
}: {
  week: Week;
  onExamClick?: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      {/* Header */}
      <div className="px-5 pt-4 pb-3">
        <h4 className="text-base font-semibold text-gray-900">{week.title}</h4>
        <p className="text-sm text-gray-500 leading-relaxed mt-0.5 ">
          {week.description}
        </p>
      </div>

      {/* Lessons */}
      <ul className="divide-y divide-gray-100">
        {week.lessons.map((lesson, i) => {
          const hasPdf = !!lesson.pdfUrl;
          const hasExam = !!lesson.hasExam;
          const isClickable = hasPdf || hasExam;

          const handleClick = () => {
            if (hasPdf) window.open(lesson.pdfUrl, "_blank");
            if (hasExam) onExamClick?.();
          };

          return (
            <li
              key={i}
              onClick={isClickable ? handleClick : undefined}
              className={`px-5 py-2.5 flex items-start justify-between gap-2 transition-colors ${
                hasPdf
                  ? "hover:bg-emerald-50/50 cursor-pointer"
                  : hasExam
                    ? "hover:bg-blue-50/50 cursor-pointer"
                    : "hover:bg-gray-50"
              }`}
            >
              <div className="flex items-start gap-2 min-w-0">
                <FileIcon />
                <div className="min-w-0">
                  <span
                    className={`text-sm leading-tight ${
                      hasPdf
                        ? "text-emerald-700 font-semibold underline decoration-dotted"
                        : hasExam
                          ? "text-blue-600 font-semibold underline decoration-dotted"
                          : "text-gray-700"
                    }`}
                  >
                    {lesson.title}
                  </span>
                  {lesson.tags && (
                    <div className="flex flex-wrap gap-2 mt-0.5">
                      {lesson.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className={`text-[10px] font-semibold ${tag.color}`}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {hasPdf ? (
                <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-xs shrink-0">
                  VIEW PDF
                </span>
              ) : hasExam ? (
                <span className="text-[10px] font-semibold bg-blue-100 text-blue-600 px-2 py-0.5 rounded-xs shrink-0">
                  TAKE EXAM
                </span>
              ) : (
                <LockIcon />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
