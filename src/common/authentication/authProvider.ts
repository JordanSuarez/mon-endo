import firebase from "firebase/app";

export const TOKEN = "token";

export const setItemToLocalStorage = (key: string, item: string): void =>
  localStorage.setItem(key, item);

export const getItemFromLocalStorage = (key: string): string | null =>
  localStorage.getItem(key);

export const isAuthenticated = (): string | null =>
  getItemFromLocalStorage(TOKEN);

export const logout = async (): Promise<void[]> => {
  const signOut = firebase.auth().signOut();
  const removeToken = localStorage.removeItem(TOKEN);
  return Promise.all([signOut, removeToken]);
};
