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
import locale from "common/components/Navigation/config/locale";
import { StylesInterface } from "./styles";
import navigationItems from "./config/navigationItems";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  toggleDrawer: (context: string) => void;
  currentRoute: string;
};

const SideNavigation = ({
  classes,
  toggleDrawer,
  currentRoute,
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
            {locale.title}
          </Link>
        </h1>
        <Divider />
        <ActionButton
          onClick={() => toggleDrawer(PAIN_FORM)}
          endIcon={<AddIcon>send</AddIcon>}
          label={locale.button.create.label}
        />
        <Toolbar />
        <div className={classes.content}>
          <List>
            {navigationItems.map(({ label, icon, route }) => (
              <ListItem
                button
                key={label}
                onClick={() => history.push(route)}
                className={
                  currentRoute === route
                    ? classes.activeListItem
                    : classes.listItem
                }
              >
                {icon}
                <ListItemText
                  primary={label}
                  className={classes.listItemText}
                />
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
              {locale.button.logout.label}
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SideNavigation;
