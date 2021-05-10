import React from "react";

import { Hidden } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import CalendarIcon from "@material-ui/icons/CalendarToday";

import {
  getCalendarRoute,
  getHomeRoute,
  getProfileRoute,
} from "common/routing/routesResolver";
import { NavigationInterface } from "common/types/navigation";
import SideNavigation from "./components/SideNavigation";
import BottomNavigation from "./components/BottomNavigation";

type Props = {
  toggleDrawer: () => void;
};

const Navigation = ({ toggleDrawer }: Props): JSX.Element => {
  const navigationItems = [
    { label: "Profile", icon: <PersonIcon />, route: getProfileRoute() },
    { label: "Home", icon: <HomeIcon />, route: getHomeRoute() },
    { label: "Calendar", icon: <CalendarIcon />, route: getCalendarRoute() },
  ] as Array<NavigationInterface>;

  return (
    <>
      <Hidden smDown>
        <SideNavigation
          navigationItems={navigationItems}
          toggleDrawer={toggleDrawer}
        />
      </Hidden>
      <Hidden mdUp>
        <BottomNavigation navigationItems={navigationItems} />
      </Hidden>
    </>
  );
};

Navigation.propTypes = {};

export default Navigation;
