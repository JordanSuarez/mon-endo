import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { getHomeRoute, getRegisterRoute } from "common/routing/routesResolver";
import AuthForm from "common/components/AuthForm/";
import { login } from "common/firebase/authentication";
import { classes as classesProps } from "common/classes";
import { ToastState } from "common/components/Toast/redux/reducers/types";
import { DispatchType } from "common/components/Toast/redux/actions/types";
import {
  generateToastPayload,
  handleErrorMessage,
} from "common/helpers/toast/toastMessage";
import toastLocale from "common/helpers/toast/locale";
import { StylesInterface } from "./styles";
import schema from "./validation/schema";
import locale from "./config/locale";
import textFields from "./config/textFields";

export type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  showToast: DispatchType;
};

const Login = ({ classes, showToast }: Props): JSX.Element => {
  const history = useHistory();
  const onSubmit = (values: { email: string; password: string }) => {
    const { email, password } = values;
    login(email, password)
      .then(() => {
        history.push(getHomeRoute());

        return showToast(
          generateToastPayload(toastLocale.login.success as ToastState)
        );
      })
      .catch(({ code }) => {
        return showToast(
          generateToastPayload(handleErrorMessage(code) as ToastState)
        );
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

Login.propTypes = {
  ...classesProps,
};

export default Login;
