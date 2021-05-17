import firebase from "firebase/app";
import {
  setItemToLocalStorage,
  TOKEN,
} from "common/authentication/authProvider";

export const getFirebaseToken = async (
  user: firebase.User | null
): Promise<void> => {
  const token = await user?.getIdToken();
  if (token) {
    setItemToLocalStorage(TOKEN, token);
  }
};

export const login = async (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential> =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const register = async (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential> =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const resetPassword = async (emailAddress: string): Promise<void> =>
  firebase.auth().sendPasswordResetEmail(emailAddress);
