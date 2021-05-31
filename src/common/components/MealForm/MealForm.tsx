import React, { useEffect, useState } from "react";

import { ClassNameMap } from "@material-ui/styles";
import { Button, Divider } from "@material-ui/core";
import { Form } from "react-final-form";
import { makeValidate, TextField } from "mui-rff";
import SendIcon from "@material-ui/icons/Send";
import { isEqual } from "lodash";

import { MealFormInitialValues, Meal } from "common/types/meal";
import Paper from "common/components/Paper";
import { StylesInterface } from "./styles";
import locale from "./config/locale";
import yupSchema from "./validation/schema";
import textFields from "./config/textFields";

export type Props = {
  classes: Partial<ClassNameMap<keyof StylesInterface>>;
  createMeal: (meal: Omit<Meal, "userId" | "id">) => void;
  updateMeal: (meal: Meal) => void;
  meal: Meal;
  date: string;
  getDailyMeal: () => void;
};

const MealForm = ({
  classes,
  createMeal,
  updateMeal,
  meal,
  date,
}: Props): JSX.Element => {
  const [initialValues, setInitialValues] = useState(
    {} as MealFormInitialValues
  );
  const validate = makeValidate(yupSchema);

  useEffect(() => {
    if (meal.content) {
      setInitialValues(meal.content);
    }
  }, [meal]);

  const onSubmit = (values: MealFormInitialValues) => {
    if (!isEqual(values, initialValues)) {
      if (meal.id.length > 0) {
        updateMeal({ ...meal, content: values });
      } else {
        createMeal({ content: values, date });
      }
    }
  };

  return (
    <Paper className={classes.root} title={locale.title}>
      <>
        <Divider className={classes.divider} />
        <Form
          onSubmit={onSubmit}
          validate={validate}
          initialValues={initialValues}
          render={({ handleSubmit, submitting, pristine }) => (
            <form onSubmit={handleSubmit} className={classes.form}>
              {textFields.map(({ name, label, variant }) => (
                <TextField
                  key={name}
                  label={label}
                  name={name}
                  variant={variant}
                  className={classes.field}
                />
              ))}
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon />}
                type="submit"
                disabled={submitting || pristine}
              >
                {locale.field.button.label}
              </Button>
            </form>
          )}
        />
      </>
    </Paper>
  );
};

export default MealForm;
