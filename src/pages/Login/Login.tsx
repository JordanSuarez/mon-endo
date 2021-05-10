import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { makeRequired, makeValidate, TextField } from "mui-rff";
import { Form } from "react-final-form";
import firebase from "firebase/app";

import { useHistory } from "react-router-dom";
import { getHomeRoute } from "common/routing/routesResolver";
import { StylesInterface } from "./styles";
import schema from "./validation/schema";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
};

const Login = ({ classes }: Props): JSX.Element => {
  const history = useHistory();
  const onSubmit = (values: { email: string; password: string }) => {
    const { email, password } = values;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(getHomeRoute());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const validate = makeValidate(schema);
  const required = makeRequired(schema);
  console.log(schema);
  return (
    <div className={classes.root}>
      <Form
        onSubmit={onSubmit}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required={required.email}
              fullWidth
              label="Email"
              name="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required={required.password}
              fullWidth
              label="Mot de passe"
              name="password"
              type="password"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              toto
            </Button>
          </form>
        )}
      />
    </div>
  );
};

export default Login;
