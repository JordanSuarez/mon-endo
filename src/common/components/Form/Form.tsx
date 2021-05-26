import React, { useContext } from "react";

import { Button, Typography } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import SendIcon from "@material-ui/icons/Send";
import ClearIcon from "@material-ui/icons/Clear";
import { Form as FormRff } from "react-final-form";

import { UPDATE } from "common/constants/context";
import IconButton from "common/components/IconButton";
import { FormContext } from "common/context";
import { Config, FormApi, SubmissionErrors } from "final-form";
import { StylesInterface } from "./styles";
import locale from "./config/locale";

type Props = Partial<Config> & {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  onCancel: () => void;
  onSubmit: (
    values: any,
    form: FormApi<any, any>,
    callback?: (errors?: SubmissionErrors) => void
  ) => SubmissionErrors | Promise<SubmissionErrors> | void;
  title: string;
  children: JSX.Element;
  validate: any;
};

const Form = ({
  classes,
  title,
  initialValues,
  onCancel,
  onSubmit,
  children,
  validate,
}: Props): JSX.Element => {
  const context = useContext(FormContext);

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
              {children}
              {context === UPDATE ? (
                <div className={classes.iconsContainer}>
                  <IconButton
                    title={locale.button.cancel.label}
                    onClick={onCancel}
                    color="secondary"
                  >
                    <ClearIcon />
                  </IconButton>
                  <IconButton
                    title={locale.button.submit.label}
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
