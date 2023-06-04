import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/portafolio.css";
import portafolio from "../../public/svg/icon-portafolio.svg";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function JokesRoute() {
  return (
    <div className="portafolio-layout">
      <header className="portafolio-header">
        <div className="container">
          <img src={portafolio} alt="Portafolio" className="portafolio-logo" />
          <h2 className="home-link">
            <Link to="/" title="Remix Jokes" aria-label="Remix Jokes">
              <span 
              className="logo-medium">Developer
              </span>
            </Link>
          </h2>
        </div>
      </header>
      <main className="portafolio-main">
        <div className="container">
          <div className="portafolio-list">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Experiencia</Link>
              </li>
              <li>
                <Link to="/">Contacto </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="portafolio-outlet">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
