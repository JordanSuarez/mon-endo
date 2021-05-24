import React, { useState } from "react";

import { ClassNameMap } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Divider,
  ListItemSecondaryAction,
  IconButton,
  Typography,
} from "@material-ui/core";

import { fullDate, formatDate, dateWithHours } from "common/helpers/date";
import { DELETE, PAIN_FORM, UPDATE } from "common/constants/context";
import ActionButton from "common/components/ActionButton";
import PainForm from "common/components/PainForm";
import AddIcon from "@material-ui/icons/Add";
import { Pain, PainType, PainTypeIntensity } from "common/types/pains";
import frLocale from "date-fns/locale/fr";
import { PainFormContext } from "common/context";
import { StylesInterface } from "./styles";
import locale from "../PainForm/config/locale";

export type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  items: Array<Pain>;
  toggleDrawer: (context: string) => void;
  deletePain: (painId: string) => void;
  updatePain: (pain: Pain) => void;
  dateTime: string;
  getPainsType: () => void;
  getPainsTypeIntensity: () => void;
  painsType: PainType[];
  painsTypeIntensity: PainTypeIntensity[];
};

// TODO add locale
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
  const title = formatDate(new Date(dateTime), frLocale, fullDate);

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

  return (
    <Paper elevation={3} className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <ActionButton
          onClick={() => toggleDrawer(PAIN_FORM)}
          endIcon={<AddIcon>send</AddIcon>}
          label="Ajouter une douleur"
        />
      </div>
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
                          secondary={formatDate(
                            new Date(date),
                            frLocale,
                            dateWithHours
                          )}
                          className={classes.listItemText}
                        >
                          <div>Type: {painType.name}</div>
                          <div>Intensité: {painTypeIntensity.name}</div>
                          {description.length > 0 && (
                            <div>Description: {description}</div>
                          )}
                        </ListItemText>
                        <ListItemSecondaryAction
                          className={classes.iconsContainer}
                        >
                          <IconButton
                            edge="end"
                            aria-label="edit"
                            onClick={() => handleClick(items[index], UPDATE)}
                            color="primary"
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => handleClick(items[index], DELETE)}
                            color="secondary"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </>
                    ) : (
                      <div className={classes.form}>
                        <PainFormContext.Provider value={UPDATE}>
                          <PainForm
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            title={locale.title.edit}
                            initialValues={selectedPain}
                            descriptionFieldIsActive={
                              selectedPain.description.length > 1
                            }
                            onCancel={resetSelectedPain}
                            handleSubmitForm={handleSubmitForm}
                          />
                        </PainFormContext.Provider>
                      </div>
                    )}
                  </ListItem>
                </div>
              )
            )}
          </List>
        ) : (
          <p className={classes.text}>Aucune douleur enregistrée</p>
        )}
      </div>
    </Paper>
  );
};

export default DayInformation;
