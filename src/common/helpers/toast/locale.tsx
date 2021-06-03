import React from "react";

import { ERROR, INFO, SUCCESS } from "common/constants/severity";
import EmailVerification from "common/components/EmailVerification";

export default {
  error: {
    badRequest: {
      title: "Oups",
      content: "Une erreur est survenue",
      severity: ERROR,
    },
  },
  email: {
    validation: {
      success: {
        title: "Envoyé",
        content: "Email de vérification envoyé à l'adresse indiquée",
        severity: SUCCESS,
      },
    },
  },
  password: {
    recovery: {
      success: {
        title: "Envoyé",
        content: "Lien de réinitialisation envoyé à l'adresse indiquée",
        severity: SUCCESS,
      },
    },
  },
  login: {
    error: {
      wrongCredentials: {
        title: "Oups",
        content: "Le couple email/mot de passe est incorrect",
        severity: ERROR,
      },
      userNotFound: {
        title: "Oups",
        content: "Aucun compte n'existe à cette adresse",
        severity: ERROR,
      },
      unverifiedEmail: {
        title: "Adresse email non vérifié",
        content: <EmailVerification />,
        severity: ERROR,
      },
    },
  },
  register: {
    success: {
      title: "En attente de validation",
      content: "Un email de confirmation vous à été envoyé à l'adresse indiqué",
      severity: INFO,
    },
    error: {
      emailAlreadyTaken: {
        title: "Oups",
        content: "C'est email est déjà utilisé",
        severity: ERROR,
      },
      invalidEmail: {
        title: "Oups",
        content: "L'adresse email n'est pas valide",
        severity: ERROR,
      },
    },
  },
  pain: {
    create: {
      success: {
        title: "Création réussi",
        content: "La douleur à été créée",
        severity: SUCCESS,
      },
    },
    update: {
      success: {
        title: "Modification réussi",
        content: "La douleur à été modifiée",
        severity: SUCCESS,
      },
    },
    delete: {
      success: {
        title: "Suppression réussi",
        content: "La douleur à été supprimée",
        severity: SUCCESS,
      },
    },
  },
  sportActivity: {
    create: {
      success: {
        title: "Création réussi",
        content: "L'activité à été créée",
        severity: SUCCESS,
      },
    },
    update: {
      success: {
        title: "Modification réussi",
        content: "L'activité à été modifiée",
        severity: SUCCESS,
      },
    },
    delete: {
      success: {
        title: "Suppression réussi",
        content: "L'activité à été supprimée",
        severity: SUCCESS,
      },
    },
  },
  meal: {
    create: {
      success: {
        title: "Création réussi",
        content: "Les repas ont à été ajouté",
        severity: SUCCESS,
      },
    },
  },
};
