import "./App.css";
import { Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import PostPage from "./pages/PostPage";
import ROUTES from "./constants/routes";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <>
      <Header />
      <main className="mt-[102px]">
        <Routes>
          <Route path={ROUTES.main}>
            <Route index Component={MainPage} />
            <Route path=":postId" element={<PostPage />} />
          </Route>
          <Route path={ROUTES.auth}>
            <Route index Component={AuthPage} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
