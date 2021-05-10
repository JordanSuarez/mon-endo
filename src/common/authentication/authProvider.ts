import firebase from "firebase/app";

export const getToken = async (): Promise<string | null> => {
  const fireBaseUser = firebase.auth().currentUser;
  if (!fireBaseUser) {
    return null;
  }
  return fireBaseUser.getIdToken(true).then((token) => token);
};

export const isAuthenticated = (): any => getToken().then((result) => result);

export const logout = (): Promise<void> => firebase.auth().signOut();
