import React from "react";

import { useHistory } from "react-router-dom";

import { getHomeRoute } from "common/routing/routesResolver";
import AuthForm from "common/components/AuthForm/";
import { getFirebaseToken, login } from "common/firebase/authentication";
import { ToastState } from "common/components/Toast/redux/reducers/types";
import { DispatchType } from "common/components/Toast/redux/actions/types";
import {
  generateToastPayload,
  handleErrorMessage,
} from "common/helpers/toast/toastMessage";
import toastLocale from "common/helpers/toast/locale";
import { AuthFormContext } from "common/context";
import { LOGIN } from "common/constants/context";
import { unverifiedEmail } from "common/firebase/errorMessages";
import schema from "./validation/schema";
import locale from "./config/locale";
import textFields from "./config/textFields";

export type Props = {
  showToast: DispatchType;
};

const Login = ({ showToast }: Props): JSX.Element => {
  const history = useHistory();
  const onSubmit = (values: { email: string; password: string }) => {
    const { email, password } = values;
    login(email, password)
      .then(async ({ user }) => {
        if (!user?.emailVerified) {
          return showToast(
            generateToastPayload(
              handleErrorMessage(unverifiedEmail) as ToastState
            )
          );
        }
        await getFirebaseToken(user);
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
    <AuthFormContext.Provider value={LOGIN}>
      <AuthForm
        locale={locale}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        yupSchema={schema}
        textFields={textFields}
        onSubmit={onSubmit}
      />
    </AuthFormContext.Provider>
  );
};

export default Login;
