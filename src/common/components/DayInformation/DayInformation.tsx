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

import { DayInformationInterface } from "common/types/dayInformation";
import ActionButton from "common/components/ActionButton";
import AddIcon from "@material-ui/icons/Add";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  items: Array<DayInformationInterface>;
  toggleDrawer: () => void;
};

const DayInformation = ({
  classes,
  items,
  toggleDrawer,
}: Props): JSX.Element => {
  const [itemId, setItemId] = useState(-1);
  const resetField = () => setItemId(-1);

  const handleClick = (id: number) => {
    setItemId(id);
  };

  // TODO submit new values, reset itemId state and get new data list from api
  const onSubmit = (values: { field: string }) => {
    console.log(values);
    resetField();
  };
  return (
    <Paper elevation={3} className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h6" className={classes.title}>
          Jeudi 8 Avril 2020
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
            {items.map(({ id, date, label }) => (
              <div key={id}>
                <Divider className={classes.divider} />
                <ListItem className={classes.listItem}>
                  {itemId !== id ? (
                    <>
                      <ListItemText
                        primary={label}
                        secondary={date}
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
                      initialValues={{ field: label }}
                      render={({ handleSubmit, submitting, valid }) => (
                        <form onSubmit={handleSubmit} className={classes.form}>
                          <ListItemText
                            secondary={date}
                            className={classes.listItemText}
                          />
                          <TextField
                            label="Description"
                            name="field"
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
