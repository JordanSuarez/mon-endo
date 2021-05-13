import { LOGIN } from "common/routing/routesResolver";
import { RouteModel } from "common/types/router";
import Login from "../index";

export default {
  id: "loginPage",
  path: LOGIN,
  component: Login,
  requireAuthentication: false,
} as RouteModel;
