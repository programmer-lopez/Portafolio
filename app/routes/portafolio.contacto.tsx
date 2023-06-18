import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/contactme.css"; 

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function ContactoPortafolioRoute() {
    return (
      <div className="grid">
        <div className="card">
      <h4>Informacion</h4>
      <p>Standard chunk of Lorem Ipsum used since the 1500s is showed below
      for those interested.</p>
        </div>
      </div>
    );
  }