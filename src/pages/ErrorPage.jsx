import { useRouteError, Link } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="page error-page">
      <div className="error-content">
        <h1>Oops!</h1>
        <p className="error-message">Something went wrong.</p>
        {error?.statusText && (
          <p className="error-details">{error.statusText}</p>
        )}
        {error?.message && (
          <p className="error-details">{error.message}</p>
        )}
        <Link to="/" className="btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
