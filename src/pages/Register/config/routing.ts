import { REGISTER } from "common/routing/routesResolver";
import { RouteModel } from "common/types/router";
import Register from "../index";

export default {
  id: "registerPage",
  path: REGISTER,
  component: Register,
  requireAuthentication: false,
} as RouteModel;
