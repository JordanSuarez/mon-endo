import { AnyAction } from "redux";

export const SHOW_DRAWER = "SHOW_DRAWER";
export const HIDE_DRAWER = "HIDE_DRAWER";

export const showDrawer = (context: string): AnyAction => {
  return {
    type: SHOW_DRAWER,
    context,
  };
};

export const hideDrawer = (): AnyAction => ({
  type: HIDE_DRAWER,
});
