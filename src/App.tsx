import "./App.css";
import { Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import ROUTES from "./constants/routes";
import NewsPage from "./pages/NewsPage";
import PodcastsPage from "./pages/PodcastsPage";
import ResoursesPage from "./pages/ResoursesPage";

function App() {
  return (
    <>
      <Header />
      <main className="mt-[102px]">
        <Routes>
          <Route index Component={MainPage} />
          <Route path={ROUTES.news}>
            <Route index Component={NewsPage} />
            <Route path={":id"} />
          </Route>
          <Route path={ROUTES.podcasts} Component={PodcastsPage} />
          <Route path={ROUTES.resourses} Component={ResoursesPage} />
        </Routes>
      </main>
    </>
  );
}

export default App;
