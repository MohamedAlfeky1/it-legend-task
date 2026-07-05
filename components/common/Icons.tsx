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

export const ClockIcon = () => (
  <FiClock className="w-4 h-4 text-emerald-500 shrink-0" />
);
export const BookIcon = () => (
  <FiBookOpen className="w-4 h-4 text-emerald-500 shrink-0" />
);
export const UsersIcon = () => (
  <FiUsers className="w-4 h-4 text-emerald-500 shrink-0" />
);
export const GlobeIcon = () => (
  <FiGlobe className="w-4 h-4 text-emerald-500 shrink-0" />
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
