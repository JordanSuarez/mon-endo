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
import AddIcon from "@material-ui/icons/Add";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  navigationItems: Array<NavigationInterface>;
};

const SideNavigation = ({ classes, navigationItems }: Props): JSX.Element => {
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
        <Button
          variant="contained"
          color="primary"
          className={classes.addButton}
          endIcon={<AddIcon>send</AddIcon>}
        >
          Ajouter une douleur
        </Button>
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
