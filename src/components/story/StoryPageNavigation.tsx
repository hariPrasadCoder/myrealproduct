import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const STORY_ORDER = [
  "denise",
  "digvijay",
  "rajesh",
  "debisree",
  "aprotiim",
  "joan",
  "padmapriya",
  "praveena",
  "saahithi",
] as const;

type StorySlug = (typeof STORY_ORDER)[number];

function getNextStoryHref(currentStory: StorySlug): string {
  const currentIndex = STORY_ORDER.indexOf(currentStory);
  const nextIndex = (currentIndex + 1) % STORY_ORDER.length;
  return `/story/${STORY_ORDER[nextIndex]}`;
}

const sharedButtonClass =
  "inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3 py-2 sm:px-4 sm:py-2.5 text-[10px] sm:text-xs font-mono uppercase tracking-[0.14em] sm:tracking-[0.18em] text-white/80 hover:text-white hover:border-brand-primary/60 hover:bg-brand-primary/10 transition-all whitespace-nowrap";

export function StoryTopNavigation({ currentStory }: { currentStory: StorySlug }) {
  const nextHref = getNextStoryHref(currentStory);

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="flex items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
        <Link to="/story" className={sharedButtonClass}>
          <ArrowLeft className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          <span className="sm:hidden">All stories</span>
          <span className="hidden sm:inline">Back to all stories</span>
        </Link>

        <Link to={nextHref} className={sharedButtonClass}>
          <span>Next story</span>
          <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </Link>
      </div>
    </div>
  );
}

export function StoryBottomNavigation({ currentStory }: { currentStory: StorySlug }) {
  const nextHref = getNextStoryHref(currentStory);

  return (
    <div className="not-prose flex justify-end mt-10">
      <Link to={nextHref} className={sharedButtonClass}>
        <span>Next story</span>
        <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
      </Link>
    </div>
  );
}
