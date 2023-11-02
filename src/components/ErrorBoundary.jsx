import React from "react";
import { useErrorBoundary } from "react-error-boundary";

export default function ErrorBoundary() {
  const { showBoundary } = useErrorBoundary();
  const getGreeting = async (name) => {
    try {
      const response = await fetchGreeting(name);
      console.log(response);
    } catch (error) {
      // Show error boundary
      console.log(error);
      showBoundary(error);
    }
  };
  useEffect(() => {
    getGreeting();
  });
  return <ErrorBoundary></ErrorBoundary>;
}
