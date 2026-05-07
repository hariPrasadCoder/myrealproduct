export type SessionTag = 'Workshop' | 'Keynote' | 'Training' | 'Hackathon' | 'Webinar' | 'Panel';

export interface Session {
  photos: string[];       // full URLs — GitHub raw CDN, hero shot first
  logo?: string;          // org logo URL
  sponsorLogo?: string;   // sponsor logo (e.g. Google)
  company: string;        // organisation or event host
  hostedBy?: string;      // "Hosted at X" or "Sponsored by Y"
  headline: string;       // short journalistic headline, max 8 words
  event: string;          // event/session title
  location: string;
  date: string;
  tag: SessionTag;
  attendees?: string;
  linkedinUrl?: string;
}

const BASE = 'https://raw.githubusercontent.com/hariPrasadCoder/myrealproduct/main/public/sessions';

const SESSIONS: Session[] = [
  {
    photos: [
      `${BASE}/unitar-2.jpeg`,
      `${BASE}/unitar-0.png`,
      `${BASE}/unitar-3.jpeg`,
      `${BASE}/unitar-1.jpeg`,
    ],
    logo: `/logos/unitar.png`,
    sponsorLogo: `${BASE}/Google%20logo%20only.png`,
    company: "UNITAR × Google",
    headline: "Trained 100+ professionals for the United Nations",
    event: "Building AI Agents with No-Code Tools",
    location: "Selangor, Malaysia",
    date: "Jan 2025",
    tag: "Workshop",
    linkedinUrl: "https://www.linkedin.com/posts/divisionforprosperity_pathwaytoprosperity-selangor-ai-activity-7424323690940637184-JvPi/",
  },
  {
    photos: [
      `${BASE}/aicamp-1.jpg`,
      `${BASE}/aicamp-2.jpg`,
      `${BASE}/aicamp-3.jpg`,
    ],
    logo: `${BASE}/Microsoft%20logo%20only.png`,
    sponsorLogo: `${BASE}/Google%20logo%20only.png`,
    company: "AICamp × Microsoft",
    hostedBy: "Sponsored by Google",
    headline: "Hands-on AI workshop at Microsoft NYC",
    event: "Making AI Content Sound Human",
    location: "New York City, USA",
    date: "2024",
    tag: "Workshop",
  },
  {
    photos: [
      `${BASE}/wimlds-4.jpeg`,
      `${BASE}/wimlds-5.jpeg`,
      `${BASE}/wimlds-1.jpeg`,
      `${BASE}/wimlds-2.jpeg`,
      `${BASE}/wimlds-3.jpeg`,
    ],
    logo: `${BASE}/WiMLDS%20logo.jpeg`,
    company: "Women in ML & Data Science",
    hostedBy: "NYC Chapter",
    headline: "Hands-on AI workshop for WiMLDS New York City",
    event: "RAG & Agentic AI",
    location: "New York City, USA",
    date: "2024",
    tag: "Workshop",
    linkedinUrl: "https://www.linkedin.com/posts/wimlds-nyc_sensei-hari-prasad-renganathan-crushed-it-activity-7376620177343356928-J9-8/",
  },
  {
    photos: [
      `${BASE}/browserstack-1.png`,
      `${BASE}/browserstack-2.png`,
    ],
    logo: `${BASE}/Browserstack%20logo.png`,
    company: "BrowserStack",
    headline: "Hands-on ML testing workshop at BrowserStack",
    event: "ML Model Testing & Validation",
    location: "New York City, USA",
    date: "2024",
    tag: "Workshop",
  },
];

export default SESSIONS;
