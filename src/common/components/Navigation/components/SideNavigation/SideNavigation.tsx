import React from "react";

import { useHistory, Link } from "react-router-dom";
import { ClassNameMap } from "@material-ui/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddIcon from "@material-ui/icons/Add";
import {
  Drawer,
  List,
  ListItem,
  Toolbar,
  Divider,
  Button,
  ListItemText,
} from "@material-ui/core";

import { getHomeRoute, getLogoutRoute } from "common/routing/routesResolver";
import ActionButton from "common/components/ActionButton";
import { PAIN_FORM } from "common/constants/context";
import { StylesInterface } from "./styles";
import navigationItems from "./config/navigationItems";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  toggleDrawer: (context: string) => void;
};

const SideNavigation = ({ classes, toggleDrawer }: Props): JSX.Element => {
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
          onClick={() => toggleDrawer(PAIN_FORM)}
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
              onClick={() => history.push(getLogoutRoute())}
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
