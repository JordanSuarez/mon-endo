import { keys } from "lodash";
import firebase from "firebase";

// TODO add generic alias
// eslint-disable-next-line import/prefer-default-export
export const formatDataSnapshotValues = (
  date: string,
  snapshotValues: firebase.database.DataSnapshot
): Array<any> => {
  return keys(snapshotValues.val()).map((id) => ({
    id,
    ...snapshotValues.val()[id],
  }));
};
