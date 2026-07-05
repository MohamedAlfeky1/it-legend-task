import type { Comment } from "@/types";

export function CommentCard({ comment }: { comment: Comment }) {
  return (
    <div className="flex gap-3">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.pravatar.cc/80?u=${comment.name}${comment.date}`}
          alt={comment.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <p className="text-sm font-semibold text-gray-900">{comment.name}</p>
        <p className="text-xs text-gray-400 mb-1">{comment.date}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{comment.text}</p>
      </div>
    </div>
  );
}
