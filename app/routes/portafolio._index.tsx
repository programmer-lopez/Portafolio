import { LinksFunction } from "@remix-run/node";
import perfile from "../../public/img/perfile.png";
import stylesUrl from "./styles/portaIndex.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function PortafolioIndexRoute() {
  return (
    <div className="portafolio_acerca">
      <section id="portafolio_index">
        <div className="section-developer">
          <img className="perfile-img" src={perfile} alt="Marcos_Lopez" />
          <div className="portafolio__acerca_info">
            <h3>Ingeniero: Marcos Lopez Sanchez</h3>
            <h4>Desarrollador de Software</h4>
            <p>Aspiro como Desarrollador de software</p>
            <p>Experiencia en React, java, Spring Boot, Mongo DB </p>
            <h3>Habilidades</h3>
            <p>La experiencia obtenida es por el aprendizaje autodidacta con ayuda de las tecnología de la informacion.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
