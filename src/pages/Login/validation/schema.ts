import * as Yup from "yup";

import local from "../config/locale";

const requiredField = local.form.field.required;
const { minLength } = local.form.field;
const { maxLength } = local.form.field;
const invalidEmail = local.form.field.email.invalid;
const password = local.form.field.password.name;
const passwordLabel = local.form.field.password.label;
const email = local.form.field.email.name;

export default Yup.object().shape({
  [email]: Yup.string().email(invalidEmail).required(requiredField),
  [password]: Yup.string()
    .min(6, minLength(passwordLabel.toLowerCase()))
    .max(50, maxLength(passwordLabel.toLowerCase()))
    .required(requiredField),
});
