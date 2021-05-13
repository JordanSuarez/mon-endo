import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Button } from "@material-ui/core";

import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

import { getHomeRoute, getRegisterRoute } from "common/routing/routesResolver";
import { setToken } from "common/authentication/authProvider";
import AuthForm from "common/components/AuthForm/";
import { StylesInterface } from "./styles";
import schema from "./validation/schema";
import locale from "./config/locale";
import textFields from "./config/textFields";

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

  return (
    <AuthForm
      locale={locale}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      yupSchema={schema}
      textFields={textFields}
      route={getRegisterRoute}
      onSubmit={onSubmit}
    >
      <Button type="button" color="primary" className={classes.button}>
        {locale.form.button.forgot.label}
      </Button>
    </AuthForm>
  );
};

export default Login;
