import * as Yup from "yup";

import local from "../config/locale";

const requiredField = local.field.required;
const date = local.field.date.name;
const painType = local.field.painType.name;
const painTypeIntensity = local.field.painTypeIntensity.name;
const description = local.field.description.name;

export default (descriptionFieldIsActive: boolean) =>
  Yup.object().shape({
    [date]: Yup.string().required(requiredField),
    [painType]: Yup.string().required(requiredField),
    [painTypeIntensity]: Yup.string().required(requiredField),
    [description]: descriptionFieldIsActive
      ? Yup.string().required(requiredField)
      : Yup.string(),
  });
