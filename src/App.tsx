import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import HomePage from './pages/HomePage';

const JoinPage = lazy(() => import('./pages/JoinPage'));
const BookPage = lazy(() => import('./pages/BookPage'));
const PodcastPage = lazy(() => import('./pages/PodcastPage'));
const PodcastEpisodePage = lazy(() => import('./pages/PodcastEpisodePage'));
const AgendaSpring26Page = lazy(() => import('./pages/AgendaSpring26Page'));
const AgendaSummer26Page = lazy(() => import('./pages/AgendaSummer26Page'));
const LeaderboardSpring26Page = lazy(() => import('./pages/LeaderboardSpring26Page'));
const LeaderboardSummer26Page = lazy(() => import('./pages/LeaderboardSummer26Page'));
const EnterprisePage = lazy(() => import('./pages/EnterprisePage'));
const EnterpriseHRPage = lazy(() => import('./pages/EnterpriseHRPage'));
const MasterclassPage = lazy(() => import('./pages/MasterclassPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const ClaudeCode101Page = lazy(() => import('./pages/ClaudeCode101Page'));
const LLMTesting101Page = lazy(() => import('./pages/LLMTesting101Page'));
const AgencyPage = lazy(() => import('./pages/AgencyPage'));
const StoriesPage = lazy(() => import('./pages/StoriesPage'));
const DeniseStoryPage = lazy(() => import('./pages/DeniseStoryPage'));
const AprotiimStoryPage = lazy(() => import('./pages/AprotiimStoryPage'));
const DigvijayStoryPage = lazy(() => import('./pages/DigvijayStoryPage'));
const DebisreeStoryPage = lazy(() => import('./pages/DebisreeStoryPage'));
const RajeshStoryPage = lazy(() => import('./pages/RajeshStoryPage'));
const JoanStoryPage = lazy(() => import('./pages/JoanStoryPage'));
const PadmapriyaStoryPage = lazy(() => import('./pages/PadmapriyaStoryPage'));
const PraveenaStoryPage = lazy(() => import('./pages/PraveenaStoryPage'));
const SaahithiStoryPage = lazy(() => import('./pages/SaahithiStoryPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-brand-dark" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/podcast/:slug" element={<PodcastEpisodePage />} />
        <Route path="/agenda/spring26" element={<AgendaSpring26Page />} />
        <Route path="/agenda/summer26" element={<AgendaSummer26Page />} />
        <Route path="/leaderboard/spring26" element={<LeaderboardSpring26Page />} />
        <Route path="/leaderboard/summer26" element={<LeaderboardSummer26Page />} />
        <Route path="/enterprise" element={<EnterprisePage />} />
        <Route path="/enterprise/hr" element={<EnterpriseHRPage />} />
        <Route path="/masterclass" element={<MasterclassPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/claude-code-101" element={<ClaudeCode101Page />} />
        <Route path="/resources/llmops-101" element={<LLMTesting101Page />} />
        <Route path="/agency" element={<AgencyPage />} />
        <Route path="/story" element={<StoriesPage />} />
        <Route path="/story/denise" element={<DeniseStoryPage />} />
        <Route path="/story/aprotiim" element={<AprotiimStoryPage />} />
        <Route path="/story/digvijay" element={<DigvijayStoryPage />} />
        <Route path="/story/debisree" element={<DebisreeStoryPage />} />
        <Route path="/story/rajesh" element={<RajeshStoryPage />} />
        <Route path="/story/joan" element={<JoanStoryPage />} />
        <Route path="/story/padmapriya" element={<PadmapriyaStoryPage />} />
        <Route path="/story/praveena" element={<PraveenaStoryPage />} />
        <Route path="/story/saahithi" element={<SaahithiStoryPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
