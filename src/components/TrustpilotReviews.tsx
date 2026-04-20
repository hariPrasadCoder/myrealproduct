import { useState, useRef, useEffect } from 'react';

const TP_REVIEWS = [
  { name: "Soorya Rengan", stars: 5, title: "A Truly Hands-On AI Experience", body: "Built \"ClearInsurance,\" an AI tool for insurance policy summarization. The execution-focused methodology — problem → solution → MVP → iteration — and mentorship helped refine my technical and product-thinking skills. Post-cohort support continues.", highlights: ["problem → solution → MVP → iteration", "Post-cohort support continues"] },
  { name: "Denise Miguel", stars: 5, title: "Worth the Investment — Highly Recommend", body: "Program emphasizes building over passive learning. Hari effectively narrows focus to essentials and guides real product creation. Participants built MVPs while learning user needs assessment, problem definition, and customer-centric solutions.", highlights: ["building over passive learning", "built MVPs", "customer-centric solutions"] },
  { name: "Aprotiim Joardar", stars: 5, title: "Great platform to build and ship AI products", body: "Excellent for hands-on experience building actual AI products beyond notebook projects. You build complete end-to-end websites with AI features and deploy to production. Highly recommended for those learning AI or entering the industry.", highlights: ["actual AI products beyond notebook projects", "deploy to production"] },
  { name: "Rajesh Kartha", stars: 5, title: "A Comprehensive Guide to AI Product Development", body: "The course effectively breaks down the product development lifecycle into understandable phases. Hari's office hours and supplementary sessions were transformative. Introduced industry's cutting-edge tools. Highly recommended.", highlights: ["transformative", "cutting-edge tools"] },
  { name: "Joan Xavier", stars: 5, title: "My first MVP — expiry genie in MyrealProduct", body: "Attended May 2025 cohort with minimal Python skills. Built \"expirygenie,\" a food inventory app tracking expiry dates. Hari emphasised identifying problems before solutions. Gained AI skills and confidence building real-world applications.", highlights: ["minimal Python skills", "confidence building real-world applications"] },
  { name: "Adhira Ammu", stars: 5, title: "Great learning Experience", body: "As an AI beginner, the course delivered comprehensive instruction. Within four weeks, you build actual products rather than studying theory alone. You finish with both knowledge and tangible portfolio pieces.", highlights: ["actual products rather than studying theory alone", "tangible portfolio pieces"] },
  { name: "Rashmi Sankepally", stars: 4, title: "Fast tracking AI skill dev", body: "Hari provided extensive availability and personally answered questions throughout. Complex AI engineering concepts were simplified into manageable segments. Great for anyone wanting to accelerate their AI product skills.", highlights: ["Complex AI engineering concepts were simplified", "accelerate their AI product skills"] },
  { name: "Yash Mishra", stars: 5, title: "Clarity on AI mechanics and practical product building", body: "Initially possessed minimal AI understanding. Connecting with Hari gave me clarity on AI mechanics and practical product building. Developed discipline, time management, and collaborated with excellent mentors and peers.", highlights: ["clarity on AI mechanics and practical product building", "excellent mentors and peers"] },
  { name: "Ritesh Vesalapu", stars: 5, title: "Learned systemic thinking and incremental development", body: "Positive experience working with Hari and team during early cohorts. Learned systemic thinking and incremental development approaches. Recommended for beginners or those wanting to actualize ideas.", highlights: ["systemic thinking and incremental development", "actualize ideas"] },
  { name: "Balaji", stars: 5, title: "Great experience!", body: "Started with no prior coding experience but gained confidence building products independently. The hands-on approach facilitated using AI for coding and customizing applications and websites. Instructor Hari remains approachable and available.", highlights: ["no prior coding experience", "confidence building products independently"] },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="w-5 h-5 flex items-center justify-center" style={{ backgroundColor: i < count ? '#00B67A' : '#DCDCE6' }}>
          <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

function highlightText(body: string, highlights: string[]) {
  if (!highlights.length) return <>{body}</>;
  const pattern = new RegExp(`(${highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  return (
    <>
      {body.split(pattern).map((part, i) =>
        highlights.some(h => h.toLowerCase() === part.toLowerCase())
          ? <mark key={i} className="bg-transparent text-white font-medium not-italic">{part}</mark>
          : part
      )}
    </>
  );
}

export default function TrustpilotReviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' });
  };

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState);
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <div className="border border-white/10 bg-[#111118] p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <svg viewBox="0 0 126 34" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.5 12.8h-10.7L17.6 3 14.4 12.8H3.7l8.9 6.4-3.4 10.4 8.4-6.1 8.4 6.1-3.4-10.4 8.9-6.4z" fill="#00B67A"/>
            <path d="M22.6 21.5l-.8-2.3-4.2 3 5-0.7z" fill="#005128"/>
            <text x="38" y="24" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="white">Trustpilot</text>
          </svg>
          <div className="flex items-center gap-2">
            <Stars count={5} />
            <span className="text-white/60 text-sm font-mono">4.3</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => scroll('left')} disabled={!canScrollLeft} className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors disabled:opacity-20 disabled:cursor-not-allowed">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button onClick={() => scroll('right')} disabled={!canScrollRight} className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors disabled:opacity-20 disabled:cursor-not-allowed">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div ref={trackRef} className="flex gap-4 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {TP_REVIEWS.map((r, i) => (
          <a key={i} href="https://www.trustpilot.com/review/myrealproduct.com" target="_blank" rel="noopener noreferrer"
            className="flex-shrink-0 w-72 bg-[#1A1A28] border border-white/5 p-5 flex flex-col gap-3 hover:border-[#00B67A]/30 transition-colors cursor-pointer no-underline"
          >
            <Stars count={r.stars} />
            <p className="text-white font-medium text-sm leading-snug">{r.title}</p>
            <p className="text-white/50 text-xs leading-relaxed flex-1 line-clamp-4">{highlightText(r.body, r.highlights)}</p>
            <p className="text-white/30 text-xs font-mono uppercase tracking-wider">{r.name}</p>
          </a>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-white/30 text-xs font-mono">Verified reviews from Trustpilot</span>
        <a href="https://www.trustpilot.com/review/myrealproduct.com" target="_blank" rel="noopener noreferrer" className="text-[#00B67A] text-xs font-mono hover:text-[#00D68A] transition-colors">
          See all reviews →
        </a>
      </div>
    </div>
  );
}
