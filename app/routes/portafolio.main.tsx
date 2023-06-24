import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/portafolio.css";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesUrl },
  ];

export default function portafolioMain() {
  return (
    <div className="portafolio-list">
      <div className="portafolio-perfile">
        <h5>Marcos Lopez</h5>
        <ul>
          <li>
            <Link to=".">Portafolio</Link>
          </li>
          <li>
            <Link to="about">About</Link>
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
  );
}
