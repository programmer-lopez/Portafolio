import { LinksFunction } from "@remix-run/node";
import stylesUrl from "./styles/contactme.css"

import work from "../../public/img/theworkingdead.webp";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function ContactoPortafolioRoute() {
    return (
      <main>
        <h1>Sorry, I'm Working</h1>
        <img src={work}/>
      </main>
    );
  }