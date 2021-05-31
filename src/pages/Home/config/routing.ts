import { HOME } from "common/routing/routesResolver";
import { RouteModel } from "common/types/router";
import Home from "../index";

export default {
  id: "homePage",
  path: HOME,
  component: Home,
  requireAuthentication: true,
} as RouteModel;
