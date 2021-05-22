import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import firebase from "firebase/app";

import {
  generateToastPayload,
  handleErrorMessage,
} from "common/helpers/toast/toastMessage";
import { showToast } from "common/components/Toast/redux/actions";
import { PainType } from "common/types/pains";
import { AppState } from "common/types/redux";
import { ToastState } from "common/components/Toast/redux/reducers/types";
import Firebase from "common/firebase/Firebase";
import { PAINS_TYPE } from "common/constants/ressources";
import { formatDataSnapshotValues } from "common/helpers/ressources";
import { PainsTypeAction } from "./types";

export const SAVE_PAINS_TYPE = "SAVE_PAINS_TYPE";

export const savePainsType = (painsType: PainType[]): PainsTypeAction => ({
  type: SAVE_PAINS_TYPE,
  painsType,
});

export const getPainsType = (): ThunkAction<
  Promise<void>,
  AppState,
  Record<string, unknown>,
  AnyAction
> => {
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
          const ressource = new Firebase(user.uid, PAINS_TYPE);
          const painsType = formatDataSnapshotValues<PainType>(
            await ressource.getDataSnapshot(false)
          );
          dispatch(savePainsType(painsType));
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
