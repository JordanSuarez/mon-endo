import frLocale from "date-fns/locale/fr";

import { dateWithoutHours, formatDate } from "common/helpers/date";

export default {
  title: {
    form: {
      edit: "Modifier la douleur",
    },
  },
  listItem: {
    date: {
      label: (date: string): string =>
        formatDate(new Date(date), frLocale, dateWithoutHours),
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
