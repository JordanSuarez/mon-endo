import React, { useState } from "react";

import { ClassNameMap } from "@material-ui/styles";

import { DELETE, PAIN_FORM, UPDATE } from "common/constants/context";
import IconButton from "common/components/IconButton";
import PainForm from "common/components/PainForm";
import Paper from "common/components/Paper";
import AddIcon from "@material-ui/icons/Add";
import { Pain as IPain, PainType, PainTypeIntensity } from "common/types/pains";
import { FormContext } from "common/context";
import { get } from "lodash";
import { StylesInterface } from "./styles";
import locale from "./config/locale";
import DayInformation from "../DayInformation";

export type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  pains: Array<IPain>;
  toggleDrawer: (context: string) => void;
  deletePain: (id: string) => void;
  updatePain: (pain: IPain) => void;
  getPainsType: () => void;
  getPainsTypeIntensity: () => void;
  painsType: PainType[];
  painsTypeIntensity: PainTypeIntensity[];
};

const Pain = ({
  classes,
  pains,
  toggleDrawer,
  deletePain,
  updatePain,
}: Props): JSX.Element => {
  const [selectedPain, setSelectedPain] = useState({} as IPain);
  const resetSelectedPain = () => setSelectedPain({} as IPain);

  const handleClick = (pain: IPain, context: string) => {
    if (context === DELETE) {
      return deletePain(pain.id);
    }
    return setSelectedPain(pain);
  };

  const handleSubmitForm = (
    inputValues: Omit<IPain, "userId" | "id">
  ): void => {
    const painUpdated = {
      ...selectedPain,
      ...inputValues,
    };
    resetSelectedPain();
    updatePain(painUpdated);
  };

  const generateChildrenItem = (values: IPain): JSX.Element => {
    return (
      <ul>
        {values.description.length > 0 ? (
          <li>
            {values.painType.name} : {values.description}
          </li>
        ) : (
          <li>{values.painType.name}</li>
        )}
        <li>
          {locale.listItem.painTypeIntensity.label(
            values.painTypeIntensity.name
          )}
        </li>
      </ul>
    );
  };

  return (
    <Paper
      className={classes.root}
      title={locale.title.paper}
      button={
        <IconButton
          title={locale.button.create.label}
          onClick={() => toggleDrawer(PAIN_FORM)}
          className={classes.addIcon}
        >
          <AddIcon />
        </IconButton>
      }
    >
      <div>
        <DayInformation
          items={pains}
          emptyText={locale.text}
          selectedItemList={selectedPain}
          handleClick={(items, action) => handleClick(items as IPain, action)}
          generateChildrenItem={(values) =>
            generateChildrenItem(values as IPain)
          }
          formChildren={
            <FormContext.Provider value={UPDATE}>
              <PainForm
                initialValues={selectedPain}
                descriptionFieldIsActive={
                  get(selectedPain, "description", "").length > 0
                }
                handleClose={resetSelectedPain}
                handleSubmit={handleSubmitForm}
              />
            </FormContext.Provider>
          }
        />
      </div>
    </Paper>
  );
};

export default Pain;
