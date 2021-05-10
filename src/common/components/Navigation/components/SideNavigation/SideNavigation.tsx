import React from "react";

import { useHistory, Link } from "react-router-dom";
import { ClassNameMap } from "@material-ui/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  Drawer,
  List,
  ListItem,
  Toolbar,
  Divider,
  Button,
  ListItemText,
} from "@material-ui/core";

import { getHomeRoute } from "common/routing/routesResolver";
import { NavigationInterface } from "common/types/navigation";
import ActionButton from "common/components/ActionButton";
import AddIcon from "@material-ui/icons/Add";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  navigationItems: Array<NavigationInterface>;
  toggleDrawer: () => void;
};

const SideNavigation = ({
  classes,
  navigationItems,
  toggleDrawer,
}: Props): JSX.Element => {
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.paper,
        }}
      >
        <h1 className={classes.title}>
          <Link className={classes.link} to={getHomeRoute()}>
            Mon endo
          </Link>
        </h1>
        <Divider />
        <ActionButton
          onClick={toggleDrawer}
          endIcon={<AddIcon>send</AddIcon>}
          label="Ajouter une douleur"
        />
        <Toolbar />
        <div className={classes.content}>
          <List>
            {navigationItems.map(({ label, route, icon }) => (
              <ListItem button key={label} onClick={() => history.push(route)}>
                {icon}
                <ListItemText primary={label} className={classes.listItem} />
              </ListItem>
            ))}
          </List>
          <div className={classes.logout}>
            <Button
              variant="contained"
              color="primary"
              className={classes.logoutButton}
              endIcon={<ExitToAppIcon>send</ExitToAppIcon>}
            >
              Logout
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SideNavigation;
