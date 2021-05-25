import React from "react";

import { ClassNameMap } from "@material-ui/styles";

import { SportActivity } from "common/types/sportActivity";
import Form from "common/components/Form";
import { StylesInterface } from "./styles";

type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  sportActivities: SportActivity[];
};

const SportActivityForm = ({
  classes,
  sportActivities,
}: Props): JSX.Element => {
  const onSubmit = (values: any): void => {
    console.log(values);
  };

  const onCancel = (): void => {
    console.log("cancel");
  };
  // TODO add length check
  return (
    <Form
      initialValues={{}}
      onCancel={onCancel}
      onSubmit={onSubmit}
      title="toto"
    >
      <div>toto</div>
    </Form>
  );
};

export default SportActivityForm;
