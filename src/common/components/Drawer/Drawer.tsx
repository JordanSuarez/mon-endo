import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Drawer as MUIDrawer, Paper } from "@material-ui/core";

import { PAIN_FORM, CREATE, SPORT_ACTIVITY } from "common/constants/context";
import PainForm from "common/components/PainForm";
import SportActivityForm from "common/components/SportActivityForm";
import { Pain } from "common/types/pains";
import locale from "common/components/PainForm/config/locale";
import { PainFormContext } from "common/context";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  isOpen: boolean;
  context: string;
  closeDrawer: (context: string) => void;
  createPain: (pain: Omit<Pain, "userId" | "id">) => void;
};

const Drawer = ({
  classes,
  isOpen,
  closeDrawer,
  context,
  createPain,
}: Props): JSX.Element => {
  const handleSubmitForm = (inputValues: Omit<Pain, "userId" | "id">): void => {
    createPain(inputValues);
  };

  return (
    <MUIDrawer
      anchor="bottom"
      open={isOpen}
      onClose={closeDrawer}
      className={classes.root}
    >
      <Paper className={classes.paper}>
        {context === PAIN_FORM && (
          <PainFormContext.Provider value={CREATE}>
            <PainForm
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              inittialValues={{}}
              title={locale.title.create}
              handleSubmitForm={handleSubmitForm}
            />
          </PainFormContext.Provider>
        )}
        {context === SPORT_ACTIVITY && <SportActivityForm />}
      </Paper>
    </MUIDrawer>
  );
};

export default Drawer;
