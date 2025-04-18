import { type RouteObject } from "react-router";

import ROUTES from "../../constants/routes";
import MainPage from "../../pages/MainPage";

export const main: RouteObject = {
  path: ROUTES.main,
  Component: MainPage,
};
