import { SelectFieldsProps } from "common/types/fields";
import { PainTypes } from "common/types/painTypes";
import locale from "./locale";

export default [
  {
    name: locale.field.intensity.name,
    label: locale.field.intensity.label,
    variant: "outlined",
    painTypes: (painTypes: Array<PainTypes>) => painTypes,
  },
  {
    name: locale.field.pain.name,
    label: locale.field.pain.label,
    variant: "outlined",
    painTypes: (painTypes: Array<PainTypes>) => painTypes,
  },
] as Array<SelectFieldsProps>;
