import { type RouteObject } from "react-router";

import ROUTES from "../../constants/routes";
import ResoursesPage from "../../pages/ResoursesPage";

export const resourses: RouteObject = {
  path: ROUTES.resourses,
  Component: ResoursesPage,
};
