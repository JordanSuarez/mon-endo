import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import frLocale from "date-fns/locale/fr";
import { Button, Typography } from "@material-ui/core";
import { Form } from "react-final-form";
import { TextField, DateTimePicker } from "mui-rff";
import DateFnsUtils from "@date-io/date-fns";
import SendIcon from "@material-ui/icons/Send";

import { Pain } from "common/types/pains";
import { StylesInterface } from "./styles";
import locale from "./config/locale";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  createPain: (pain: Omit<Pain, "userId" | "id">) => void;
};

const PainForm = ({ classes, createPain }: Props): JSX.Element => {
  const onSubmit = (values: Omit<Pain, "userId" | "id">) => {
    if (values.date && values.description) {
      createPain(values);
    }
  };

  return (
    <>
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
    </>
  );
};

export default PainForm;
