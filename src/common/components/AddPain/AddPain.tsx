import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import frLocale from "date-fns/locale/fr";
import { Drawer, Paper, Button, Typography } from "@material-ui/core";
import { Form } from "react-final-form";
import { TextField, DateTimePicker } from "mui-rff";
import DateFnsUtils from "@date-io/date-fns";
import SendIcon from "@material-ui/icons/Send";
import firebase from "firebase/app";

import { DispatchType } from "common/redux/actions/pains/types";
import { dateWithoutHours, formatDate } from "common/helpers/date";
import { StylesInterface } from "./styles";
import locale from "./locale";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  toggleDrawer: () => void;
  isOpen: boolean;
  getDailyPains: DispatchType;
  currentDate: string;
};

const AddPain = ({
  classes,
  toggleDrawer,
  isOpen,
  getDailyPains,
  currentDate,
}: Props): JSX.Element => {
  // TODO submit values, close drawer and display submitted values
  const onSubmit = (values: { date: Date; description: string }) => {
    if (values.date && values.description) {
      const fireBaseUser = firebase.auth().currentUser;
      if (fireBaseUser) {
        fireBaseUser
          .getIdTokenResult()
          .then(({ claims }) => {
            firebase
              .database()
              .ref(`pains/${claims.user_id}`)
              .push({
                ...values,
                date: values.date.toString(),
                userId: claims.user_id,
              })
              .then(() => {
                // TODO add feedback
                getDailyPains(currentDate);
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
};

export default AddPain;
