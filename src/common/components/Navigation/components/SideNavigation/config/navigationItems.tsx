import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import CalendarIcon from "@material-ui/icons/CalendarToday";

import { getCalendarRoute, getHomeRoute } from "common/routing/routesResolver";
import { NavigationInterface } from "common/types/navigation";
import locale from "common/components/Navigation/config/locale";

export default [
  // { label: "Profile", icon: <PersonIcon />, route: getProfileRoute() },
  {
    label: locale.button.home.label,
    icon: <HomeIcon />,
    route: getHomeRoute(),
  },
  {
    label: locale.button.calendar.label,
    icon: <CalendarIcon />,
    route: getCalendarRoute(),
  },
] as Array<NavigationInterface>;
