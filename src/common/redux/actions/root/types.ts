import { AnyAction } from "redux";

import { RootState } from "common/redux/reducers/root/types";

export type RootAction = RootState & AnyAction;
