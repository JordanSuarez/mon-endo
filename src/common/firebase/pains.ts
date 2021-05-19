import firebase from "firebase/app";

// eslint-disable-next-line import/prefer-default-export
export const painsRef = async (
  userId: string
): Promise<firebase.database.Reference> =>
  firebase.database().ref(`pains/${userId}`);

// TODO refacto addPain components
// export const createDailyPain = (values: any, userId: number): void => {
//   const pains = firebase.database().ref(`pains/${userId}`);
//   pains.push({ ...values, userId });
// };
