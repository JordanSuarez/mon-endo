import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";

import { SportActivity } from "common/types/sportActivity";
import IconButton from "common/components/IconButton";
import Paper from "common/components/Paper";
import { Divider } from "@material-ui/core";
import { SPORT_ACTIVITY } from "common/constants/context";
import { StylesInterface } from "./styles";
import locale from "./config/locale";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  toggleDrawer: (context: string) => void;
  sportActivities: SportActivity[];
};

const SportActivityForm = ({
  classes,
  toggleDrawer,
  sportActivities,
}: Props): JSX.Element => {
  const button = (
    <IconButton
      title="Ajouter une douleur"
      onClick={() => toggleDrawer(SPORT_ACTIVITY)}
      className={classes.addIcon}
    >
      <AddIcon />
    </IconButton>
  );
  // TODO add length check
  return (
    <Paper className={classes.root} title={locale.title} button={button}>
      <>
        <Divider className={classes.divider} />

        {true && <p className={classes.text}>Aucune activité enregistrée</p>}
      </>
    </Paper>
  );
};

export default SportActivityForm;
