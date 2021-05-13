import React, { forwardRef, ForwardedRef } from "react";

import { ClassNameMap } from "@material-ui/styles";
import frLocale from "date-fns/locale/fr";
import { Drawer, Paper, Button, Typography } from "@material-ui/core";
import { Form } from "react-final-form";
import { TextField, DateTimePicker } from "mui-rff";
import DateFnsUtils from "@date-io/date-fns";
import SendIcon from "@material-ui/icons/Send";
import firebase from "firebase/app";
import { format } from "date-fns";

import { StylesInterface } from "./styles";
import locale from "./locale";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  toggleDrawer: () => void;
  isOpen: boolean;
};

const AddPain = forwardRef(
  (
    { classes, toggleDrawer, isOpen }: Props,
    ref: ForwardedRef<JSX.Element>
  ): JSX.Element => {
    // TODO submit values, close drawer and display submitted values
    const onSubmit = ({
      date,
      description,
    }: {
      date: Date;
      description: string;
    }) => {
      if (date && description) {
        const formattedDate = `${format(date, "dd MMMM yyyy HH:mm", {
          locale: frLocale,
        })}`;
        const formattedValues = {
          date: formattedDate,
          description,
        };

        const fireBaseUser = firebase.auth().currentUser;

        if (fireBaseUser) {
          fireBaseUser
            .getIdTokenResult()
            .then(({ claims }) => {
              const pains = firebase.database().ref("toto");
              pains
                .push({ ...formattedValues, userId: claims.user_id })
                .then(() => {
                  // TODO add feedback
                  toggleDrawer();
                })
                .catch(() => {
                  // TODO add feedback
                });
            })
            .catch(() => {});
        } else {
          console.log("nope");
        }
      }
    };

    return (
      <Drawer
        ref={ref}
        anchor="bottom"
        open={isOpen}
        onClose={() => toggleDrawer()}
        className={classes.root}
      >
        <Paper className={classes.paper}>
          <Typography variant="h6">{locale.title}</Typography>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting }) => (
              <form onSubmit={handleSubmit} className={classes.form}>
                <DateTimePicker
                  inputVariant="outlined"
                  ampm={false}
                  label={locale.field.date.label}
                  name={locale.field.date.name}
                  dateFunsUtils={DateFnsUtils}
                  locale={frLocale}
                  required
                  format={locale.field.date.format}
                  disableFuture
                  className={classes.field}
                />
                <TextField
                  label={locale.field.description.label}
                  name={locale.field.description.name}
                  variant="outlined"
                  className={classes.field}
                  required
                />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<SendIcon />}
                  type="submit"
                  disabled={submitting}
                >
                  {locale.field.button.label}
                </Button>
              </form>
            )}
          />
        </Paper>
      </Drawer>
    );
  }
);

export default AddPain;
