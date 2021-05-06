import { HOME } from "common/routing/routesResolver";
import { RouteModel } from "common/types/router";
import Home from "../index";

export default {
  id: "homePage",
  exact: true,
  path: HOME,
  component: Home,
} as RouteModel;
