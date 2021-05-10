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
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const handleDateChange = (date: MaterialUiPickersDate) => {
      setSelectedDate(date);
    };

    // TODO submit values, close drawer and display submitted values
    const onSubmit = (values: { description: string }) => {
      const inputValues = { ...values, date: selectedDate };
      if (values.description) {
        // TODO post to API
        console.log(inputValues);
        // console.log(`${format(date, "dd MMMM yyyy HH:mm")}`);
        toggleDrawer();
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
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                  <DateTimePicker
                    inputVariant="outlined"
                    ampm={false}
                    label={locale.field.date.label}
                    value={selectedDate}
                    onChange={handleDateChange}
                    format={locale.field.date.format}
                    disableFuture
                    className={classes.field}
                  />
                </MuiPickersUtilsProvider>
                <TextField
                  label={locale.field.description.label}
                  name={locale.field.description.name}
                  variant="outlined"
                  className={classes.field}
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
