import { AnyAction } from "redux";

export const SHOW_ADD_PAIN = "SHOW_ADD_PAIN";
export const HIDE_ADD_PAIN = "HIDE_ADD_PAIN";

export const showAddPain = (): AnyAction => ({
  type: SHOW_ADD_PAIN,
});

export const hideAddPain = (): AnyAction => ({
  type: HIDE_ADD_PAIN,
});
