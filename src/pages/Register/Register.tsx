import React from "react";

import { useHistory } from "react-router-dom";

import { getHomeRoute, getLoginRoute } from "common/routing/routesResolver";
import AuthForm from "common/components/AuthForm";
import { register } from "common/firebase/authentication";
import {
  generateToastPayload,
  handleErrorMessage,
} from "common/helpers/toast/toastMessage";
import toastLocale from "common/helpers/toast/locale";
import { ToastState } from "common/components/Toast/redux/reducers/types";
import { DispatchType } from "common/components/Toast/redux/actions/types";
import locale from "./config/locale";
import textFields from "./config/textFields";
import schema from "./validation/schema";

type Props = {
  showToast: DispatchType;
};

const Register = ({ showToast }: Props): JSX.Element => {
  const history = useHistory();
  const onSubmit = (values: { email: string; password: string }) => {
    const { email, password } = values;
    register(email, password)
      .then(() => {
        history.push(getHomeRoute());
        return showToast(
          generateToastPayload(toastLocale.register.success as ToastState)
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
      route={getLoginRoute}
      onSubmit={onSubmit}
    />
  );
};

export default Register;
