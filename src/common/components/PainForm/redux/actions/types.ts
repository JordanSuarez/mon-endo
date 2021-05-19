import { AnyAction } from "redux";

import { PainFormState } from "../reducers/types";

export type PainFormAction = PainFormState & AnyAction;
