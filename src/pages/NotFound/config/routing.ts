import { NOT_FOUND } from "common/routing/routesResolver";
import { RouteModel } from "common/types/router";
import NotFound from "../index";

export default {
  id: "loginPage",
  path: NOT_FOUND,
  component: NotFound,
  requireAuthentication: false,
} as RouteModel;
