import { SelectFieldsProps } from "common/types/fields";
import { PainType, PainTypeIntensity } from "common/types/pains";
import locale from "./locale";

export default [
  {
    name: locale.field.painTypeIntensity.name,
    label: locale.field.painTypeIntensity.label,
    variant: "outlined",
    callback: (painsTypeIntensity: PainTypeIntensity[]): PainTypeIntensity[] =>
      painsTypeIntensity,
  },
  {
    name: locale.field.painType.name,
    label: locale.field.painType.label,
    variant: "outlined",
    callback: (painsType: PainType[]): PainType[] => painsType,
  },
] as Array<SelectFieldsProps>;
