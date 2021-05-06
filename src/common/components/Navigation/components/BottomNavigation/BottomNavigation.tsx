import React from "react";

import { useHistory } from "react-router-dom";
import {
  BottomNavigation as BottoNavigationMui,
  BottomNavigationAction,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";

import { NavigationInterface } from "common/types/navigation";
import { classes as classesProps } from "common/classes";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  navigationItems: Array<NavigationInterface>;
};

const BottomNavigation = ({ classes, navigationItems }: Props): JSX.Element => {
  const history = useHistory();

  return (
    <BottoNavigationMui showLabels className={classes.root}>
      {navigationItems.map(({ label, icon, route }) => (
        <BottomNavigationAction
          key={label}
          label={label}
          icon={icon}
          onClick={() => history.push(route)}
          className={classes.button}
        />
      ))}
    </BottoNavigationMui>
  );
};

BottomNavigation.propTypes = {
  ...classesProps,
};

export default BottomNavigation;
