import React, { useEffect, useState } from "react";

import { Hidden } from "@material-ui/core";

import { useHistory } from "react-router-dom";
import SideNavigation from "./components/SideNavigation";
import BottomNavigation from "./components/BottomNavigation";

type Props = {
  toggleDrawer: (context: string) => void;
};

const Navigation = ({ toggleDrawer }: Props): JSX.Element => {
  const [currentRoute, setCurrentRoute] = useState("");
  const history = useHistory();

  useEffect(() => {
    setCurrentRoute(history.location.pathname);
  }, [history.location]);
  return (
    <>
      <Hidden smDown>
        <SideNavigation
          toggleDrawer={toggleDrawer}
          currentRoute={currentRoute}
        />
      </Hidden>
      <Hidden mdUp initialWidth="xs">
        <BottomNavigation currentRoute={currentRoute} />
      </Hidden>
    </>
  );
};

export default Navigation;
