import React from "react";

import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

import { getLoginRoute } from "common/routing/routesResolver";
import { setToken } from "common/authentication/authProvider";
import AuthForm from "common/components/AuthForm";
import locale from "./config/locale";
import textFields from "./config/textFields";
import schema from "./validation/schema";

const Register = (): JSX.Element => {
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
        history.push(getLoginRoute());
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
      route={getLoginRoute}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
