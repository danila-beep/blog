import { type RouteObject } from "react-router";

import ROUTES from "../../constants/routes";
import NewsPage from "../../pages/NewsPage";

export const news: RouteObject = {
  path: ROUTES.news,
  Component: NewsPage,
};
