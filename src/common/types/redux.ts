import { ToastState } from "common/components/Toast/redux/reducers/types";
import { DrawerState } from "common/components/Drawer/redux/reducers/types";
import { RootState } from "common/redux/reducers/root/types";
import { PainsState } from "common/redux/reducers/pains/types";
import { PainsTypeState } from "common/redux/reducers/painsType/types";
import { PainsTypeIntensityState } from "common/redux/reducers/painsTypeIntensity/types";

export type AppState = {
  root: RootState;
  toast: ToastState;
  painForm: DrawerState;
  pains: PainsState;
  painsType: PainsTypeState;
  painsTypeIntensity: PainsTypeIntensityState;
};
