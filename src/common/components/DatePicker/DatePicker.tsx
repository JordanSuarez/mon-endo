import React from "react";

import DateFnsUtils from "@date-io/date-fns";
import frLocale from "date-fns/locale/fr";
import {
  MuiPickersUtilsProvider,
  DatePicker as MUIDatePicker,
} from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";

import locale from "./config/locale";

type Props = {
  className: string | undefined;
  minDate: ParsableDate;
  value: Date;
  onChange: (date: MaterialUiPickersDate) => void;
};

const DatePicker = ({
  className,
  minDate,
  value,
  onChange,
}: Props): JSX.Element => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
      <MUIDatePicker
        inputVariant="outlined"
        label={locale.label}
        cancelLabel={locale.button.cancel.label}
        required
        format={locale.format}
        disableFuture
        minDate={minDate}
        value={value}
        onChange={onChange}
        className={className}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
