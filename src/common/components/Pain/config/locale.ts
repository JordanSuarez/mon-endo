import frLocale from "date-fns/locale/fr";

import { dateWithHours, formatDate, fullDate } from "common/helpers/date";

export default {
  title: {
    paper: (date: string): string =>
      `Douleur du ${formatDate(new Date(date), frLocale, fullDate)}`,
    form: {
      edit: "Modifier la douleur",
    },
  },
  listItem: {
    date: {
      label: (date: string): string =>
        formatDate(new Date(date), frLocale, dateWithHours),
    },
    painType: {
      label: (name: string): string => `Type: ${name}`,
    },
    painTypeIntensity: {
      label: (name: string): string => `Douleur: ${name}`,
    },
    description: {
      label: (name: string): string => `Description: ${name}`,
    },
  },
  button: {
    create: {
      label: "Ajouter une douleur",
    },
    edit: {
      label: "Modifier",
    },
    delete: {
      label: "Supprimer",
    },
  },
  text: "Aucune douleur enregistrée",
};
