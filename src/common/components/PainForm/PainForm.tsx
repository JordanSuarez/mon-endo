import React, { useEffect, useState } from "react";

import { Button, Typography, MenuItem, Box } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import frLocale from "date-fns/locale/fr";
import { Form } from "react-final-form";
import {
  Select,
  DateTimePicker,
  makeValidate,
  makeRequired,
  TextField,
} from "mui-rff";
import DateFnsUtils from "@date-io/date-fns";
import SendIcon from "@material-ui/icons/Send";

import { Pain, PainType, PainTypeIntensity } from "common/types/pains";
import { StylesInterface } from "./styles";
import locale from "./config/locale";
import selectFields from "./config/selectFields";
import yupSchema from "./validation/schema";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  createPain: (pain: Omit<Pain, "userId" | "id">) => void;
  getPainsType: () => void;
  getPainsTypeIntensity: () => void;
  painsType: PainType[];
  painsTypeIntensity: PainTypeIntensity[];
};

const PainForm = ({
  classes,
  createPain,
  getPainsType,
  getPainsTypeIntensity,
  painsType,
  painsTypeIntensity,
}: Props): JSX.Element => {
  const [displayDescriptionField, setDisplayDescriptionField] = useState(false);
  const validate = makeValidate(yupSchema(displayDescriptionField));
  const required = makeRequired(yupSchema(displayDescriptionField));

  useEffect(() => {
    getPainsType();
    getPainsTypeIntensity();
  }, [getPainsType, getPainsTypeIntensity]);

  const onSubmit = (values: Omit<Pain, "userId" | "id">) => {
    createPain(values);
    setDisplayDescriptionField(false);
  };

  const handleClick = (values: PainType) => {
    if (values.name === "Autre") {
      return setDisplayDescriptionField(true);
    }
    return setDisplayDescriptionField(false);
  };

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
            {selectFields.map(
              ({ name: fieldName, label, variant, callback }) => (
                <Box className={classes.field} key={fieldName}>
                  <Select
                    label={label}
                    name={fieldName}
                    variant={variant}
                    required={required[fieldName]}
                  >
                    {callback(
                      fieldName === locale.field.pain.name
                        ? painsType
                        : painsTypeIntensity
                    ).map(({ id, name }) => (
                      <MenuItem
                        key={id}
                        value={id}
                        onClick={() => handleClick({ id, name })}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              )
            )}
            {displayDescriptionField && (
              <TextField
                label={locale.field.description.label}
                name={locale.field.description.name}
                variant="outlined"
                className={classes.field}
              />
            )}
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<SendIcon />}
              type="submit"
              disabled={
                (submitting || !valid || pristine) && displayDescriptionField
              }
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
