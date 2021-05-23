import * as Yup from "yup";

import local from "../config/locale";

const requiredField = local.field.required;
const date = local.field.date.name;
const pain = local.field.pain.name;
const intensity = local.field.intensity.name;
const description = local.field.description.name;

export default (descriptionFieldIsActive: boolean) =>
  Yup.object().shape({
    [date]: Yup.string().required(requiredField),
    [pain]: Yup.string().required(requiredField),
    [intensity]: Yup.string().required(requiredField),
    [description]: descriptionFieldIsActive
      ? Yup.string().required(requiredField)
      : Yup.string(),
  });
