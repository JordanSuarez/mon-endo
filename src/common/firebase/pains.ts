import firebase from "firebase/app";
import { Pain } from "../types/pains";

const painsPath = (userId: string) => `pains/${userId}`;
const firebaseDatabaseRef = (path: string) => firebase.database().ref(path);

export const painsRef = async (
  userId: string
): Promise<firebase.database.Reference> =>
  firebaseDatabaseRef(painsPath(userId));

export const createPain = async (
  pain: Omit<Pain, "id">
): Promise<firebase.database.Reference> =>
  firebaseDatabaseRef(painsPath(pain.userId)).push(pain);

export const removePain = async (
  painId: string,
  userId: string
): Promise<firebase.database.Reference> =>
  firebaseDatabaseRef(painsPath(userId)).child(painId).remove();

export const editPain = async (
  pain: Pain,
  userId: string
): Promise<firebase.database.Reference> =>
  firebaseDatabaseRef(painsPath(userId)).child(pain.id).update(pain);
