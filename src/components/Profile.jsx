import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const Fallback = ({ error, resetErrorBoundary }) => {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
};

const logError = (errors) => {
  console.log("error from component:", errors);
  // Do something with the error, e.g. log to an external API
};

export default function Profile() {
  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onError={logError}
      onReset={(details) => {
        // Reset the state of your app so the error doesn't happen again
      }}
    >
      <div>Profile{id}</div>;
    </ErrorBoundary>
  );
}
