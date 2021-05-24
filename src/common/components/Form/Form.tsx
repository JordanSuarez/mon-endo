import React, { useContext } from "react";

import { Button, Typography, IconButton } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import SendIcon from "@material-ui/icons/Send";
import ClearIcon from "@material-ui/icons/Clear";
import { Form as FormRff } from "react-final-form";

import { UPDATE } from "common/constants/context";
import { FormContext } from "common/context";
import { StylesInterface } from "./styles";
import locale from "./config/locale";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  onCancel: () => void;
  onSubmit: <T>(values: T) => void;
  title: string;
  initialValues?: any;
  children: JSX.Element;
};

const Form = ({
  classes,
  title,
  initialValues,
  onCancel,
  onSubmit,
  children,
}: Props): JSX.Element => {
  const context = useContext(FormContext);

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <FormRff
        onSubmit={onSubmit}
        // validate={validate}
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
                  <IconButton title="Ajouter une douleur" onClick={onCancel}>
                    <ClearIcon>Annuler</ClearIcon>
                  </IconButton>
                  <IconButton
                    title="Ajouter une douleur"
                    onClick={onCancel}
                    type="submit"
                    disabled={submitting || !valid || pristine || error}
                  >
                    <SendIcon>Enregistrer</SendIcon>
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

Form.defaultProps = {
  initialValues: {},
};

export default Form;
