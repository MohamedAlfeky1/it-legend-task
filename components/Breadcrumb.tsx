export function Breadcrumb() {
  return (
    <nav className="text-sm text-gray-500 mb-4 flex items-center gap-1.5">
      <a href="#" className="hover:text-emerald-600 transition-colors">
        Home
      </a>
      <span className="text-gray-400">&rsaquo;</span>
      <a href="#" className="hover:text-emerald-600 transition-colors">
        Courses
      </a>
      <span className="text-gray-400">&rsaquo;</span>
      <span className="font-semibold text-gray-800">Course Details</span>
    </nav>
  );
}
