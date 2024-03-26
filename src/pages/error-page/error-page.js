import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Opps!</h1>
      <p>Sorry, un error inesperado ha ocurrido! :(</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
