import React, { useContext } from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Button, InputAdornment, Typography, Box } from "@material-ui/core";
import { Form } from "react-final-form";
import { Link, useHistory } from "react-router-dom";
import { makeRequired, makeValidate, TextField } from "mui-rff";

import { TextFieldsProps } from "common/types/textField";
import { AuthFormLocale } from "common/types/authForm";
import { AnySchema } from "yup/lib/schema";
import { AuthFormContext } from "common/context/AuthFormContext";
import { LOGIN, RECOVERY } from "common/constants/context";
import {
  getPasswordRecoveryRoute,
  getLoginRoute,
  getRegisterRoute,
} from "common/routing/routesResolver";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  locale: AuthFormLocale;
  yupSchema: AnySchema<unknown, unknown, unknown>;
  textFields: Array<TextFieldsProps>;
  onSubmit: (values: { email: string; password: string }) => void;
};

const AuthForm = ({
  classes,
  locale,
  yupSchema,
  textFields,
  onSubmit,
}: Props): JSX.Element => {
  const history = useHistory();
  const context = useContext(AuthFormContext);

  const route = () =>
    context === LOGIN ? getRegisterRoute() : getLoginRoute();

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
            {context === LOGIN && (
              <Button
                type="button"
                color="primary"
                className={classes.button}
                onClick={() => history.push(getPasswordRecoveryRoute())}
              >
                {locale.form.button.forgot.label}
              </Button>
            )}
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
            {context !== RECOVERY ? (
              <Link to={route()} className={classes.link}>
                {locale.form.link.text} <span>{locale.form.link.span}</span>
              </Link>
            ) : (
              <Button
                type="button"
                color="primary"
                className={classes.button}
                onClick={() => history.push(getLoginRoute())}
              >
                Retour
              </Button>
            )}
          </form>
        )}
      />
    </div>
  );
};

export default AuthForm;
