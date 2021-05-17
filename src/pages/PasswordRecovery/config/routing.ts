import { PASSWORD_RECOVERY } from "common/routing/routesResolver";
import { RouteModel } from "common/types/router";
import PasswordRecovery from "../index";

export default {
  id: "PasswordRecoveryPage",
  path: PASSWORD_RECOVERY,
  component: PasswordRecovery,
  requireAuthentication: false,
} as RouteModel;
