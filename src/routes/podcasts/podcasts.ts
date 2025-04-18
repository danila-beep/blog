import { type RouteObject } from "react-router";

import ROUTES from "../../constants/routes";
import PodcastsPage from "../../pages/PodcastsPage";

export const podcasts: RouteObject = {
  path: ROUTES.podcasts,
  Component: PodcastsPage,
};
