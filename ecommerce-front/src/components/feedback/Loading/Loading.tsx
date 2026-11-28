import type { TLoading } from "@customTypes/shared.types";

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
};

// Show the right message for each request status.
const Loading = ({ status, error, children }: LoadingProps) => {
  if (status === "pending") {
    // Wait until the request is finished.
    return <p>Loading please wait</p>;
  }
  if (status === "failed") {
    // Show the error returned by the request.
    return <p>{error}</p>;
  }

  // Show the page content when there is no error.
  return <>{children}</>;
};

export default Loading;
