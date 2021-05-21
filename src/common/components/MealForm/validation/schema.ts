import * as Yup from "yup";

import local from "../config/locale";

const breakfast = local.field.breakfast.name;
const lunch = local.field.lunch.name;
const dinner = local.field.dinner.name;

export default Yup.object().shape({
  [breakfast]: Yup.string(),
  [lunch]: Yup.string(),
  [dinner]: Yup.string(),
});
