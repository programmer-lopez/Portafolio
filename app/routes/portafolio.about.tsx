import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/components/about.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function AboutPortafolioRoute() {
  return (
    <main>
      <div className="color">
        <p>Portafolio AboutPortafolioRoute</p>
        <p>Hello World</p>
      </div>
    </main>
  );
}
