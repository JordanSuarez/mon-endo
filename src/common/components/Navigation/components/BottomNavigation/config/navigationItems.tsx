import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import CalendarIcon from "@material-ui/icons/CalendarToday";

import {
  getCalendarRoute,
  getHomeRoute,
  getLogoutRoute,
} from "common/routing/routesResolver";
import locale from "common/components/Navigation/config/locale";
import { NavigationInterface } from "common/types/navigation";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default [
  // { label: "Profile", icon: <PersonIcon />, route: getProfileRoute() },
  {
    label: locale.button.calendar.label,
    icon: <CalendarIcon />,
    route: getCalendarRoute(),
  },
  {
    label: locale.button.home.label,
    icon: <HomeIcon />,
    route: getHomeRoute(),
  },
  {
    label: locale.button.logout.label,
    icon: <ExitToAppIcon />,
    route: getLogoutRoute(),
  },
] as Array<NavigationInterface>;
