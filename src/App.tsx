import "./App.css";
import { Route, Routes, useLocation } from "react-router";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import PostPage from "./pages/PostPage";
import ROUTES from "./constants/routes";
import AuthPage from "./pages/AuthPage";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Header />
      <main className="mt-[102px]">
        <Routes location={background || location}>
          <Route path={ROUTES.main} Component={MainPage}>
            <Route path={ROUTES.auth} Component={AuthPage} />
          </Route>
        </Routes>
        {background && (
          <Routes>
            <Route path={ROUTES.auth} Component={AuthPage}></Route>
          </Routes>
        )}
      </main>
    </>
  );
}

export default App;
