import { HOME } from "common/routing/routesResolver";
import { RouteModel } from "common/interfaces/router";
import Home from "../index";

export default {
  id: "homePage",
  exact: true,
  path: HOME,
  component: Home,
} as RouteModel;
