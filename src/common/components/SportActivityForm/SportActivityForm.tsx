import React from "react";

import { ClassNameMap } from "@material-ui/styles";

import { SportActivity } from "common/types/sportActivity";
import Form from "common/components/Form";
import { makeRequired, makeValidate } from "mui-rff";
import { Config } from "final-form";
import { StylesInterface } from "./styles";
import yupSchema from "./validation/schema";
import locale from "./config/locale";

type Props = Partial<Config> & {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  sportActivities: SportActivity[];
  title: string;
  handleSubmitForm: (
    sportActivity: Omit<SportActivity, "userId" | "id">
  ) => void;
};

const SportActivityForm = ({
  classes,
  sportActivities,
  title,
  initialValues,
  handleSubmitForm,
}: Props): JSX.Element => {
  const required = makeRequired(yupSchema);
  const validate = makeValidate(yupSchema);

  const onSubmit = (values: any): void => {
    console.log(values);
    // handleSubmitForm(values);
  };

  const onCancel = (): void => {
    console.log("cancel");
  };
  // TODO add length check
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      onCancel={onCancel}
      validate={validate}
      title={title}
    >
      <div>toto</div>
    </Form>
  );
};

export default SportActivityForm;
