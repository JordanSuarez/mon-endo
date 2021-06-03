import React, { useContext, useState } from "react";

import { Button, Typography } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import SendIcon from "@material-ui/icons/Send";
import ClearIcon from "@material-ui/icons/Clear";
import { Form as FormRff } from "react-final-form";
import { Config } from "final-form";

import { CREATE, UPDATE } from "common/constants/context";
import IconButton from "common/components/IconButton";
import { FormContext } from "common/context";
import { get } from "lodash";
import locale from "./config/locale";
import { StylesInterface } from "./styles";
import DatePicker from "../DatePicker";

type Props = Partial<Config> & {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  onCancel: () => void;
  handleSubmitForm: (values: any) => void;
  title: string;
  children: JSX.Element;
  validate: any;
  date: string;
};

const Form = ({
  classes,
  title,
  initialValues,
  onCancel,
  handleSubmitForm,
  children,
  validate,
  date,
}: Props): JSX.Element => {
  const context = useContext(FormContext);
  const [selectedDate, setSelectedDate] = useState(new Date(date) as Date);

  const onSubmit = (values: FormData): void => {
    const inputValues = {
      ...values,
      date: selectedDate,
    };
    handleSubmitForm(inputValues);
  };
  return (
    <>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <FormRff
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
        render={({ handleSubmit, submitting, valid, pristine, error }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <div
              className={
                context === UPDATE
                  ? classes.updateFieldsContainer
                  : classes.createFieldsContainer
              }
            >
              {context === CREATE && (
                <DatePicker
                  minDate={get(initialValues, "date", "")}
                  value={selectedDate}
                  onChange={(dateTime) => setSelectedDate(dateTime as Date)}
                  className={classes.field}
                />
              )}
              {children}
              {context === UPDATE ? (
                <div className={classes.iconsContainer}>
                  <IconButton
                    title={locale.button.cancel.label}
                    onClick={onCancel}
                    color="secondary"
                    className={classes.icon}
                  >
                    <ClearIcon />
                  </IconButton>
                  <IconButton
                    title={locale.button.submit.label}
                    type="submit"
                    disabled={submitting || !valid || pristine || error}
                    className={classes.icon}
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
                  {locale.button.submit.label}
                </Button>
              )}
            </div>
          </form>
        )}
      />
    </>
  );
};

export default Form;
