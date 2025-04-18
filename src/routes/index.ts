import { createBrowserRouter } from "react-router";

import { main } from "./main/main";
import { podcasts } from "./podcasts/podcasts";
import { news } from "./news/news";
import { resourses } from "./resourses/resourses";
import { notFound } from "../routes/not-found/notFound";

export const AppRouter = createBrowserRouter([
  main,
  news,
  podcasts,
  resourses,
  notFound,
]);
