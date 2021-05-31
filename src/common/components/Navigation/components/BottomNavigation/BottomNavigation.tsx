import React from "react";

import { useHistory } from "react-router-dom";
import {
  BottomNavigation as BottomNavigationMui,
  BottomNavigationAction,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";

import { StylesInterface } from "./styles";
import navigationItems from "./config/navigationItems";

export type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  currentRoute: string;
};

const BottomNavigation = ({ classes, currentRoute }: Props): JSX.Element => {
  const history = useHistory();
  return (
    <BottomNavigationMui showLabels className={classes.root}>
      {navigationItems.map(({ label, icon, route }) => (
        <BottomNavigationAction
          key={label}
          label={label}
          icon={icon}
          color="primary"
          onClick={() => history.push(route)}
          className={
            currentRoute === route
              ? `${classes.activeButton} ${classes.button}`
              : classes.button
          }
        />
      ))}
    </BottomNavigationMui>
  );
};

export default BottomNavigation;
