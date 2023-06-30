import type { LinksFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

import stylesUrl from "./styles/portafolio.css";
import portafolio from "../../public/svg/icon-portafolio.svg";
import navigationstylesUrl from "~/stylesGlobal/navigation.css";
import Me from "../../public/img/about.jpg";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
  { rel: "stylesheet", href: navigationstylesUrl },
];

export default function PortafolioRoute() {
  return (
    <div className="portafolio-layout">
      <header className="portafolio-header">
        <div className="portafolio__container-logo">
          <img src={portafolio} alt="Portafolio" className="portafolio-logo" />
          <h2 className="home-link">
            <Link to="/" title="Portafolio" aria-label="Remix Portafolio">
              <span className="logo-medium">Developer with Remix Tsx</span>
            </Link>
          </h2>
        </div>
      </header>
      <main className="portafolio-main">
        <div className="portafolio__container-perfile">
          <div className="portafolio-perfile">
            <img src={Me} alt="Acerca-de-Mi" />
            <h5 className="portafolio-perfile-h5">Marcos Lopez</h5>
            <p>
              Soy ingeniero en sistemas computacionales, enfocado en Desarrollo
              de Software.<br/>
              <span>Junior Developer</span>
            </p>
            <ul className="portafolio__links">
              <li>
                <Link to=".">Portafolio</Link>
              </li>
              <li>
                <Link to="about">Acerca</Link>
              </li>
              <li>
                <Link to="experiencia">Experiencia</Link>
              </li>
              <li>
                <Link to="contacto">Contacto </Link>
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
