import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Button, InputAdornment, Typography, Box } from "@material-ui/core";
import { makeRequired, makeValidate, TextField, TextFieldProps } from "mui-rff";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { Form } from "react-final-form";
import firebase from "firebase/app";
import { useHistory, Link } from "react-router-dom";

import { getHomeRoute, getRegisterRoute } from "common/routing/routesResolver";
import { setToken } from "common/authentication/authProvider";
import { StylesInterface } from "./styles";
import schema from "./validation/schema";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
};

interface TextFieldsProps extends TextFieldProps {
  icon: JSX.Element;
}

const Login = ({ classes }: Props): JSX.Element => {
  const history = useHistory();
  const onSubmit = (values: { email: string; password: string }) => {
    const { email, password } = values;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        const token = await user?.getIdToken();
        if (token) {
          setToken(token);
        }
        history.push(getHomeRoute());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const validate = makeValidate(schema);
  const required = makeRequired(schema);

  const textFields = [
    {
      name: "email",
      label: "Email",
      variant: "outlined",
      type: "text",
      icon: <PersonIcon />,
    },
    {
      name: "password",
      label: "Mot de passe",
      type: "password",
      variant: "outlined",
      icon: <LockIcon />,
    },
  ] as Array<TextFieldsProps>;

  return (
    <div className={classes.root}>
      <div className={classes.image} />
      <Form
        onSubmit={onSubmit}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className={classes.form}>
            <Typography variant="h1" className={classes.title}>
              Mon endo
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              Login
            </Typography>
            {textFields.map(({ name, label, icon, type }) => (
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
            <Button type="button" color="primary" className={classes.button}>
              Forgot password?
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submitButton}
            >
              toto
            </Button>

            <Link to={getRegisterRoute()} className={classes.link}>
              Not a registered user yet? <span>Sign up now</span>
            </Link>
          </form>
        )}
      />
    </div>
  );
};

export default Login;
