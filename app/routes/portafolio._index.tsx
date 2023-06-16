import { LinksFunction } from "@remix-run/node";
import Me from "../../public/img/about.jpg";
import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function PortafolioIndexRoute() {
  return (
    <div>
      <h3>Hola, Me llamo Marcos Lopez Sanchez</h3>
      <h4>Desarrollador de Software</h4>
      <p>
        Aspiro como Desarrollador de software, experiencia en React.tsx como
        Junior Developer.
      </p>
      <img src={Me} alt="Acerca-de-Mi" />
    </div>
  );
}
