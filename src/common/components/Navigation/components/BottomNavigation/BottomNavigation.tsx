import React from "react";

import { useHistory } from "react-router-dom";
import {
  BottomNavigation as BottomNavigationMui,
  BottomNavigationAction,
} from "@material-ui/core";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import { ClassNameMap } from "@material-ui/styles";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";

import {
  getCalendarRoute,
  getHomeRoute,
  getProfileRoute,
} from "common/routing/routesResolver";
import { NavigationInterface } from "common/types/navigation";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
};

const BottomNavigation = ({ classes }: Props): JSX.Element => {
  const history = useHistory();

  const navigationItems = [
    { label: "Profile", icon: <PersonIcon />, route: getProfileRoute() },
    { label: "Home", icon: <HomeIcon />, route: getHomeRoute() },
    { label: "Calendar", icon: <CalendarIcon />, route: getCalendarRoute() },
  ] as Array<NavigationInterface>;
  return (
    <BottomNavigationMui showLabels className={classes.root}>
      {navigationItems.map(({ label, icon, route }) => (
        <BottomNavigationAction
          key={label}
          label={label}
          icon={icon}
          onClick={() => history.push(route)}
          className={classes.button}
        />
      ))}
    </BottomNavigationMui>
  );
};

export default BottomNavigation;
