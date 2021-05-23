import { AnyAction } from "redux";

import { LoaderState } from "../reducers/types";

export type LoaderAction = LoaderState & AnyAction;
