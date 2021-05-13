import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";

import { getHomeRoute, getRegisterRoute } from "common/routing/routesResolver";
import AuthForm from "common/components/AuthForm/";
import { login } from "common/firebase/authentication";
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
    login(email, password)
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
