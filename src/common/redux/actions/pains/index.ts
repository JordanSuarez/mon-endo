import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import firebase from "firebase/app";

import {
  createPain,
  editPain,
  painsRef,
  removePain,
} from "common/firebase/pains";
import {
  generateToastPayload,
  handleErrorMessage,
} from "common/helpers/toast/toastMessage";
import { dateWithoutHours, formatDate } from "common/helpers/date";
import { showToast } from "common/components/Toast/redux/actions";
import { Pain } from "common/types/pains";
import { AppState } from "common/types/redux";
import { keys } from "lodash";
import frLocale from "date-fns/locale/fr";
import { ToastState } from "common/components/Toast/redux/reducers/types";
import toastLocale from "common/helpers/toast/locale";
import { hideDrawer } from "common/components/Drawer/redux/actions";
import { PainsAction } from "./types";

export const SAVE_PAINS = "SAVE_PAINS";

export const savePains = (pains: Array<Pain>): PainsAction => ({
  type: SAVE_PAINS,
  pains,
});

export const getPains = (
  date: string
): ThunkAction<Promise<void>, AppState, Record<string, unknown>, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<
      Record<string, unknown>,
      Record<string, unknown>,
      AnyAction
    >
  ): Promise<void> => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const reference = await painsRef(user.uid);
          await reference.once("value", (snap) => {
            const painsObject = snap.val();
            const pains = keys(painsObject)
              .filter((id) => {
                const datePain = formatDate(
                  new Date(painsObject[id].date),
                  frLocale,
                  dateWithoutHours
                );
                return datePain === date;
              })
              .map((id) => ({
                id,
                ...painsObject[id],
              }));
            dispatch(savePains(pains));
          });
        } catch (err) {
          dispatch(
            showToast(
              generateToastPayload(handleErrorMessage(err) as ToastState)
            )
          );
        }
      }
    });
  };
};

export const getDailyPains = (): ThunkAction<
  Promise<void>,
  AppState,
  Record<string, unknown>,
  AnyAction
> => {
  return async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>,
    getState: () => AppState
  ): Promise<void> => {
    const currentDate = getState().root.date;
    dispatch(await getPains(currentDate));
  };
};

export const addPain = (
  pain: Omit<Pain, "userId" | "id">
): ThunkAction<Promise<void>, AppState, Record<string, unknown>, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const newPain = {
            ...pain,
            date: pain.date.toString(),
            userId: user.uid,
          };
          await createPain(newPain);
          await dispatch(getDailyPains());
          dispatch(hideDrawer());
          dispatch(
            showToast(
              generateToastPayload(
                toastLocale.pain.create.success as ToastState
              )
            )
          );
        } catch (err) {
          dispatch(
            showToast(
              generateToastPayload(handleErrorMessage(err) as ToastState)
            )
          );
        }
      }
    });
  };
};

export const deletePain = (
  painId: string
): ThunkAction<Promise<void>, AppState, Record<string, unknown>, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          await removePain(painId, user.uid);
          await dispatch(getDailyPains());
          dispatch(
            showToast(
              generateToastPayload(
                toastLocale.pain.delete.success as ToastState
              )
            )
          );
        } catch (err) {
          dispatch(
            showToast(
              generateToastPayload(handleErrorMessage(err) as ToastState)
            )
          );
        }
      }
    });
  };
};

export const updatePain = (
  pain: Pain
): ThunkAction<Promise<void>, AppState, Record<string, unknown>, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          await editPain(pain, user.uid);
          await dispatch(getDailyPains());
          dispatch(
            showToast(
              generateToastPayload(
                toastLocale.pain.update.success as ToastState
              )
            )
          );
        } catch (err) {
          dispatch(
            showToast(
              generateToastPayload(handleErrorMessage(err) as ToastState)
            )
          );
        }
      }
    });
  };
};
