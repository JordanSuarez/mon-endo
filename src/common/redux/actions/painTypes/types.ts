import { AnyAction } from "redux";

import { PainTypesState } from "common/redux/reducers/painTypes/types";

export type PainTypesAction = PainTypesState & AnyAction;
