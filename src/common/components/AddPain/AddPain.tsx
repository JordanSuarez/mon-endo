import React, { forwardRef, ForwardedRef, useState } from "react";

import { ClassNameMap } from "@material-ui/styles";
import frLocale from "date-fns/locale/fr";
import { Drawer, Paper, Button, Typography } from "@material-ui/core";
import { Form } from "react-final-form";
import { TextField } from "mui-rff";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

import SendIcon from "@material-ui/icons/Send";
import { StylesInterface } from "./styles";

// TODO items and onClick types
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
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const handleDateChange = (date: MaterialUiPickersDate) => {
      setSelectedDate(date);
    };
    // TODO submit values, close drawer and display submitted values
    const onSubmit = (values: { description: string }) => {
      // console.log(`${format(date, "dd MMMM yyyy HH:mm")}`);
      const inputValues = { ...values, date: selectedDate };
      console.log(inputValues);
      toggleDrawer();
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
          <Typography variant="h6">Ajouter une douleur</Typography>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting, valid }) => (
              <form onSubmit={handleSubmit} className={classes.form}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                  <DateTimePicker
                    inputVariant="outlined"
                    ampm={false}
                    label="Date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    format="dd MMMM yyyy HH:mm"
                    disableFuture
                    className={classes.field}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  label="Description"
                  name="description"
                  variant="outlined"
                  className={classes.field}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<SendIcon />}
                  type="submit"
                  disabled={submitting || !valid}
                >
                  Ajouter
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
