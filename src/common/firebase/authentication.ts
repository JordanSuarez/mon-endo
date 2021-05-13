import firebase from "firebase";
import { setToken } from "../authentication/authProvider";

const getFirebaseToken = async (user: firebase.User | null): Promise<void> => {
  const token = await user?.getIdToken();
  if (token) {
    setToken(token);
  }
};

export const login = async (email: string, password: string): Promise<void> =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(async ({ user }) => getFirebaseToken(user));

export const register = async (
  email: string,
  password: string
): Promise<void> =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async ({ user }) => getFirebaseToken(user));
