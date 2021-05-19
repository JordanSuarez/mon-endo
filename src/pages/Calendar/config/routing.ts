import { CALENDAR } from "common/routing/routesResolver";
import { RouteModel } from "common/types/router";
import Calendar from "../index";

export default {
  id: "calendarPage",
  path: CALENDAR,
  component: Calendar,
  requireAuthentication: true,
} as RouteModel;
