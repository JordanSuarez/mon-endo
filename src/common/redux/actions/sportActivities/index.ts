import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import firebase from "firebase/app";

import {
  generateToastPayload,
  handleErrorMessage,
} from "common/helpers/toast/toastMessage";
import { showToast } from "common/components/Toast/redux/actions";
import { AppState } from "common/types/redux";
import { ToastState } from "common/components/Toast/redux/reducers/types";
import Firebase from "common/firebase/Firebase";
import { SPORT_ACTIVITIES } from "common/constants/ressources";
import { formatDataSnapshotValues } from "common/helpers/ressources";
import { SportActivity } from "common/types/sportActivity";
import { hideDrawer } from "common/components/Drawer/redux/actions";
import toastLocale from "common/helpers/toast/locale";
import { SportActivitiesAction } from "./types";

export const SAVE_SPORT_ACTIVITIES = "SAVE_SPORT_ACTIVITIES";

export const saveSportActivities = (
  sportActivities: SportActivity[]
): SportActivitiesAction => ({
  type: SAVE_SPORT_ACTIVITIES,
  sportActivities,
});

export const getSportActivities = (): ThunkAction<
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
    >,
    getState: () => AppState
  ): Promise<void> => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const currentDate = getState().root.date;
          const ressource = new Firebase(user.uid, SPORT_ACTIVITIES);
          const sportActivities = formatDataSnapshotValues<SportActivity>(
            await ressource.getFilteredDataSnapshotByDate(currentDate)
          );
          dispatch(saveSportActivities(sportActivities));
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

export const createSportActivity = (
  sportActivity: Omit<SportActivity, "userId" | "id">
): ThunkAction<Promise<void>, AppState, Record<string, unknown>, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const firebaseRef = new Firebase(user.uid, SPORT_ACTIVITIES);
          const newSportActivity = {
            ...sportActivity,
            userId: user.uid,
          };
          await firebaseRef.create<Omit<SportActivity, "id">>(newSportActivity);
          await dispatch(getSportActivities());
          dispatch(hideDrawer());
          dispatch(
            showToast(
              generateToastPayload(
                toastLocale.sportActivity.create.success as ToastState
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

export const deleteSportActivity = (
  sportActivityId: string
): ThunkAction<Promise<void>, AppState, Record<string, unknown>, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const ressource = new Firebase(user.uid, SPORT_ACTIVITIES);
          await ressource.remove(sportActivityId);
          await dispatch(getSportActivities());
          dispatch(
            showToast(
              generateToastPayload(
                toastLocale.sportActivity.delete.success as ToastState
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

export const updateSportActivity = (
  sportActivity: SportActivity
): ThunkAction<Promise<void>, AppState, Record<string, unknown>, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const ressource = new Firebase(user.uid, SPORT_ACTIVITIES);
          await ressource.edit<SportActivity>(sportActivity);
          await dispatch(getSportActivities());
          dispatch(
            showToast(
              generateToastPayload(
                toastLocale.sportActivity.update.success as ToastState
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
