import React, { useEffect } from "react";

import { Button, Typography, MenuItem, Box } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import frLocale from "date-fns/locale/fr";
import { Form } from "react-final-form";
import { Select, DateTimePicker, makeValidate, makeRequired } from "mui-rff";
import DateFnsUtils from "@date-io/date-fns";
import SendIcon from "@material-ui/icons/Send";

import { Pain } from "common/types/pains";
import { StylesInterface } from "./styles";
import locale from "./config/locale";
import selectFields from "./config/selectFields";
import yupSchema from "./validation/schema";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  createPain: (pain: Omit<Pain, "userId" | "id">) => void;
  getPainTypes: () => void;
};

const PainForm = ({
  classes,
  createPain,
  getPainTypes,
}: Props): JSX.Element => {
  const validate = makeValidate(yupSchema);
  const required = makeRequired(yupSchema);

  useEffect(() => {
    getPainTypes();
  }, [getPainTypes]);

  const onSubmit = (values: Omit<Pain, "userId" | "id">) => {
    createPain(values);
  };

  const pains = [
    { id: "1", description: "ovaire" },
    { id: "2", description: "jambe" },
    { id: "3", description: "ventre" },
    { id: "4", description: "main" },
    { id: "5", description: "pied" },
    { id: "6", description: "tete" },
  ];

  const intensity = [
    { id: "1", description: "faible" },
    { id: "2", description: "modéré" },
    { id: "3", description: "intense" },
  ];

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        {locale.title}
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, submitting, valid, pristine }) => (
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
            {selectFields.map(({ name, label, variant, painTypes }) => (
              <Box className={classes.field} key={name}>
                <Select
                  label={label}
                  name={name}
                  variant={variant}
                  required={required[name]}
                >
                  {painTypes(
                    name === locale.field.pain.name ? pains : intensity
                  ).map(({ id, description }) => (
                    <MenuItem key={id} value={id}>
                      {description}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            ))}
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<SendIcon />}
              type="submit"
              disabled={submitting || !valid || pristine}
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
