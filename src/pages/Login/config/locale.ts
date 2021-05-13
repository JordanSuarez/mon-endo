export default {
  title: "Mon endo",
  form: {
    title: "Se connecter",
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
      required: "Le champ est requis",
      minLength: (field: string): string => `Le ${field} est trop court`,
      maxLength: (field: string): string => `Le ${field} est trop long`,
    },
    button: {
      submit: {
        label: "Se connecter",
      },
      forgot: {
        label: "Mot de passe oublié?",
      },
    },
    link: {
      text: "Pas encore de compte?",
      span: "Créer un compte",
    },
  },
};
