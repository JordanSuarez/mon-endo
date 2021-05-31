import React from "react";

import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import CalendarIcon from "@material-ui/icons/CalendarToday";

import {
  getCalendarRoute,
  getHomeRoute,
  getProfileRoute,
} from "common/routing/routesResolver";
import { NavigationInterface } from "common/types/navigation";

export default [
  { label: "Profile", icon: <PersonIcon />, route: getProfileRoute() },
  { label: "Home", icon: <HomeIcon />, route: getHomeRoute() },
  { label: "Calendar", icon: <CalendarIcon />, route: getCalendarRoute() },
] as Array<NavigationInterface>;
