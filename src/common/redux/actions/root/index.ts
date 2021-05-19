import { RootState } from "common/redux/reducers/root/types";
import { RootAction } from "./types";

export const SAVE_ROOT = "SAVE_ROOT";

export const saveRoot = (arg: RootState): RootAction => ({
  type: SAVE_ROOT,
  ...arg,
});
