import { SelectFieldsProps } from "common/types/fields";
import { PainType, PainTypeIntensity } from "common/types/pains";
import locale from "./locale";

export default [
  {
    name: locale.field.intensity.name,
    label: locale.field.intensity.label,
    variant: "outlined",
    callback: (painsTypeIntensity: PainTypeIntensity[]): PainTypeIntensity[] =>
      painsTypeIntensity,
  },
  {
    name: locale.field.pain.name,
    label: locale.field.pain.label,
    variant: "outlined",
    callback: (painsType: PainType[]): PainType[] => painsType,
  },
] as Array<SelectFieldsProps>;
