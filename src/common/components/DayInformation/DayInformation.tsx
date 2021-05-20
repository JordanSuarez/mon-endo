import React, { useState } from "react";

import { ClassNameMap } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Form } from "react-final-form";
import SendIcon from "@material-ui/icons/Send";
import ClearIcon from "@material-ui/icons/Clear";
import { TextField } from "mui-rff";
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
import { DELETE, UPDATE } from "common/constants/context";
import ActionButton from "common/components/ActionButton";
import AddIcon from "@material-ui/icons/Add";
import { Pain } from "common/types/pains";
import frLocale from "date-fns/locale/fr";
import { StylesInterface } from "./styles";

export type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  items: Array<Pain>;
  toggleDrawer: () => void;
  deletePain: (painId: string) => void;
  updatePain: (pain: Pain) => void;
  dateTime: string;
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
  const resetField = () => setSelectedPain({} as Pain);
  const title = formatDate(new Date(dateTime), frLocale, fullDate);

  const handleClick = (pain: Pain, context: string) => {
    if (context === DELETE) {
      return deletePain(pain.id);
    }
    return setSelectedPain(pain);
  };

  const onSubmit = (values: { description: string }) => {
    const painUpdated = {
      ...selectedPain,
      description: values.description,
    };
    resetField();
    return updatePain(painUpdated);
  };

  return (
    <Paper elevation={3} className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <ActionButton
          onClick={toggleDrawer}
          endIcon={<AddIcon>send</AddIcon>}
          label="Ajouter une douleur"
        />
      </div>
      <div>
        {items.length > 0 ? (
          <List dense={false} className={classes.list}>
            {items.map(({ id, date, description }, index) => (
              <div key={id}>
                <Divider className={classes.divider} />
                <ListItem className={classes.listItem}>
                  {selectedPain.id !== id ? (
                    <>
                      <ListItemText
                        primary={description}
                        secondary={formatDate(
                          new Date(date),
                          frLocale,
                          dateWithHours
                        )}
                        className={classes.listItemText}
                      />
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
                    <Form
                      onSubmit={onSubmit}
                      initialValues={{ description }}
                      render={({ handleSubmit, submitting, valid }) => (
                        <form onSubmit={handleSubmit} className={classes.form}>
                          <ListItemText
                            secondary={formatDate(
                              new Date(date),
                              frLocale,
                              dateWithHours
                            )}
                            className={classes.listItemText}
                          />
                          <TextField
                            label="Description"
                            name="description"
                            variant="outlined"
                            multiline
                            className={classes.textField}
                          />
                          <ListItemSecondaryAction
                            className={classes.iconsContainer}
                          >
                            <IconButton
                              edge="end"
                              aria-label="cancel"
                              onClick={resetField}
                              color="secondary"
                            >
                              <ClearIcon />
                            </IconButton>
                            <IconButton
                              edge="end"
                              aria-label="submit"
                              type="submit"
                              disabled={submitting || !valid}
                              color="primary"
                            >
                              <SendIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </form>
                      )}
                    />
                  )}
                </ListItem>
              </div>
            ))}
          </List>
        ) : (
          <p className={classes.text}>Aucune douleur enregistrée</p>
        )}
      </div>
    </Paper>
  );
};

export default DayInformation;
