import React, { useEffect, useState, useContext } from "react";

import { Button, Typography, IconButton } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import SendIcon from "@material-ui/icons/Send";
import ClearIcon from "@material-ui/icons/Clear";
import frLocale from "date-fns/locale/fr";
import { Form } from "react-final-form";
import { DateTimePicker, makeValidate, makeRequired, TextField } from "mui-rff";
import DateFnsUtils from "@date-io/date-fns";
import { get } from "lodash";

import { Pain, PainType, PainTypeIntensity } from "common/types/pains";
import { UPDATE } from "common/constants/context";
import { PainFormContext } from "common/context";
import Select from "common/components/Select";
import { StylesInterface } from "./styles";
import locale from "./config/locale";
import selectFields from "./config/selectFields";
import yupSchema from "./validation/schema";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  handleSubmitForm: (pain: Omit<Pain, "userId" | "id">) => void;
  getPainsType: () => void;
  onCancel: () => void;
  getPainsTypeIntensity: () => void;
  painsType: PainType[];
  painsTypeIntensity: PainTypeIntensity[];
  title: string;
  initialValues: Pain;
  descriptionFieldIsActive: boolean;
};

const PainForm = ({
  classes,
  handleSubmitForm,
  getPainsType,
  getPainsTypeIntensity,
  painsType,
  painsTypeIntensity,
  title,
  initialValues,
  descriptionFieldIsActive,
  onCancel,
}: Props): JSX.Element => {
  const context = useContext(PainFormContext);

  const [displayDescriptionField, setDisplayDescriptionField] = useState(
    descriptionFieldIsActive || false
  );
  const [pain, setPain] = useState(
    context === UPDATE
      ? (initialValues as Pain)
      : ({} as Omit<Pain, "userId" | "date" | "description" | "id">)
  );
  const validate = makeValidate(yupSchema(displayDescriptionField));
  const required = makeRequired(yupSchema(displayDescriptionField));

  useEffect(() => {
    getPainsType();
    getPainsTypeIntensity();
  }, [getPainsType, getPainsTypeIntensity]);

  const onSubmit = ({
    date,
    description,
  }: Omit<Pain, "userId" | "id" | "painType" | "painTypeIntensity">): void => {
    setDisplayDescriptionField(false);
    const inputValues = {
      ...pain,
      date: date.toString(),
      description: pain.painType.name === "Autre" ? description : "",
    };
    handleSubmitForm(inputValues);
  };

  const handleClick = (values: PainType, fieldName: string): void => {
    if (fieldName === locale.field.painType.name) {
      if (values.name === "Autre") {
        setDisplayDescriptionField(true);
      } else {
        setDisplayDescriptionField(false);
      }
      setPain({ ...pain, painType: values });
    } else {
      setPain({
        ...pain,
        painTypeIntensity: values,
      });
    }
  };

  const initialFormValues =
    context === UPDATE
      ? {
          ...initialValues,
          painType: get(initialValues, "painType.id", {
            id: "",
            name: "",
          }),
          painTypeIntensity: get(initialValues, "painTypeIntensity.id", {
            id: "",
            name: "",
          }),
        }
      : initialValues;

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialFormValues}
        render={({ handleSubmit, submitting, valid, pristine, error }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <div
              className={
                context === UPDATE
                  ? classes.updateFieldsContainer
                  : classes.createFieldsContainer
              }
            >
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
                minDate={get(initialValues, "date", "")}
                className={classes.field}
              />
              {selectFields.map((fieldProps) => (
                <Select
                  key={fieldProps.name}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  handleClick={handleClick}
                  required={required}
                  fieldProps={fieldProps}
                  options={
                    fieldProps.name === locale.field.painType.name
                      ? painsType
                      : painsTypeIntensity
                  }
                />
              ))}
              {displayDescriptionField && (
                <TextField
                  label={locale.field.description.label}
                  name={locale.field.description.name}
                  variant="outlined"
                  className={classes.field}
                  required={required[locale.field.description.name]}
                />
              )}
              {context === UPDATE ? (
                <div className={classes.iconsContainer}>
                  <IconButton
                    edge="end"
                    aria-label="cancel"
                    onClick={onCancel}
                    color="secondary"
                  >
                    <ClearIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    color="primary"
                    aria-label="submit"
                    type="submit"
                    disabled={submitting || !valid || pristine || error}
                  >
                    <SendIcon />
                  </IconButton>
                </div>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<SendIcon />}
                  type="submit"
                  disabled={submitting || !valid || pristine || error}
                >
                  {locale.field.button.label}
                </Button>
              )}
            </div>
          </form>
        )}
      />
    </>
  );
};

export default PainForm;
