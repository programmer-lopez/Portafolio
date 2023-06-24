import type { LinksFunction } from "@remix-run/node";
import { Link, Links, Outlet } from "@remix-run/react";

import stylesUrl from "~/styles/portafolio.css";
import portafolio from "../../public/svg/icon-portafolio.svg";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function PortafoliosRoute() {
  return (
    <div className="portafolio-layout">
      <header className="portafolio-header">
        <div className="container">
          <img src={portafolio} alt="Portafolio" className="portafolio-logo" />
          <h2 className="home-link">
            <Link to="/" title="Portafolio" aria-label="Remix Portafolio">
              <span className="logo-medium">Developer with TypesScript</span>
            </Link>
          </h2>
        </div>
      </header>
      <main className="portafolio-main">
        <div className="portafolio__container-perfile">
         <Links/>
        </div>
        <div className="portafolio-outlet">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
