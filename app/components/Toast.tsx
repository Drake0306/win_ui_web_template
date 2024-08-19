import * as React from "react";
import {
  useId,
  Button,
  Toaster,
  useToastController,
  ToastTitle,
  Toast,
} from "@fluentui/react-components";

export const PauseOnHover: React.FC = () => {
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);

  const notify = () => {
    dispatchToast(
      <Toast>
        <ToastTitle>Hover me!</ToastTitle>
      </Toast>,
      { pauseOnHover: true, intent: "info" }
    );
  };

  return (
    <>
      <Toaster toasterId={toasterId} />
      <Button onClick={notify}>Make toast</Button>
    </>
  );
};
