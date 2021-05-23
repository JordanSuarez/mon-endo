import { PainType } from "common/types/pains";

export type PainsTypeAction = {
  type: string;
  painsType: PainType[];
};
