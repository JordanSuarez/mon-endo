import { keys } from "lodash";
import frLocale from "date-fns/locale/fr";
import firebase from "firebase";
import { dateWithoutHours, formatDate } from "./date";

// TODO add generic alias
// eslint-disable-next-line import/prefer-default-export
export const formatDataSnapshotValues = (
  date: string,
  snapshotValues: firebase.database.DataSnapshot
): Array<any> => {
  return keys(snapshotValues.val())
    .filter((id) => {
      const datePain = formatDate(
        new Date(snapshotValues.val()[id].date),
        frLocale,
        dateWithoutHours
      );
      return datePain === date;
    })
    .map((id) => ({
      id,
      ...snapshotValues.val()[id],
    }));
};
