import React from "react";

import { ERROR, SUCCESS } from "common/constants/severity";
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
    success: {
      title: "test",
      content: "toto",
      severity: SUCCESS,
    },
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
      title: "test",
      content: "toto",
      severity: SUCCESS,
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
        content: "La douleur a été créée avec succès",
        severity: SUCCESS,
      },
    },
    update: {
      success: {
        title: "Modification réussi",
        content: "La douleur a été modifiée avec succès",
        severity: SUCCESS,
      },
    },
    delete: {
      success: {
        title: "Suppression réussi",
        content: "La douleur a été supprimée avec succès",
        severity: SUCCESS,
      },
    },
  },
};