import { format, isValid } from "date-fns";

export const dateWithoutHours = "dd MMMM yyyy";
export const dateWithHours = "dd MMMM yyyy HH:mm";
export const fullDate = "EEEE dd MMMM yyyy";
export const fullDateWIthShortDay = "EEE dd MMMM yyyy";

export type DateAlias = {
  date: Date;
  locale: Locale;
  dateFormat: string;
};

export const formatDate = (
  date: Date,
  locale: Locale,
  dateFormat: string
): string => (isValid(date) ? format(date, dateFormat, { locale }) : "");
