import { AnyAction } from "redux";

import { PainsState } from "common/redux/reducers/pains/types";

export type PainsAction = PainsState & AnyAction;

export type DispatchType = () => PainsAction;
