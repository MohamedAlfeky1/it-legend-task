import type { Comment } from "@/types";
import { AvatarInitials } from "@/components/common/AvatarInitials";

export function CommentCard({ comment }: { comment: Comment }) {
  return (
    <div className="flex gap-3">
      <AvatarInitials name={comment.name} className="w-10 h-10" />
      <div>
        <p className="text-sm font-semibold text-gray-900">{comment.name}</p>
        <p className="text-xs text-gray-400 mb-1">{comment.date}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{comment.text}</p>
      </div>
    </div>
  );
}
