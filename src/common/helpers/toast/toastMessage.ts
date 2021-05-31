import { ToastState } from "common/components/Toast/redux/reducers/types";
import {
  FirebaseErrorMessage,
  firebaseErrorMessages,
} from "common/firebase/errorMessages";
import toastLocale from "./locale";

export type ToastPayload = Omit<ToastState, "isOpen">;

export const generateToastPayload = ({
  title,
  content,
  severity,
}: ToastPayload): ToastState => ({
  isOpen: true,
  title,
  content,
  severity,
});

export const handleErrorMessage = (errorMessage: string): ToastPayload => {
  const firebaseErrorMessage = firebaseErrorMessages.find(
    ({ code }) => code === errorMessage
  ) as FirebaseErrorMessage;

  return (firebaseErrorMessage
    ? firebaseErrorMessage.toastPayload
    : toastLocale.error.badRequest) as ToastPayload;
};
