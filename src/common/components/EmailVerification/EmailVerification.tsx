import React from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Button } from "@material-ui/core";

import { ToastState } from "common/components/Toast/redux/reducers/types";
import { DispatchType } from "common/components/Toast/redux/actions/types";
import {
  generateToastPayload,
  handleErrorMessage,
} from "common/helpers/toast/toastMessage";
import toastLocale from "common/helpers/toast/locale";
import firebase from "firebase/app";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  hideToast: () => void;
  showToast: DispatchType;
};

const EmailVerification = ({
  classes,
  hideToast,
  showToast,
}: Props): JSX.Element => {
  const handleClick = () => {
    firebase
      .auth()
      .currentUser?.sendEmailVerification()
      .then(() => {
        hideToast();
        return showToast(
          generateToastPayload(
            toastLocale.email.validation.success as ToastState
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
    <Button
      type="button"
      color="primary"
      className={classes.root}
      onClick={handleClick}
    >
      Recevoir un nouvel email de vérification
    </Button>
  );
};

export default EmailVerification;
