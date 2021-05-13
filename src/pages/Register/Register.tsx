import React from "react";

import { useHistory } from "react-router-dom";

import { getHomeRoute, getLoginRoute } from "common/routing/routesResolver";
import AuthForm from "common/components/AuthForm";
import { register } from "common/firebase/authentication";
import locale from "./config/locale";
import textFields from "./config/textFields";
import schema from "./validation/schema";

const Register = (): JSX.Element => {
  const history = useHistory();
  const onSubmit = (values: { email: string; password: string }) => {
    const { email, password } = values;
    register(email, password)
      .then(() => history.push(getHomeRoute()))
      .catch((err) => console.log(err));
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
