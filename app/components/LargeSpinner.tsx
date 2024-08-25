import * as React from "react";
import { makeStyles, Spinner } from "@fluentui/react-components";
import './LoadingSpinner.css';  // Import the CSS file

const useStyles = makeStyles({
  container: {
    "> div": { padding: "20px" },
  },
});

export const LargeSpinner = () => {
  const styles = useStyles();

  return (
    <div className="loading-spinner-container">
        <Spinner size="huge" label="Loading ..." />
    </div>
  );
};