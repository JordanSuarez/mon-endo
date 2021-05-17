import * as Yup from "yup";

import local from "../config/locale";

const requiredField = local.form.field.required;
const invalidEmail = local.form.field.email.invalid;
const email = local.form.field.email.name;

export default Yup.object().shape({
  [email]: Yup.string().email(invalidEmail).required(requiredField),
});
