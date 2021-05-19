import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import firebase from "firebase/app";

import { Pain } from "common/types/pains";
import { keys } from "lodash";
import frLocale from "date-fns/locale/fr";
import { painsRef } from "common/firebase/pains";
import { dateWithoutHours, formatDate } from "common/helpers/date";
import { PainsAction } from "./types";

export const SAVE_PAINS = "SAVE_PAINS";

export const savePains = (pains: Array<Pain>): PainsAction => ({
  type: SAVE_PAINS,
  pains,
});

// thunk action
export const getDailyPains = (
  currentDate: string
): ThunkAction<
  Promise<void>,
  Record<string, unknown>,
  Record<string, unknown>,
  AnyAction
> => {
  // Invoke API
  return async (
    dispatch: ThunkDispatch<
      Record<string, unknown>,
      Record<string, unknown>,
      AnyAction
    >
  ): Promise<void> => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        painsRef(user.uid).then((values) => {
          values.once("value", (snap) => {
            const painsObject = snap.val();
            const pains = keys(painsObject)
              .filter((id) => {
                const datePain = formatDate(
                  frLocale,
                  new Date(painsObject[id].date),
                  dateWithoutHours
                );
                return datePain === currentDate;
              })
              .map((id) => ({
                id,
                ...painsObject[id],
              }));
            dispatch(savePains(pains));
          });
        });
      }
    });
  };
};
