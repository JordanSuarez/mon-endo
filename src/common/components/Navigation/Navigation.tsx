import React from "react";

import { Hidden } from "@material-ui/core";

import SideNavigation from "./components/SideNavigation";
import BottomNavigation from "./components/BottomNavigation";

const Navigation = (): JSX.Element => {
  return (
    <>
      <Hidden smDown>
        <SideNavigation />
      </Hidden>
      <Hidden mdUp>
        <BottomNavigation />
      </Hidden>
    </>
  );
};

Navigation.propTypes = {};

export default Navigation;
