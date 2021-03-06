export default {
  title: "Mon endo",
  form: {
    title: "RĂ©initialiser le mot de passe",
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
        label: "RĂ©initialiser le mot de passe",
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
