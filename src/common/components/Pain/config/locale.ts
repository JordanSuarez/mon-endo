import frLocale from "date-fns/locale/fr";

import { formatDate, fullDate } from "common/helpers/date";

export default {
  title: {
    paper: (date: string): string =>
      `Douleur du ${formatDate(new Date(date), frLocale, fullDate)}`,
    form: {
      edit: "Modifier la douleur",
    },
  },
  listItem: {
    painTypeIntensity: {
      label: (name: string): string => `Douleur: ${name}`,
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
