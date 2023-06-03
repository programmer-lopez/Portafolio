import { Outlet } from "@remix-run/react";
import {Link} from "@remix-run/react";

export default function JokesRoute() {
  return (
    <div>
      <h1 className="home-link">
            <Link
              to="/"
              title="Remix Jokes"
              aria-label="Remix Jokes"
            >
              <span className="logo">🤪f</span>
              <span className="logo-medium">PORTAFOLIO</span>
            </Link>
          </h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
