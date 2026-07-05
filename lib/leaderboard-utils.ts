import type { MotivationalMessage } from "@/types";
import { ALI_SHAHEEN_MESSAGES } from "@/data";

/**
 * Selects the appropriate motivational message based on the student's score.
 * Filters messages by score range and picks one deterministically (based on score).
 */
export function getMotivationalMessage(score: number): MotivationalMessage {
  const eligible = ALI_SHAHEEN_MESSAGES.filter(
    (m) => score >= m.minScore && score <= m.maxScore,
  );
  // Use score as a simple deterministic index so the same student always sees the same message
  return eligible[score % eligible.length] || ALI_SHAHEEN_MESSAGES[0];
}

/** Returns the medal emoji for top-3 ranks, or the rank number */
export function getRankDisplay(rank: number): string {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return `#${rank}`;
}

/** Returns a tone-based color configuration for the message card */
export function getMessageStyle(tone: MotivationalMessage["tone"]): {
  border: string;
  bg: string;
  icon: string;
  label: string;
  labelColor: string;
} {
  switch (tone) {
    case "celebratory":
      return {
        border: "border-emerald-200",
        bg: "bg-emerald-50",
        icon: "🏆",
        label: "Top Performer!",
        labelColor: "text-emerald-700",
      };
    case "motivational":
      return {
        border: "border-blue-200",
        bg: "bg-blue-50",
        icon: "💪",
        label: "Keep Going!",
        labelColor: "text-blue-700",
      };
    case "tough-love":
      return {
        border: "border-amber-200",
        bg: "bg-amber-50",
        icon: "🔥",
        label: "Wake Up Call!",
        labelColor: "text-amber-700",
      };
  }
}
