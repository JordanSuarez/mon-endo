import * as Yup from "yup";

import local from "../config/locale";

const requiredField = local.field.required;
const activity = local.field.activity.name;
const duration = local.field.duration.name;
const type = local.field.type.name;

export default Yup.object().shape({
  [activity]: Yup.string().required(requiredField),
  [duration]: Yup.number().required(requiredField),
  [type]: Yup.string().required(requiredField),
});
