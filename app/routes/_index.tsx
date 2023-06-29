import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "./styles/local.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <h1>
           <span>Portafolio</span>
        </h1>
        <nav>
          <ul>
            <li className="row">
              <Link to="portafolio">Marcos Lopez</Link>
            </li>
            <li className="row">
              <Link to="portafolio">CV.pdf</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
