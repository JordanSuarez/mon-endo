import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";

import { SportActivity } from "common/types/sportActivity";
import IconButton from "common/components/IconButton";
import Form from "common/components/Form";
import Paper from "common/components/Paper";
import { SPORT_ACTIVITY } from "common/constants/context";
import { Typography } from "@material-ui/core";
import locale from "./config/locale";
import { StylesInterface } from "./styles";

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
      <AddIcon>send</AddIcon>
    </IconButton>
  );
  const onSubmit = (values: any): void => {
    console.log(values);
  };

  const onCancel = (): void => {
    console.log("cancel");
  };
  // TODO add length check
  return (
    <>
      <Typography variant="h6" className={classes.title}>
        test
      </Typography>
      <Form
        initialValues={{}}
        onCancel={onCancel}
        onSubmit={onSubmit}
        title="toto"
      >
        <div>toto</div>
      </Form>
    </>
  );
};

export default SportActivityForm;
