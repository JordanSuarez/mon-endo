import toastLocale from "common/helpers/toast/locale";
import { ToastPayload } from "common/helpers/toast/toastMessage";

export type FirebaseErrorMessage = {
  code: string;
  toastPayload: ToastPayload;
};

export const emailAlreadyInUse = "auth/email-already-in-use";
export const userNotFound = "auth/user-not-found";
export const wrongPassword = "auth/wrong-password";
export const invalidEmail = "auth/invalid-email";
export const unverifiedEmail = "auth/unverified-email";

export const firebaseErrorMessages = [
  {
    code: emailAlreadyInUse,
    toastPayload: toastLocale.register.error.emailAlreadyTaken,
  },
  {
    code: userNotFound,
    toastPayload: toastLocale.login.error.userNotFound,
  },
  {
    code: wrongPassword,
    toastPayload: toastLocale.login.error.wrongCredentials,
  },
  {
    code: invalidEmail,
    toastPayload: toastLocale.register.error.invalidEmail,
  },
  {
    code: unverifiedEmail,
    toastPayload: toastLocale.login.error.unverifiedEmail,
  },
] as Array<FirebaseErrorMessage>;
