import { useEffect } from "react";

import { useHistory } from "react-router-dom";

import { logout } from "common/authentication/authProvider";
import { getLoginRoute } from "common/routing/routesResolver";

const Logout = (): null => {
  const history = useHistory();

  useEffect(() => {
    logout()
      .then(() => {
        history.push(getLoginRoute());
        window.location.reload();
      })
      .catch(() => {});
  }, [history]);

  return null;
};

export default Logout;
