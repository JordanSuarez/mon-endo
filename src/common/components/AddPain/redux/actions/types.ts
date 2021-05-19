import { AnyAction } from "redux";

import { AddPainState } from "../reducers/types";

export type AddPainAction = AddPainState & AnyAction;

export type DispatchType = (arg: AddPainState) => AddPainAction;
