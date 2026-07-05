import { COMMENTS } from "@/data";
import { CommentCard } from "@/components/common/CommentCard";
import { ArrowRightIcon } from "@/components/common/Icons";

export function CommentsSection({ id = "comments-section" }: { id?: string }) {
  return (
    <section id={id} className="mt-10 scroll-mt-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-5">Comments</h2>

      <div className="space-y-6">
        {COMMENTS.map((c, i) => (
          <CommentCard key={i} comment={c} />
        ))}
      </div>

      {/* Write a comment */}
      <div className="mt-6">
        <textarea
          placeholder="Write a comment"
          rows={3}
          className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none"
        />
      </div>

      <button className="mt-4 px-6 py-3 bg-[#3cb49b] hover:bg-[#339b85] text-white text-sm font-semibold rounded-[5px] flex items-center gap-2 transition-colors cursor-pointer shadow-sm">
        Submit Review
        <ArrowRightIcon />
      </button>
    </section>
  );
}
