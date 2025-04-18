import { type RouteObject } from "react-router";

import ROUTES from "../../constants/routes";
import NotFoundPage from "../../pages/NotFoundPage";

export const notFound: RouteObject = {
  path: ROUTES.notFound,
  Component: NotFoundPage,
};
