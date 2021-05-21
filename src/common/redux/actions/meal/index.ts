import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import firebase from "firebase/app";
import { keys } from "lodash";

import { createMeal, editMeal, mealRef } from "common/firebase/meal";
import {
  generateToastPayload,
  handleErrorMessage,
} from "common/helpers/toast/toastMessage";
import { dateWithoutHours, formatDate } from "common/helpers/date";
import { showToast } from "common/components/Toast/redux/actions";
import { AppState } from "common/types/redux";

import frLocale from "date-fns/locale/fr";
import { ToastState } from "common/components/Toast/redux/reducers/types";
import toastLocale from "common/helpers/toast/locale";
import { Meal } from "common/types/meal";
import { MealAction } from "./types";

export const SAVE_MEAL = "SAVE_MEAL";

export const saveMeal = (meal: Meal): MealAction => ({
  type: SAVE_MEAL,
  ...meal,
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
          const reference = await mealRef(user.uid);
          await reference.once("value", (snap) => {
            const mealObject = snap.val();
            const meal = keys(mealObject)
              .filter((id) => {
                const dateMeal = formatDate(
                  new Date(mealObject[id].date),
                  frLocale,
                  dateWithoutHours
                );
                return dateMeal === date;
              })
              .map((id) => ({
                id,
                ...mealObject[id],
              }));
            if (meal.length > 0) {
              dispatch(saveMeal(meal[0]));
            }
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

export const addMeal = (
  meal: Omit<Meal, "userId" | "id">
): ThunkAction<Promise<void>, AppState, Record<string, unknown>, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const newMeal = {
            ...meal,
            date: meal.date.toString(),
            userId: user.uid,
          };
          await createMeal(newMeal);
          await dispatch(getDailyMeal());
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
          await editMeal(meal, user.uid);
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
