import React from "react";

import { useHistory } from "react-router-dom";

import AuthForm from "common/components/AuthForm";
import { resetPassword } from "common/firebase/authentication";
import { DispatchType } from "common/components/Toast/redux/actions/types";
import { AuthFormContext } from "common/context";
import { RECOVERY } from "common/constants/context";
import {
  generateToastPayload,
  handleErrorMessage,
} from "common/helpers/toast/toastMessage";
import toastLocale from "common/helpers/toast/locale";
import { ToastState } from "common/components/Toast/redux/reducers/types";
import { getLoginRoute } from "common/routing/routesResolver";
import schema from "./validation/schema";
import locale from "./config/locale";
import textFields from "./config/textFields";

export type Props = {
  showToast: DispatchType;
};

const PasswordRecovery = ({ showToast }: Props): JSX.Element => {
  const history = useHistory();
  const onSubmit = ({ email }: { email: string }) => {
    resetPassword(email)
      .then(() => {
        history.push(getLoginRoute());
        return showToast(
          generateToastPayload(
            toastLocale.password.recovery.success as ToastState
          )
        );
      })
      .catch(({ code }) => {
        return showToast(
          generateToastPayload(handleErrorMessage(code) as ToastState)
        );
      });
  };

  return (
    <AuthFormContext.Provider value={RECOVERY}>
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

export default PasswordRecovery;
