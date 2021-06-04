import React, { useEffect, useState } from "react";
import { Snackbar, Button } from "@material-ui/core";
import * as serviceWorker from "../../../serviceWorkerRegistration";

const ServiceWorkerWrapper = (): JSX.Element => {
  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(
    null
  );

  const onSWUpdate = (registration: ServiceWorkerRegistration) => {
    console.log(registration);
    setShowReload(true);
    setWaitingWorker(registration.waiting);
    // serviceWorker.unregister();
  };

  useEffect(() => {
    console.log("passsssss");
    serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);
  console.log("ssssss");

  const reloadPage = () => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload(true);
  };

  return (
    <Snackbar
      open={showReload}
      message="A new version is available!"
      onClick={reloadPage}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      action={
        <Button color="inherit" size="small" onClick={reloadPage}>
          Reload
        </Button>
      }
    />
  );
};

export default ServiceWorkerWrapper;
