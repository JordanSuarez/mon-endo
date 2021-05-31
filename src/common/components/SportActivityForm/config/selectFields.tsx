import { SelectFieldsProps } from "common/types/fields";
import {
  SportActivity,
  SportActivityDuration,
} from "common/types/sportActivity";
import locale from "./locale";

export const selectActivityField = {
  name: locale.field.activity.name,
  label: locale.field.activity.label,
  variant: "outlined",
  callback: (sportActivities: SportActivity[]): SportActivity[] =>
    sportActivities,
} as SelectFieldsProps;

export const selectDurationTypeField = {
  name: locale.field.type.name,
  label: locale.field.type.label,
  variant: "outlined",
  callback: (
    types: Omit<SportActivityDuration, "time">[]
  ): Omit<SportActivityDuration, "time">[] => types,
} as SelectFieldsProps;
