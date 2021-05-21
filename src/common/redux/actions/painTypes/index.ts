import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import firebase from "firebase/app";

import {
  generateToastPayload,
  handleErrorMessage,
} from "common/helpers/toast/toastMessage";
import { showToast } from "common/components/Toast/redux/actions";
import { PainTypes } from "common/types/painTypes";
import { AppState } from "common/types/redux";
import { ToastState } from "common/components/Toast/redux/reducers/types";
import toastLocale from "common/helpers/toast/locale";
import { hideDrawer } from "common/components/Drawer/redux/actions";
import Firebase from "common/firebase/Firebase";
import { PAIN_TYPES } from "common/constants/ressources";
import { formatDataSnapshotValues } from "common/helpers/ressources";
import { PainTypesAction } from "./types";

export const SAVE_PAIN_TYPES = "SAVE_PAIN_TYPES";

export const savePainTypes = (
  painTypes: Array<PainTypes>
): PainTypesAction => ({
  type: SAVE_PAIN_TYPES,
  painTypes,
});

export const getPainTypes = (): ThunkAction<
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
          const ressource = new Firebase(user.uid, PAIN_TYPES);
          const painTypeObject = await ressource.getDataSnapshot();
          console.log(painTypeObject);
          // const painType = formatDataSnapshotValues(date, mealObject);
          // dispatch(savePainTypes(painType));
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

export const createPainTypes = (
  pain: Omit<PainTypes, "userId" | "id">
): ThunkAction<Promise<void>, AppState, Record<string, unknown>, AnyAction> => {
  return async (
    dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
  ): Promise<void> => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const newPainTypes = {
            ...pain,
            // date: pain.date.toString(),
            userId: user.uid,
          };
          // await createPainTypes(newPainTypes);
          await dispatch(getPainTypes());
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

// export const deletePainTypes = (
//   painId: string
// ): ThunkAction<Promise<void>, AppState, Record<string, unknown>, AnyAction> => {
//   return async (
//     dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
//   ): Promise<void> => {
//     firebase.auth().onAuthStateChanged(async (user) => {
//       if (user) {
//         try {
//           // await removePainTypes(painId, user.uid);
//           await dispatch(getPainTypes());
//           dispatch(
//             showToast(
//               generateToastPayload(
//                 toastLocale.pain.delete.success as ToastState
//               )
//             )
//           );
//         } catch (err) {
//           dispatch(
//             showToast(
//               generateToastPayload(handleErrorMessage(err) as ToastState)
//             )
//           );
//         }
//       }
//     });
//   };
// };
//
// export const updatePainTypes = (
//   pain: PainTypes
// ): ThunkAction<Promise<void>, AppState, Record<string, unknown>, AnyAction> => {
//   return async (
//     dispatch: ThunkDispatch<AppState, Record<string, unknown>, AnyAction>
//   ): Promise<void> => {
//     firebase.auth().onAuthStateChanged(async (user) => {
//       if (user) {
//         try {
//           // await editPainTypes(pain, user.uid);
//           await dispatch(getPainTypes());
//           dispatch(
//             showToast(
//               generateToastPayload(
//                 toastLocale.pain.update.success as ToastState
//               )
//             )
//           );
//         } catch (err) {
//           dispatch(
//             showToast(
//               generateToastPayload(handleErrorMessage(err) as ToastState)
//             )
//           );
//         }
//       }
//     });
//   };
// };
