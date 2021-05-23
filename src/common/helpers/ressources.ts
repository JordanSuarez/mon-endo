import { keys } from "lodash";
import firebase from "firebase";

// eslint-disable-next-line import/prefer-default-export
export const formatDataSnapshotValues = <T>(
  snapshotValues: firebase.database.DataSnapshot
): T[] => {
  return keys(snapshotValues.val()).map((id) => {
    return {
      id,
      ...snapshotValues.val()[id],
    };
  });
};

// export const formatDataSnapshotValues = <T>(
//     snapshotValues: firebase.database.DataSnapshot
// ): T[] => {
//     const formatData = (object: any): T[] =>
//         keys(object).map((id) => {
//             const arr = keys(object[id])
//                 .map((itemId) => {
//                     return itemId;
//                 })
//                 .find((e) => {
//                     return isString(object[id][e]);
//                 });
//             if (!arr) {
//                 return formatData(object[id]);
//             }
//             return {
//                 id,
//                 ...object[id],
//             };
//         });
//
//     return formatData(snapshotValues.val());
// };
