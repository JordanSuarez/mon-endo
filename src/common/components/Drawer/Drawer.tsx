import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Drawer as MUIDrawer, Paper } from "@material-ui/core";

import { PAIN_FORM, CREATE, SPORT_ACTIVITY } from "common/constants/context";
import PainForm from "common/components/PainForm";
import SportActivityForm from "common/components/SportActivityForm";
import { Pain } from "common/types/pains";
import locale from "common/components/PainForm/config/locale";
import { FormContext } from "common/context";
import { SportActivity } from "common/types/sportActivity";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  isOpen: boolean;
  context: string;
  closeDrawer: (context: string) => void;
  createPain: (pain: Omit<Pain, "userId" | "id">) => void;
  createSportActivity: (
    sportActivity: Omit<SportActivity, "userId" | "id" | "date">
  ) => void;
};

const Drawer = ({
  classes,
  isOpen,
  closeDrawer,
  context,
  createPain,
  createSportActivity,
}: Props): JSX.Element => {
  return (
    <MUIDrawer
      anchor="bottom"
      open={isOpen}
      onClose={closeDrawer}
      className={classes.root}
    >
      <Paper className={classes.paper}>
        {context === PAIN_FORM && (
          <FormContext.Provider value={CREATE}>
            <PainForm
              title={locale.title.pain.create}
              handleSubmitForm={createPain}
            />
          </FormContext.Provider>
        )}
        {context === SPORT_ACTIVITY && (
          <FormContext.Provider value={CREATE}>
            <SportActivityForm
              title={locale.title.sportActivity.create}
              handleSubmitForm={createSportActivity}
            />
          </FormContext.Provider>
        )}
      </Paper>
    </MUIDrawer>
  );
};

export default Drawer;
