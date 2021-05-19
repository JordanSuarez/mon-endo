import { AnyAction } from "redux";

export const SHOW_PAIN_FORM = "SHOW_PAIN_FORM";
export const HIDE_PAIN_FORM = "HIDE_PAIN_FORM";

export const showPainForm = (): AnyAction => ({
  type: SHOW_PAIN_FORM,
});

export const hidePainForm = (): AnyAction => ({
  type: HIDE_PAIN_FORM,
});
