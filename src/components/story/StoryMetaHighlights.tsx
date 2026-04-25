/**
 * StoryMetaHighlights
 * --------------------
 * The horizontal "fact bar" rendered right under each story's hero title.
 * It has two parts:
 *   1. A small, label/value metadata grid on the left
 *      (Storyteller, Author, Published, Location).
 *   2. Up to two large "highlight" stats on the right that summarize the
 *      most important takeaways from the story (e.g. ">100 merged PRs/day").
 *
 * Mobile-first layout (built defensively to never overflow horizontally):
 *   - On phones, everything stacks vertically with thin divider lines.
 *   - On tablets (>= sm), the highlights sit side by side under the meta.
 *   - On desktops (>= lg), the meta and highlights sit in two columns
 *     separated by a vertical rule, mirroring the reference design.
 *
 * The author defaults to "Keerthivasan" and the location defaults to
 * "United States" so individual story pages only need to pass the parts
 * that change.
 */

type Highlight = {
  value: string;
  label: string;
};

type Props = {
  storyteller: string;
  date: string;
  location?: string;
  highlights: Highlight[];
};

export function StoryMetaHighlights({
  storyteller,
  date,
  location = "United States",
  highlights,
}: Props) {
  return (
    <div className="not-prose w-full max-w-full border-y border-white/10 my-8 sm:my-12 lg:my-14">
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:divide-x lg:divide-white/10 py-7 sm:py-10 lg:py-11">
        <div className="w-full min-w-0 lg:w-[38%] lg:shrink-0 lg:pr-10 xl:pr-12">
          <MetaGrid
            storyteller={storyteller}
            date={date}
            location={location}
          />
        </div>

        <div className="w-full min-w-0 mt-7 pt-7 border-t border-white/10 lg:mt-0 lg:pt-0 lg:border-t-0 lg:flex-1 lg:pl-10 xl:pl-12">
          <HighlightsGrid highlights={highlights} />
        </div>
      </div>
    </div>
  );
}

function MetaGrid({
  storyteller,
  date,
  location,
}: {
  storyteller: string;
  date: string;
  location: string;
}) {
  const items: Array<[string, string]> = [
    ["Storyteller", storyteller],
    ["Author", "Keerthivasan"],
    ["Published", date],
    ["Location", location],
  ];

  return (
    <dl className="w-full grid grid-cols-[5.25rem_minmax(0,1fr)] sm:grid-cols-[6.5rem_minmax(0,1fr)] gap-y-3 sm:gap-y-3.5 gap-x-3 sm:gap-x-6">
      {items.map(([label, value]) => (
        <div key={label} className="contents">
          <dt className="text-white/35 font-mono uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[10px] sm:text-[11px] pt-[3px] min-w-0 break-words">
            {label}
          </dt>
          <dd className="text-white/90 text-[13px] sm:text-[15px] font-medium min-w-0 break-words">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function HighlightsGrid({ highlights }: { highlights: Highlight[] }) {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:divide-x sm:divide-white/10">
      {highlights.map((h, i) => (
        <div
          key={i}
          className={[
            "w-full min-w-0 sm:flex-1",
            i > 0
              ? "mt-6 pt-6 border-t border-white/10 sm:mt-0 sm:pt-0 sm:border-t-0 sm:pl-5 lg:pl-8"
              : "sm:pr-5 lg:pr-8",
          ].join(" ")}
        >
          <div className="text-[20px] sm:text-[26px] lg:text-[32px] font-display font-medium text-white leading-[1.18] tracking-[-0.02em] mb-2.5 sm:mb-4 break-words">
            {h.value}
          </div>
          <p className="text-white/55 text-[13.5px] sm:text-[15px] lg:text-base leading-relaxed font-sans break-words">
            {h.label}
          </p>
        </div>
      ))}
    </div>
  );
}
