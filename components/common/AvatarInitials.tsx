export function AvatarInitials({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <div
      className={`rounded-full bg-gradient-to-br from-emerald-100 via-sky-100 to-rose-100 text-slate-700 border border-white/80 shrink-0 flex items-center justify-center overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <span className="text-xs font-semibold tracking-normal">
        {initials || "S"}
      </span>
    </div>
  );
}
