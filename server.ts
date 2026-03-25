import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, 'dist');
const BASE_URL = 'https://www.myrealproduct.com';

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
  return html.replace('</head>', `${meta}\n  </head>`);
}

function resolvePageMeta(pathname: string, html: string): string {
  if (pathname === '/enterprise') {
    return injectMeta(
      html,
      'Enterprise AI Training — MyRealProduct',
      'Give your team an unfair advantage with AI. Personalised training built around your workflows, with ongoing monthly support. London, UK + Virtual Worldwide.',
      '/og-preview.png',
      `${BASE_URL}/enterprise`
    );
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
