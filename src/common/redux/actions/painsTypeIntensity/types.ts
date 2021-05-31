import { PainTypeIntensity } from "common/types/pains";

export type PainsTypeIntensityAction = {
  type: string;
  painsTypeIntensity: PainTypeIntensity[];
};
