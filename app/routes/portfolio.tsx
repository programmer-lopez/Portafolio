import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import stylesUrl from "~/styles/portfolio.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function JokesRoute() {
  return (
    <div className="portafolio-header">
      <header className="portafolio-header">
        <div className="container">
          <h1 className="home-link">
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
          </h1>
        </div>
      </header>
      <main>
        <div className="portafolio-main">
          <div className="container">
          <p>Here are a few more jokes to check out:</p>
          </div>
        </div>
        <div className="jokes-outlet">
        <Outlet />
        </div>
      </main>
    </div>
  );
}