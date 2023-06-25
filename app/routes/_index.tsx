import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          portafolio <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="portafolio">Marcos Lopez</Link>
            </li>
            <li>
              <Link to="portafolio">CV.pdf</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
