import frLocale from "date-fns/locale/fr";
import { dateWithHours, formatDate, fullDate } from "../../../helpers/date";

export default {
  title: {
    paper: "Activité physique",
    form: {
      edit: "Modifier l'activité",
    },
  },
  listItem: {
    date: {
      label: (date: string): string =>
        formatDate(new Date(date), frLocale, dateWithHours),
    },
    activity: {
      label: (name: string): string => `Activité: ${name}`,
    },
    duration: {
      label: (name: string): string => `Durée: ${name}`,
    },
    durationType: {
      label: (name: string): string => name,
    },
  },
  button: {
    create: {
      label: "Ajouter une activité",
    },
    edit: {
      label: "Modifier",
    },
    delete: {
      label: "Supprimer",
    },
  },
  text: "Aucune activité enregistrée",
};
