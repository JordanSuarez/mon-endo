export default {
  title: "Mon endo",
  form: {
    title: "Créer un compte",
    field: {
      email: {
        label: "Email",
        name: "email",
        invalid: "L'email est invalide",
      },
      password: {
        label: "Mot de passe",
        name: "password",
      },
      confirmed: {
        label: "Confirmer le mot de passe",
        name: "confirmed",
        invalid: "Confirmation incorrecte",
      },
      required: "Le champ est requis",
      minLength: (field: string): string => `Le ${field} est trop court`,
      maxLength: (field: string): string => `Le ${field} est trop long`,
    },
    button: {
      submit: {
        label: "Créer un compte",
      },
      forgot: {
        label: "",
      },
    },
    link: {
      text: "Déjà un compte?",
      span: "Se connecter",
    },
  },
};
