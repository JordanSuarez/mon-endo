import { SelectFieldsProps } from "common/types/fields";
import { PainType, PainTypeIntensity } from "common/types/pains";
import locale from "./locale";

export default [
  {
    name: locale.field.intensity.name,
    label: locale.field.intensity.label,
    variant: "outlined",
    painsType: (painsType: PainTypeIntensity[]) => painsType,
  },
  {
    name: locale.field.pain.name,
    label: locale.field.pain.label,
    variant: "outlined",
    painTypes: (painTypes: PainType[]) => painTypes,
  },
] as Array<SelectFieldsProps>;
