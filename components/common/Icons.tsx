import {
  FiClock,
  FiBookOpen,
  FiUsers,
  FiGlobe,
  FiPlay,
  FiFileText,
  FiLock,
  FiList,
  FiMessageSquare,
  FiHelpCircle,
  FiX,
  FiArrowRight,
} from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";

/* ── SVG Icon components (using react-icons) ─────────────────── */

export const ClockIcon = ({ className = "text-gray-400" }: { className?: string }) => (
  <FiClock className={`w-4 h-4 shrink-0 ${className}`} />
);
export const BookIcon = ({ className = "text-gray-400" }: { className?: string }) => (
  <FiBookOpen className={`w-4 h-4 shrink-0 ${className}`} />
);
export const UsersIcon = ({ className = "text-gray-400" }: { className?: string }) => (
  <FiUsers className={`w-4 h-4 shrink-0 ${className}`} />
);
export const GlobeIcon = ({ className = "text-gray-400" }: { className?: string }) => (
  <FiGlobe className={`w-4 h-4 shrink-0 ${className}`} />
);
export const PlayIcon = () => (
  <FiPlay className="w-6 h-6 text-white ml-0.5 fill-current" />
);
export const FileIcon = () => (
  <FiFileText className="w-4 h-4 text-gray-500 shrink-0" />
);
export const LockIcon = () => (
  <FiLock className="w-4 h-4 text-gray-400 shrink-0" />
);

/* ── Shortcut SVG Icons ──────────────────────────────────────── */

export const CurriculumIcon = () => <FiList className="w-5 h-5" />;
export const CommentsIcon = () => <FiMessageSquare className="w-5 h-5" />;
export const QuestionIcon = () => <FiHelpCircle className="w-5 h-5" />;
export const CloseIcon = () => <FiX className="w-5 h-5" />;
export const ArrowRightIcon = () => <FiArrowRight className="w-4 h-4" />;
export const CaretDownIcon = () => (
  <FaCaretDown className="w-3 h-3 text-gray-400 -mt-0.5" />
);
