import { format } from "date-fns";

export const dateWithoutHours = "dd MMMM yyyy";
export const dateWithHours = "dd MMMM yyyy HH:mm";
export const fullDate = "EEEE dd MMMM yyyy";

export const formatDate = (
  locale: Locale,
  date: Date,
  dateFormat: string
): string => {
  return format(date, dateFormat, {
    locale,
  });
};
