import { Pain } from "common/types/pains";

export type PainsAction = {
  type: string;
  pains: Pain[];
};
