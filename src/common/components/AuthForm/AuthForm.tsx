import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Button, InputAdornment, Typography, Box } from "@material-ui/core";
import { Form } from "react-final-form";
import { Link } from "react-router-dom";
import { makeRequired, makeValidate, TextField } from "mui-rff";

import { TextFieldsProps } from "common/types/textField";
import { Locale } from "common/types/authForm";
import { AnySchema } from "yup/lib/schema";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  children?: JSX.Element;
  locale: Locale;
  yupSchema: AnySchema<unknown, unknown, unknown>;
  textFields: Array<TextFieldsProps>;
  route: () => string;
  onSubmit: (values: { email: string; password: string }) => void;
};

const AuthForm = ({
  classes,
  children,
  locale,
  yupSchema,
  textFields,
  route,
  onSubmit,
}: Props): JSX.Element => {
  const validate = makeValidate(yupSchema);
  const required = makeRequired(yupSchema);
  return (
    <div className={classes.root}>
      <div className={classes.image} />
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, submitting, valid }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <Typography variant="h1" className={classes.title}>
              {locale.title}
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              {locale.form.title}
            </Typography>
            {textFields.map(({ name, label, icon, type }: TextFieldsProps) => (
              <Box className={classes.box} key={name}>
                <TextField
                  variant="outlined"
                  required={required[name]}
                  fullWidth
                  label={label}
                  name={name}
                  type={type}
                  className={classes.textField}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" className={classes.icon}>
                        {icon}
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            ))}
            {children}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submitButton}
              disabled={submitting || !valid}
            >
              {locale.form.button.submit.label}
            </Button>
            <Link to={route()} className={classes.link}>
              {locale.form.link.text} <span>{locale.form.link.span}</span>
            </Link>
          </form>
        )}
      />
    </div>
  );
};

AuthForm.defaultProps = {
  children: undefined,
};

export default AuthForm;
