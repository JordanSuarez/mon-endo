import { AnyAction } from "redux";

import { DrawerState } from "../reducers/types";

export type DrawerAction = DrawerState & AnyAction;
