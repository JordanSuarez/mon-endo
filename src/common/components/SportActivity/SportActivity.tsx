import React, { useState } from "react";

import { ClassNameMap } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";

import { SportActivity as ISportActivity } from "common/types/sportActivity";
import IconButton from "common/components/IconButton";
import { DELETE, SPORT_ACTIVITY, UPDATE } from "common/constants/context";
import DayInformation from "common/components/DayInformation";
import SportActivityForm from "common/components/SportActivityForm";
import { FormContext } from "common/context";
import { StylesInterface } from "./styles";
import locale from "./config/locale";
import Paper from "../Paper";

export type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  toggleDrawer: (context: string) => void;
  sportActivities: ISportActivity[];
  deleteSportActivity: (id: string) => void;
  updateSportActivity: (sportActivity: ISportActivity) => void;
};

const SportActivity = ({
  classes,
  toggleDrawer,
  sportActivities,
  deleteSportActivity,
  updateSportActivity,
}: Props): JSX.Element => {
  const [selectedSportActivity, setSelectedSportActivity] = useState(
    {} as ISportActivity
  );
  const resetSelectedSportActivity = () =>
    setSelectedSportActivity({} as ISportActivity);

  const handleCloseForm = (): void => {
    resetSelectedSportActivity();
  };

  const handleClick = (sportActivity: ISportActivity, action: string) => {
    if (action === DELETE) {
      return deleteSportActivity(sportActivity.id);
    }

    return setSelectedSportActivity(sportActivity);
  };

  const handleSubmitForm = (
    inputValues: Omit<ISportActivity, "userId" | "id">
  ): void => {
    const itemUpdated = {
      ...selectedSportActivity,
      ...inputValues,
    };
    resetSelectedSportActivity();
    updateSportActivity(itemUpdated);
  };

  const generateChildrenItem = (values: ISportActivity): JSX.Element => {
    return (
      <>
        <div>{values.activity}</div>
      </>
    );
  };

  return (
    <Paper
      className={classes.root}
      title={locale.title.paper}
      button={
        <IconButton
          title={locale.button.create.label}
          onClick={() => toggleDrawer(SPORT_ACTIVITY)}
          className={classes.addIcon}
        >
          <AddIcon />
        </IconButton>
      }
    >
      <div>
        <DayInformation
          items={sportActivities}
          emptyText={locale.text}
          selectedItemList={selectedSportActivity}
          handleClick={(items, action) =>
            handleClick(items as ISportActivity, action)
          }
          generateChildrenItem={(values) =>
            generateChildrenItem(values as ISportActivity)
          }
          formChildren={
            <FormContext.Provider value={UPDATE}>
              <SportActivityForm
                initialValues={selectedSportActivity}
                title={locale.title.form.edit}
                handleCloseForm={handleCloseForm}
                handleSubmitForm={handleSubmitForm}
              />
            </FormContext.Provider>
          }
        />
      </div>
    </Paper>
  );
};

export default SportActivity;
