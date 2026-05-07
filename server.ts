import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');
const BASE_URL = 'https://www.myrealproduct.com';

const STORIES = [
  { slug: 'aprotiim', title: '"I Thought Building an AI Product Was Impossible" — Aprotiim\'s Story', description: 'Read how Aprotiim moved past YouTube tutorials and finally launched his first end to end AI product.' },
  { slug: 'debisree', title: 'Why a Stanford Certified Data Scientist Joined the MRP Cohort Twice — Debisree\'s Story', description: 'Discover why Debisree, a Stanford-certified data scientist, joined the MRP cohort twice to master Agentic RAG and AI deployment.' },
  { slug: 'denise', title: '"I was drowning in AI tools. Here\'s how I finally figured it out." — Denise\'s Story', description: "Discover how Denise moved from the 'dashboard trap' to building powerful, end to end AI applications using Cursor, Python, and Streamlit." },
  { slug: 'digvijay', title: 'Beyond Localhost: How a Senior ML Engineer Finally Conquered AI Deployment — Digvijay\'s Story', description: 'Read how Digvijay went from getting stuck on localhost to confidently deploying an end to end AI product to the cloud.' },
  { slug: 'joan', title: "Escaping the YouTube Trap — Joan's Story", description: 'Discover how Joan built her first AI app and took her skills to the enterprise.' },
  { slug: 'padmapriya', title: "Bridging the Gap — Padmapriya's Story", description: 'Discover how Padmapriya bridged the gap between traditional education and building AI agents.' },
  { slug: 'praveena', title: "Escaping the Tutorial Trap — Praveena's Story", description: 'Discover how a busy Data Analyst broke her mental blocks to build AI.' },
  { slug: 'rajesh', title: "Why a 15-Year Citibank Veteran Joined the AI Cohort — Rajesh's Story", description: 'Discover how a 15-year backend veteran learned product building and AI deployment inside the MyRealProduct cohort.' },
  { slug: 'saahithi', title: "Escaping the AI News Cycle — Saahithi's Story", description: 'How a Data Science Grad Stopped Reading and Started Building.' },
];

const EPISODES = [
  {
    slug: 'soundarya-balasubramani',
    guestName: 'Soundarya Balasubramani',
    episodeTitle: 'Why Writing Online Can Change Your Career (and Your Life)',
    imagePath: '/images/podcast_guests/soundarya.jpeg',
    date: 'March 9',
    time: '2:00 – 3:00 PM ET',
  },
  {
    slug: 'karun-thankachan',
    guestName: 'Karun Thankachan',
    episodeTitle: 'Life of a Data Scientist in Big Tech',
    imagePath: '/images/podcast_guests/karun.png',
    date: 'March 11',
    time: '2:00 – 3:00 PM ET',
  },
  {
    slug: 'varun-negandhi',
    guestName: 'Varun Negandhi',
    episodeTitle: 'How Do Professionals Really Land Interviews at Google, Meta, and More?',
    imagePath: '/images/podcast_guests/varun.jpg',
    date: 'March 13',
    time: '2:00 – 3:00 PM ET',
  },
];

const BOT_UA = /bot|crawl|spider|slack|telegram|whatsapp|facebookexternalhit|linkedinbot|twitterbot|discordbot|preview/i;

function isBot(ua: string) {
  return BOT_UA.test(ua);
}

function injectMeta(html: string, title: string, description: string, image: string, url: string) {
  const absImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  const meta = `
    <title>${title}</title>
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${absImage}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${absImage}" />`;
  return html.replace('<head>', `<head>${meta}`);
}

function resolvePageMeta(pathname: string, html: string): string {
  if (pathname === '/resources/claude-code-101') {
    return injectMeta(
      html,
      'Claude Code 101 — Cheatsheet by Hari Prasad',
      'A practical Claude Code cheatsheet covering installation, plans, /init, CLAUDE.md, context management, plan mode, and more. By Hari Prasad of MyRealProduct.',
      '/og-preview.png',
      `${BASE_URL}/resources/claude-code-101`
    );
  }

  if (pathname === '/enterprise') {
    const enterpriseJsonLd = `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Happy Hour | Enterprise AI Training by MyRealProduct",
      "description": "A guided workshop sprint for business teams. We sit with your team, cover AI essentials together, then build a complete end-to-end AI solution for a real problem before anyone leaves. In person or virtual.",
      "provider": {
        "@type": "Organization",
        "name": "MyRealProduct",
        "url": "https://www.myrealproduct.com",
        "email": "contact@myrealproduct.com"
      },
      "areaServed": ["GB", "US", "Worldwide"],
      "audience": {
        "@type": "Audience",
        "audienceType": "Business teams in Marketing, Finance, Legal, HR, Operations, Customer Success"
      },
      "url": "https://www.myrealproduct.com/enterprise"
    }
    </script>`;
    let updated = injectMeta(
      html,
      'AI Happy Hour | Enterprise AI Training | MyRealProduct',
      'A guided workshop sprint for your team. We show up, teach the essentials, and build a real AI solution together, end to end, before anyone leaves. In person or virtual.',
      '/og-preview.png',
      `${BASE_URL}/enterprise`
    );
    updated = updated.replace('</head>', `${enterpriseJsonLd}\n  </head>`);
    return updated;
  }

  if (pathname === '/enterprise/hr') {
    const hrJsonLd = `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Happy Hour for HR Teams | MyRealProduct",
      "description": "A hands-on AI workshop sprint built specifically for HR teams. We sit with your team and build real AI tools for screening, JD writing, onboarding, and compliance together, in one session.",
      "provider": {
        "@type": "Organization",
        "name": "MyRealProduct",
        "url": "https://www.myrealproduct.com",
        "email": "contact@myrealproduct.com"
      },
      "areaServed": ["GB", "US", "Worldwide"],
      "audience": {
        "@type": "Audience",
        "audienceType": "HR teams, Talent Acquisition, People Operations, HR Directors, CHROs"
      },
      "url": "https://www.myrealproduct.com/enterprise/hr"
    }
    </script>`;
    let updated = injectMeta(
      html,
      'AI Happy Hour for HR Teams | MyRealProduct',
      'A hands-on AI workshop sprint for HR teams. We build CV screeners, JD writers, and onboarding tools together in one session. No prior AI experience needed.',
      '/og-preview.png',
      `${BASE_URL}/enterprise/hr`
    );
    updated = updated.replace('</head>', `${hrJsonLd}\n  </head>`);
    return updated;
  }

  if (pathname === '/story') {
    return injectMeta(
      html,
      'Success Stories — MyRealProduct',
      'Read real stories of how people learned to build AI products end to end, overcoming the overwhelm to build real business impact.',
      '/og-preview.png',
      `${BASE_URL}/story`
    );
  }

  const storyMatch = pathname.match(/^\/story\/([^/]+)$/);
  if (storyMatch) {
    const story = STORIES.find((s) => s.slug === storyMatch[1]);
    if (story) {
      return injectMeta(html, story.title, story.description, '/og-preview.png', `${BASE_URL}/story/${story.slug}`);
    }
  }

  if (pathname === '/community') {
    const communityJsonLd = `<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "${BASE_URL}/community",
      "name": "UFO - Until Full-Time Offer | Free Community by MyRealProduct",
      "description": "A free WhatsApp community for international students, immigrants, and professionals navigating the US tech job search without a safety net. Founded by Hari Prasad.",
      "url": "${BASE_URL}/community",
      "isPartOf": { "@id": "${BASE_URL}/#website" },
      "about": {
        "@type": "Organization",
        "name": "UFO Community",
        "alternateName": "Until Full-Time Offer",
        "description": "Free WhatsApp community for international students and immigrants in the US tech job market",
        "founder": { "@id": "${BASE_URL}/#founder" },
        "url": "${BASE_URL}/community",
        "audience": {
          "@type": "Audience",
          "audienceType": "International students, immigrants, and professionals navigating the US tech job search"
        }
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free WhatsApp community membership"
      }
    }
    </script>`;
    let updated = injectMeta(
      html,
      'UFO - Until Full-Time Offer | Free Community by MyRealProduct',
      'Find your people. Land your offer. A free community for international students, immigrants, and professionals navigating the US tech job search without a safety net.',
      '/og-community.png',
      `${BASE_URL}/community`
    );
    updated = updated.replace('</head>', `${communityJsonLd}\n  </head>`);
    return updated;
  }

  if (pathname === '/podcast') {
    return injectMeta(
      html,
      'The MRP Podcast — ReAlity Show',
      'Real careers. Real AI. Honest conversations with people navigating the shift. Hosted by Hari Prasad.',
      '/images/podcast-mic-alt.jpg',
      `${BASE_URL}/podcast`
    );
  }

  const episodeMatch = pathname.match(/^\/podcast\/([^/]+)$/);
  if (episodeMatch) {
    const ep = EPISODES.find((e) => e.slug === episodeMatch[1]);
    if (ep) {
      return injectMeta(
        html,
        `${ep.episodeTitle} — MRP ReAlity Show`,
        `${ep.guestName} on the MRP Podcast. Live on ${ep.date} at ${ep.time}.`,
        ep.imagePath,
        `${BASE_URL}/podcast/${ep.slug}`
      );
    }
  }

  return html;
}

const app = express();
const indexHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

app.use(express.static(DIST, { index: false }));

app.get('*', (req, res) => {
  const ua = req.headers['user-agent'] ?? '';
  const html = isBot(ua) ? resolvePageMeta(req.path, indexHtml) : indexHtml;
  res.setHeader('Content-Type', 'text/html');
  res.send(html);
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
