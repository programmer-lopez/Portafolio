import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/portfolio.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function JokesRoute() {
  return (
    <div className="portafolio-layout">
      <header className="portafolio-header">
        <div className="container">
          <h1 className="home-link">
            <Link to="/" title="Remix Jokes" aria-label="Remix Jokes">
              <span className="logo">🤪</span>
              <span className="logo-medium">PORTAFOLIO</span>
            </Link>
          </h1>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
