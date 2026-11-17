import { Container } from "react-bootstrap";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
const Error = () => {
  // Get the error that caused the current route to fail.
  const error = useRouteError(); // type error
  let errorStatus: number;
  let errorStatusText: string;
  // Check whether the error is a React Router response with status details.
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    // Show a simple not-found message for other kinds of errors.
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }
  return (
    <Container className="notFound">
      <h1>{errorStatus}</h1>
      <p>{errorStatusText}</p>
      {/* Replace this history entry so Back does not return to the error page. */}
      <Link to="/" replace={true}>
        How About going back to safety?
      </Link>
    </Container>
  );
};

export default Error;
