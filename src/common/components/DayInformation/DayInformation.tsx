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

import ActionButton from "common/components/ActionButton";
import AddIcon from "@material-ui/icons/Add";
import { Pain } from "common/types/pains";
import frLocale from "date-fns/locale/fr";
import { fullDate, formatDate, dateWithHours } from "common/helpers/date";
import { StylesInterface } from "./styles";

export type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  items: Array<Pain>;
  toggleDrawer: () => void;
};

const DayInformation = ({
  classes,
  items,
  toggleDrawer,
}: Props): JSX.Element => {
  const [itemId, setItemId] = useState("");
  const resetField = () => setItemId("");
  const title = formatDate(frLocale, new Date(), fullDate);

  const handleClick = (id: string) => {
    setItemId(id);
  };

  // TODO submit new values, reset itemId state and get new data list from api
  const onSubmit = (values: { description: string }) => {
    console.log({ ...values, id: itemId });
    resetField();
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
      <div className={classes.list}>
        {items.length > 0 ? (
          <List dense={false}>
            {items.map(({ id, date, description }) => (
              <div key={id}>
                <Divider className={classes.divider} />
                <ListItem className={classes.listItem}>
                  {itemId !== id ? (
                    <>
                      <ListItemText
                        primary={description}
                        secondary={formatDate(
                          frLocale,
                          new Date(date),
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
                          onClick={() => handleClick(id)}
                          color="primary"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleClick(id)}
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
                              frLocale,
                              new Date(date),
                              dateWithHours
                            )}
                            className={classes.listItemText}
                          />
                          <TextField
                            label="Description"
                            name="description"
                            variant="filled"
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
