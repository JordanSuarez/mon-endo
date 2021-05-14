export default {
  error: {
    badRequest: {
      title: "Oups",
      content: "Une erreur est survenue",
      severity: "error",
    },
  },
  login: {
    success: {
      title: "test",
      content: "toto",
      severity: "success",
    },
    error: {
      wrongCredentials: {
        title: "Oups",
        content: "Le couple email/mot de passe est incorrect",
        severity: "error",
      },
      userNotFound: {
        title: "Oups",
        content: "Aucun compte n'existe à cette adresse",
        severity: "error",
      },
    },
  },
  register: {
    success: {
      title: "test",
      content: "toto",
      severity: "success",
    },
    error: {
      emailAlreadyTaken: {
        title: "Oups",
        content: "C'est email est déjà utilisé",
        severity: "error",
      },
      invalidEmail: {
        title: "Oups",
        content: "L'adresse email n'est pas valide",
        severity: "error",
      },
    },
  },
  addPain: {
    success: {
      title: "test",
      content: "toto",
      severity: "success",
    },
  },
  updatePain: {
    success: {
      title: "test",
      content: "toto",
      severity: "success",
    },
  },
  removePain: {
    success: {
      title: "test",
      content: "toto",
      severity: "success",
    },
  },
};
