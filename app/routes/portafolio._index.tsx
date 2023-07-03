import { LinksFunction } from "@remix-run/node";
import Me from "../../public/img/about.jpg";
import perfile from "../../public/img/perfile.png";
import stylesUrl from "./styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function PortafolioIndexRoute() {
  return (
    <div className="portafolio_acerca">
      <section id="portafolio_index">
        <div className="section-developer">
          <img className="perfile-image" src={perfile} alt="Marcos_Lopez" />
          <h3>Hola, Me llamo Marcos Lopez Sanchez</h3>
          <div className="portafolio__acerca_info">
            <h4>Desarrollador de Software</h4>
            <p>
              Aspiro como Desarrollador de software, experiencia en React.tsx
              como Junior Developer.
            </p>
            <img className="acerca-de-mi" src={Me} alt="Acerca-de-Mi" />
          </div>
        </div>
      </section>
    </div>
  );
}
