export default {
  title: {
    paper: "Douleurs de la journée",
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
