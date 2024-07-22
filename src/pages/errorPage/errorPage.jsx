import "../../sass/errorPage.scss";

/**
 * Renders the ErrorPage component.
 * @returns {JSX.Element} The rendered ErrorPage component.
 */
export default function ErrorPage() {
  return (
    <main>
      <h1 className="page_Title">ErrorPage</h1>
      <div className="content">
        <h2 className="errorCode">404</h2>
        <p>Something gets wrong</p>
      </div>
    </main>
  );
}
