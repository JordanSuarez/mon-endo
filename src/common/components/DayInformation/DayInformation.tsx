import React, { useState } from "react";

import { ClassNameMap } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemSecondaryAction,
} from "@material-ui/core";

import { DELETE, PAIN_FORM, UPDATE } from "common/constants/context";
import IconButton from "common/components/IconButton";
import PainForm from "common/components/PainForm";
import Paper from "common/components/Paper";
import AddIcon from "@material-ui/icons/Add";
import { Pain, PainType, PainTypeIntensity } from "common/types/pains";
import { FormContext } from "common/context";
import { StylesInterface } from "./styles";
import locale from "./config/locale";

export type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  items: Array<Pain>;
  toggleDrawer: (context: string) => void;
  deletePain: (painId: string) => void;
  updatePain: (pain: Pain) => void;
  getPainsType: () => void;
  getPainsTypeIntensity: () => void;
  painsType: PainType[];
  painsTypeIntensity: PainTypeIntensity[];
  dateTime: string;
};

const DayInformation = ({
  classes,
  items,
  toggleDrawer,
  deletePain,
  updatePain,
  dateTime,
}: Props): JSX.Element => {
  const [selectedPain, setSelectedPain] = useState({} as Pain);
  const resetSelectedPain = () => setSelectedPain({} as Pain);

  const handleClick = (pain: Pain, context: string) => {
    if (context === DELETE) {
      return deletePain(pain.id);
    }
    return setSelectedPain(pain);
  };

  const handleSubmitForm = (inputValues: Omit<Pain, "userId" | "id">): void => {
    const painUpdated = {
      ...selectedPain,
      ...inputValues,
    };
    resetSelectedPain();
    updatePain(painUpdated);
  };

  const button = (
    <IconButton
      title={locale.button.create.label}
      onClick={() => toggleDrawer(PAIN_FORM)}
      className={classes.addIcon}
    >
      <AddIcon />
    </IconButton>
  );
  return (
    <Paper
      className={classes.root}
      title={locale.title.paper(dateTime)}
      button={button}
    >
      <div>
        {items.length > 0 ? (
          <List dense={false} className={classes.list}>
            {items.map(
              (
                { id, date, description, painType, painTypeIntensity },
                index
              ) => (
                <div key={id}>
                  <Divider className={classes.divider} />
                  <ListItem className={classes.listItem}>
                    {selectedPain.id !== id ? (
                      <>
                        <ListItemText
                          secondary={locale.listItem.date.label(date)}
                          className={classes.listItemText}
                        >
                          <div>
                            {locale.listItem.painType.label(painType.name)}
                          </div>
                          <div>
                            {locale.listItem.painType.label(
                              painTypeIntensity.name
                            )}
                          </div>
                          {description.length > 0 && (
                            <div>
                              {locale.listItem.painType.label(description)}
                            </div>
                          )}
                        </ListItemText>
                        <ListItemSecondaryAction
                          className={classes.iconsContainer}
                        >
                          <IconButton
                            title={locale.button.edit.label}
                            className={classes.editIcon}
                            onClick={() => handleClick(items[index], UPDATE)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            title={locale.button.delete.label}
                            className={classes.deleteIcon}
                            onClick={() => handleClick(items[index], DELETE)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </>
                    ) : (
                      <div className={classes.form}>
                        <FormContext.Provider value={UPDATE}>
                          <PainForm
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            title={locale.title.form.edit}
                            initialValues={selectedPain}
                            descriptionFieldIsActive={
                              selectedPain.description.length > 1
                            }
                            onCancel={resetSelectedPain}
                            handleSubmitForm={handleSubmitForm}
                          />
                        </FormContext.Provider>
                      </div>
                    )}
                  </ListItem>
                </div>
              )
            )}
          </List>
        ) : (
          <p className={classes.text}>{locale.text}</p>
        )}
      </div>
    </Paper>
  );
};

export default DayInformation;
