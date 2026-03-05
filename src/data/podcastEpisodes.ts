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
}

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    slug: 'soundarya-balasubramani',
    guestName: 'Soundarya Balasubramani',
    role: '3× Author | Ex-Salesforce PM | Founder, Ex-Unshackled',
    episodeTitle: 'Why Writing Online Can Change Your Career (and Your Life)',
    date: 'March 9',
    day: 'Mon',
    time: '2:00 – 3:00 PM ET',
    imagePath: '/images/podcast_guests/soundarya.jpeg',
    lumaUrl: 'https://luma.com/8f3jrth1',
    linkedinUrl: 'https://www.linkedin.com/in/soundarya-balasubramani/',
  },
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
  },
];
