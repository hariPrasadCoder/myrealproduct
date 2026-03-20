export interface PodcastEpisode {
  slug: string;
  guestName: string;
  role: string;
  episodeTitle: string;
  date: string;
  day: string;
  time: string;
  imagePath: string;
  lumaUrl: string;
  linkedinUrl: string;
  youtubeUrl?: string;
}

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    slug: 'karun-thankachan',
    guestName: 'Karun Thankachan',
    role: 'Senior Data Scientist, Walmart | Ex-Amazon | CMU',
    episodeTitle: 'Life of a Data Scientist in Big Tech',
    date: 'March 11',
    day: 'Wed',
    time: '2:00 – 3:00 PM ET',
    imagePath: '/images/podcast_guests/karun.png',
    lumaUrl: 'https://luma.com/niw5r74j',
    linkedinUrl: 'https://www.linkedin.com/in/karunt/',
    youtubeUrl: 'https://youtube.com/live/4OPAX4eZE_w?feature=share',
  },
  {
    slug: 'varun-negandhi',
    guestName: 'Varun Negandhi',
    role: 'Founder, Beyond Grad | Career Coach',
    episodeTitle: 'How Do Professionals Really Land Interviews at Google, Meta, and More?',
    date: 'March 13',
    day: 'Fri',
    time: '2:00 – 3:00 PM ET',
    imagePath: '/images/podcast_guests/varun.jpg',
    lumaUrl: 'https://luma.com/qxwcf23q',
    linkedinUrl: 'https://www.linkedin.com/in/vnegandhi/',
    youtubeUrl: 'https://youtube.com/live/j-p9qXMXxrc?feature=share',
  },
  {
    slug: 'sowmya-podila',
    guestName: 'Sowmya Podila',
    role: 'Applied Gen AI @Target | Ex-AWS, Ex-Gartner | Gen AI Speaker & Host',
    episodeTitle: 'How to Land an AI Role at a Fortune 500',
    date: 'March 16',
    day: 'Mon',
    time: '2:00 – 3:00 PM ET',
    imagePath: '/images/podcast_guests/sowmya.jpeg',
    lumaUrl: 'https://luma.com/g8veuf49',
    linkedinUrl: 'https://www.linkedin.com/in/sowmyapodila/',
    youtubeUrl: 'https://youtube.com/live/k5ZxHZY6GKw?feature=share',
  },
  {
    slug: 'soundarya-balasubramani',
    guestName: 'Soundarya Balasubramani',
    role: '3× Author | Ex-Salesforce PM | Founder, Ex-Unshackled',
    episodeTitle: 'Why Writing Online Can Change Your Career (and Your Life)',
    date: 'March 18',
    day: 'Wed',
    time: '2:00 – 3:00 PM ET',
    imagePath: '/images/podcast_guests/soundarya.jpeg',
    lumaUrl: 'https://luma.com/8f3jrth1',
    linkedinUrl: 'https://www.linkedin.com/in/soundarya-balasubramani/',
    youtubeUrl: 'https://youtube.com/live/wGffAkt1kUM?feature=share',
  },
];
