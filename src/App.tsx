import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import BookPage from './pages/BookPage';
import PodcastPage from './pages/PodcastPage';
import PodcastEpisodePage from './pages/PodcastEpisodePage';
import AgendaSpring26Page from './pages/AgendaSpring26Page';
import LeaderboardSpring26Page from './pages/LeaderboardSpring26Page';
import EnterprisePage from './pages/EnterprisePage';
import ResourcesPage from './pages/ResourcesPage';
import ClaudeCode101Page from './pages/ClaudeCode101Page';
import LLMTesting101Page from './pages/LLMTesting101Page';
import AgencyPage from './pages/AgencyPage';
import StoriesPage from './pages/StoriesPage';
import DeniseStoryPage from './pages/DeniseStoryPage';
import AprotiimStoryPage from './pages/AprotiimStoryPage';
import DigvijayStoryPage from './pages/DigvijayStoryPage';
import DebisreeStoryPage from './pages/DebisreeStoryPage';
import RajeshStoryPage from './pages/RajeshStoryPage';
import JoanStoryPage from "./pages/JoanStoryPage";
import PadmapriyaStoryPage from "./pages/PadmapriyaStoryPage";
import PraveenaStoryPage from "./pages/PraveenaStoryPage";
import SaahithiStoryPage from "./pages/SaahithiStoryPage";
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/podcast/:slug" element={<PodcastEpisodePage />} />
        <Route path="/agenda/spring26" element={<AgendaSpring26Page />} />
        <Route path="/leaderboard/spring26" element={<LeaderboardSpring26Page />} />
        <Route path="/enterprise" element={<EnterprisePage />} />
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
      </Routes>
    </BrowserRouter>
  );
}
