import { ToastState } from "common/components/Toast/redux/reducers/types";
import { PainFormState } from "common/components/PainForm/redux/reducers/types";
import { RootState } from "common/redux/reducers/root/types";
import { PainsState } from "common/redux/reducers/pains/types";

export type AppState = {
  root: RootState;
  toast: ToastState;
  painForm: PainFormState;
  pains: PainsState;
};
