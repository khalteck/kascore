import { Routes, Route } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import TennisPage from "./pages/TennisPage";
import CricketPage from "./pages/CricketPage.jsx";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

const Homepage = lazy(() => import("./pages/Homepage"));
const BaseballPage = lazy(() => import("./pages/BaseballPage"));
const AmericanFPage = lazy(() => import("./pages/AmericanFPage"));
const BasketballPage = lazy(() => import("./pages/BasketballPage"));
const HockeyPage = lazy(() => import("./pages/HockeyPage.jsx"));
const Favorites = lazy(() => import("./pages/Favorites"));
const MatchDetails = lazy(() => import("./pages/MatchDetails"));
const Leagues = lazy(() => import("./pages/Leagues"));
const News = lazy(() => import("./pages/News"));
const News2 = lazy(() => import("./pages/News2"));
const NewsDetails = lazy(() => import("./pages/NewsDetails"));
const TeamDetails = lazy(() => import("./pages/TeamDetails"));
const CompetitionDetails = lazy(() => import("./pages/CompetitionDetails"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/scores/favorites" element={<Favorites />} />
        <Route path="/scores/basketball/details" element={<BasketballPage />} />
        <Route path="/scores/tennis" element={<TennisPage />} />
        <Route path="/scores/hockey" element={<HockeyPage />} />
        <Route path="/scores/cricket" element={<CricketPage />} />
        <Route path="/scores/baseball" element={<BaseballPage />} />
        <Route path="/scores/americanfootball" element={<AmericanFPage />} />
        <Route path="/scores/details/:id" element={<MatchDetails />} />
        <Route path="/scores/leagues" element={<Leagues />} />
        <Route path="/scores/football/team/:id" element={<TeamDetails />} />
        <Route
          path="/scores/football/competition/:id"
          element={<CompetitionDetails />}
        />

        <Route path="/news" element={<News />} />
        <Route path="/news/:category" element={<News2 />} />
        <Route path="/news-details/:id" element={<NewsDetails />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
