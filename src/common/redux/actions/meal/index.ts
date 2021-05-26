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
import toastLocale from "common/helpers/toast/locale";
import { Meal } from "common/types/meal";
import Firebase from "common/firebase/Firebase";
import { MEAL } from "common/constants/ressources";
import { formatDataSnapshotValues } from "common/helpers/ressources";
import { MealAction } from "./types";

export const SAVE_MEAL = "SAVE_MEAL";
export const RESET_MEAL = "RESET_MEAL";

export const saveMeal = (meal: Meal): MealAction => ({
  type: SAVE_MEAL,
  ...meal,
});

export const resetMeal = (): Pick<MealAction, "type"> => ({
  type: RESET_MEAL,
});

export const getMeal = (
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
          const ressource = new Firebase(user.uid, MEAL);
          const mealSnap = await ressource.getFilteredDataSnapshotByDate(date);
          const meal = formatDataSnapshotValues<Meal>(mealSnap);
          if (meal.length > 0) {
            dispatch(saveMeal(meal[0]));
          } else {
            dispatch(resetMeal());
          }
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

export const getDailyMeal = (): ThunkAction<
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
    dispatch(await getMeal(currentDate));
  };
};

export const createMeal = (
  meal: Omit<Meal, "userId" | "id">
): ThunkAction<Promise<void>, AppState, Record<string, unknown>, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const ressource = new Firebase(user.uid, MEAL);
          const newMeal = {
            ...meal,
            date: meal.date.toString(),
            userId: user.uid,
          };
          await ressource.create<Omit<Meal, "id">>(newMeal);
          await dispatch(getMeal(meal.date));
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

export const updateMeal = (
  meal: Meal
): ThunkAction<Promise<void>, AppState, Record<string, unknown>, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const ressource = new Firebase(user.uid, MEAL);
          await ressource.edit<Meal>(meal);
          await dispatch(getDailyMeal());
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
