import toastLocale from "common/helpers/toast/locale";
import { ToastPayload } from "common/helpers/toast/toastMessage";

export type FirebaseErrorMessage = {
  code: string;
  toastPayload: ToastPayload;
};

export const firebaseErrorMessages = [
  {
    code: "auth/email-already-in-use",
    toastPayload: toastLocale.register.error.emailAlreadyTaken,
  },
  {
    code: "auth/user-not-found",
    toastPayload: toastLocale.login.error.userNotFound,
  },
  {
    code: "auth/wrong-password",
    toastPayload: toastLocale.login.error.wrongCredentials,
  },
  {
    code: "auth/invalid-email",
    toastPayload: toastLocale.register.error.invalidEmail,
  },
] as Array<FirebaseErrorMessage>;
