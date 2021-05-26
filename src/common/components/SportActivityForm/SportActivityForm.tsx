import React, { useContext, useState } from "react";

import { ClassNameMap } from "@material-ui/styles";
import { makeRequired, makeValidate, TextField } from "mui-rff";
import { Config } from "final-form";
import { get } from "lodash";

import {
  Activity,
  SportActivity,
  SportActivityDuration,
  SportActivityDurationType,
} from "common/types/sportActivity";
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
  title: string;
  date: string;
  handleSubmitForm: (
    sportActivity: Omit<SportActivity, "userId" | "id">
  ) => void;
  handleCloseForm?: () => void;
};

const SportActivityForm = ({
  classes,
  title,
  initialValues,
  handleSubmitForm,
  handleCloseForm,
  date,
}: Props): JSX.Element => {
  const context = useContext(FormContext);
  const required = makeRequired(yupSchema);
  const validate = makeValidate(yupSchema);
  // const [activityDuration, setActivityDuration] = useState(
  //   context === UPDATE
  //     ? ({ ...initialValues } as SportActivity)
  //     : ({} as { activity: string; id: string; type: string })
  // );
  const [activityDuration, setActivityDuration] = useState(
    context === UPDATE
      ? ({ ...initialValues } as SportActivity)
      : ({} as { activity: Activity; duration: SportActivityDuration })
  );

  const onSubmit = (values: any): void => {
    console.log(activityDuration);
    const inputValues = {
      date,
      duration: {
        time: values.duration,
        // type: activityDuration.type,
      },
      activity: {
        id: values.activity,
        name: activityDuration.activity,
      },
    };
    console.log(inputValues);
    // handleSubmitForm(inputValues);
  };

  const onCancel = (): void => {
    if (handleCloseForm) {
      handleCloseForm();
    }
  };

  const handleClick = <T,>(values: T, fieldName: string): void => {
    console.log(fieldName, activityDuration);
    setActivityDuration({
      ...activityDuration,
      [fieldName]: get(values, "name", ""),
      // id: get(values, "id", ""),
    });
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
      onSubmit={onSubmit}
      initialValues={initialFormValues}
      onCancel={onCancel}
      validate={validate}
      title={title}
    >
      <>
        <Select
          handleClick={(values, fieldName) =>
            handleClick<Activity>(values as Activity, fieldName)
          }
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
            handleClick={(values, fieldName) =>
              handleClick<SportActivityDurationType>(
                values as SportActivityDurationType,
                fieldName
              )
            }
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
  handleCloseForm: () => {},
};

export default SportActivityForm;
