import firebase from "firebase/app";

const TOKEN = "token";

export const setToken = (token: string): void =>
  localStorage.setItem(TOKEN, token);

export const getToken = (): string | null => localStorage.getItem(TOKEN);

export const isAuthenticated = (): string | null => getToken();

export const getFirebaseUserToken = async (): Promise<string | null> => {
  const fireBaseUser = firebase.auth().currentUser;
  if (fireBaseUser) {
    return fireBaseUser.getIdToken();
  }
  return null;
};

export const logout = async (): Promise<void[]> => {
  const signOut = firebase.auth().signOut();
  const removeToken = localStorage.removeItem(TOKEN);
  return Promise.all([signOut, removeToken]);
};
