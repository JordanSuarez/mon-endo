export default {
  title: "Mon endo",
  form: {
    title: "Réinitialiser le mot de passe",
    field: {
      email: {
        label: "Email",
        name: "email",
        invalid: "L'email est invalide",
      },
      password: {
        label: "",
        name: "",
      },
      required: "Le champ est requis",
      minLength: (field: string): string => field,
      maxLength: (field: string): string => field,
    },
    button: {
      submit: {
        label: "Réinitialiser le mot de passe",
      },
      forgot: {
        label: "",
      },
    },
    link: {
      text: "",
      span: "Retour",
    },
  },
};
