import React, { FC, useContext, useState } from "react";

import { ClassNameMap } from "@material-ui/styles";
import { makeRequired, makeValidate, TextField } from "mui-rff";
import { Config } from "final-form";

import {
  Activity,
  SportActivity,
  SportActivityDurationType,
} from "common/types/sportActivity";
import Form from "common/components/Form";
import Select from "common/components/Select";
import { FormContext } from "common/context";
import { StylesInterface } from "./styles";
import yupSchema from "./validation/schema";
import locale from "./config/locale";
import {
  selectActivityField,
  selectDurationTypeField,
} from "./config/selectFields";

export type Props = Partial<Config> & {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  title: string;
  handleSubmitForm: (
    sportActivity: Omit<SportActivity, "userId" | "id">
  ) => void;
  handleCloseForm?: () => void;
};

const SportActivityForm: FC<Props> = ({
  classes,
  title,
  initialValues,
  handleSubmitForm,
  handleCloseForm,
}: Props) => {
  const context = useContext(FormContext);

  const [activityDuration, setActivityDuration] = useState({});

  const required = makeRequired(yupSchema);
  const validate = makeValidate(yupSchema);

  const onSubmit = (values: any): void => {
    const inputValues = {
      ...values,
      ...activityDuration,
    };
    console.log(values);
    handleSubmitForm(inputValues);
  };
  // activity: "course à pied"
  // duration: "1"
  // id: "2"
  // type: "heure(s)"
  const onCancel = (): void => {
    if (handleCloseForm) {
      handleCloseForm();
    }
  };

  const handleClick = (values: any, fieldName: string): void => {
    setActivityDuration({
      ...activityDuration,
      [fieldName]: values.name,
      id: values.id,
    });
  };

  const durationTypes = [
    { id: "1", name: "minute(s)" },
    { id: "2", name: "heure(s)" },
  ] as SportActivityDurationType[];

  const sportActivitiessss = [
    { id: "1", name: "vélo" },
    { id: "2", name: "course à pied" },
    { id: "3", name: "football" },
  ] as Activity[];

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      onCancel={onCancel}
      validate={validate}
      title={title}
    >
      <>
        <Select
          handleClick={handleClick}
          required={required}
          fieldProps={selectActivityField}
          options={sportActivitiessss}
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
  handleCloseForm: () => {},
};

export default SportActivityForm;
