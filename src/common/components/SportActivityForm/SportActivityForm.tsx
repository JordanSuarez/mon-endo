import React, { useContext, useState } from "react";

import { ClassNameMap } from "@material-ui/styles";
import { makeRequired, makeValidate, TextField } from "mui-rff";
import { Config } from "final-form";
import { get } from "lodash";

import { SportActivity } from "common/types/sportActivity";
import Form from "common/components/Form";
import Select from "common/components/Select";
import { FormContext } from "common/context";
import { UPDATE } from "common/constants/context";
import {
  selectActivityField,
  selectDurationTypeField,
} from "./config/selectFields";
import { StylesInterface } from "./styles";
import yupSchema from "./validation/schema";
import locale from "./config/locale";
import { durationTypes, activities } from "./data";

export type Props = Partial<Config> & {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  date: string;
  handleSubmit: (sportActivity: Omit<SportActivity, "userId" | "id">) => void;
  handleClose?: () => void;
};

const SportActivityForm = ({
  classes,
  initialValues,
  handleSubmit,
  handleClose,
  date,
}: Props): JSX.Element => {
  const context = useContext(FormContext);
  const title = context === UPDATE ? locale.title.edit : locale.title.create;
  const required = makeRequired(yupSchema);
  const validate = makeValidate(yupSchema);
  const [activityDuration, setActivityDuration] = useState(
    context === UPDATE
      ? ({ ...initialValues } as SportActivity)
      : ({} as SportActivity)
  );

  const onSubmit = (values: any): void => {
    const inputValues = {
      ...activityDuration,
      date: values.date.toString(),
      duration: {
        ...activityDuration.duration,
        time: values.duration,
      },
      activity: {
        ...activityDuration.activity,
        id: values.activity,
      },
    };
    handleSubmit(inputValues);
  };

  const onCancel = (): void => {
    if (handleClose) {
      handleClose();
    }
  };

  const handleClick = (values: any, fieldName: string): void => {
    if (fieldName === locale.field.activity.name) {
      setActivityDuration({
        ...activityDuration,
        activity: {
          ...values,
        },
      });
    } else {
      setActivityDuration({
        ...activityDuration,
        duration: {
          time: values.duration,
          type: values.name,
        },
      });
    }
  };

  const initialFormValues =
    context === UPDATE
      ? {
          ...initialValues,
          activity: get(initialValues, "activity.id", ""),
          duration: get(initialValues, "duration.time", ""),
          type: get(initialValues, "duration.type", ""),
        }
      : initialValues;

  return (
    <Form
      handleSubmitForm={onSubmit}
      initialValues={initialFormValues}
      onCancel={onCancel}
      validate={validate}
      title={title}
      date={date}
    >
      <>
        <Select
          handleClick={handleClick}
          required={required}
          fieldProps={selectActivityField}
          options={activities}
        />
        <div className={classes.durationContainer}>
          <TextField
            label={locale.field.duration.label}
            name={locale.field.duration.name}
            variant="outlined"
            type="number"
            className={classes.field}
            required={required[locale.field.duration.name]}
          />
          <Select
            handleClick={handleClick}
            required={required}
            fieldProps={selectDurationTypeField}
            options={durationTypes}
          />
        </div>
      </>
    </Form>
  );
};

SportActivityForm.defaultProps = {
  handleClose: () => {},
};

export default SportActivityForm;
