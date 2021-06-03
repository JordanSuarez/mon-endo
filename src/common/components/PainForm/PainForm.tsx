import React, { useEffect, useState, useContext } from "react";

import { ClassNameMap } from "@material-ui/styles";
import { makeValidate, makeRequired, TextField } from "mui-rff";
import { Config } from "final-form";
import { get } from "lodash";

import { Pain, PainType, PainTypeIntensity } from "common/types/pains";
import { UPDATE } from "common/constants/context";
import { FormContext } from "common/context";
import Select from "common/components/Select";
import Form from "common/components/Form";
import { StylesInterface } from "./styles";
import locale from "./config/locale";
import selectFields from "./config/selectFields";
import yupSchema from "./validation/schema";

export type Props = Partial<Config> & {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  handleSubmit: (pain: Omit<Pain, "userId" | "id">) => void;
  getPainsType: () => void;
  handleClose?: () => void;
  getPainsTypeIntensity: () => void;
  painsType: PainType[];
  painsTypeIntensity: PainTypeIntensity[];
  descriptionFieldIsActive?: boolean;
  date: string;
};

const PainForm = ({
  classes,
  handleSubmit,
  getPainsType,
  getPainsTypeIntensity,
  painsType,
  painsTypeIntensity,
  initialValues,
  descriptionFieldIsActive,
  handleClose,
  date,
}: Props): JSX.Element => {
  const context = useContext(FormContext);
  const [displayDescriptionField, setDisplayDescriptionField] = useState(
    descriptionFieldIsActive || false
  );
  const [pain, setPain] = useState(
    context === UPDATE ? (initialValues as Pain) : ({} as Pain)
  );
  const validate = makeValidate(yupSchema(displayDescriptionField));
  const required = makeRequired(yupSchema(displayDescriptionField));

  const title = context === UPDATE ? locale.title.edit : locale.title.create;

  useEffect(() => {
    getPainsType();
    getPainsTypeIntensity();
  }, [getPainsType, getPainsTypeIntensity]);

  const onSubmit = (values: Pick<Pain, "date" | "description">): void => {
    setDisplayDescriptionField(false);
    const inputValues = {
      ...pain,
      date: values.date.toString(),
      description: pain.painType.name === "Autre" ? values.description : "",
    };
    handleSubmit(inputValues);
  };

  const onCancel = (): void => {
    if (handleClose) {
      handleClose();
    }
  };

  const handleClick = (values: PainType, fieldName: string): void => {
    if (fieldName === locale.field.painType.name) {
      if (values.name === "Autre") {
        setDisplayDescriptionField(true);
      } else {
        setDisplayDescriptionField(false);
      }
      setPain({ ...pain, painType: values });
    } else {
      setPain({
        ...pain,
        painTypeIntensity: values,
      });
    }
  };

  const initialFormValues =
    context === UPDATE
      ? {
          ...initialValues,
          painType: get(initialValues, "painType.id", {
            id: "",
            name: "",
          }),
          painTypeIntensity: get(initialValues, "painTypeIntensity.id", {
            id: "",
            name: "",
          }),
        }
      : initialValues;

  return (
    <Form
      initialValues={initialFormValues}
      handleSubmitForm={onSubmit}
      onCancel={onCancel}
      validate={validate}
      title={title}
      date={date}
    >
      <div>
        {selectFields.map((fieldProps) => (
          <Select
            key={fieldProps.name}
            handleClick={(values, fieldName) =>
              handleClick(values as PainType, fieldName)
            }
            required={required}
            fieldProps={fieldProps}
            options={
              fieldProps.name === locale.field.painType.name
                ? painsType
                : painsTypeIntensity
            }
          />
        ))}
        {displayDescriptionField && (
          <TextField
            label={locale.field.description.label}
            name={locale.field.description.name}
            variant="outlined"
            className={classes.field}
            required={required[locale.field.description.name]}
          />
        )}
      </div>
    </Form>
  );
};

PainForm.defaultProps = {
  descriptionFieldIsActive: false,
  handleClose: () => {},
};

export default PainForm;
