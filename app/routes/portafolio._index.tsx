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
            <h1>Ingeniero: Marcos Lopez Sanchez</h1>
            <h2>Desarrollador de Software</h2>
            <p></p>
            <h3>Habilidades</h3>
            <p>
              Experiencia en React, java, Spring Boot, Mongo DB <br />
              La experiencia obtenida es por el aprendizaje autodidacta con
              ayuda de las tecnología de la informacion.
            </p>
            <h3>Disponibilidad y compromiso </h3>
            <p>
              Cuento con toda la disponibilidad de esfuerzo, dedicación y
              tiempo. Enfrento situaciones poco comunes, bajo presión
              desarrollando habilidades tanto responsabilidad para un
              crecimiento propio, con una curva de aprendizaje en base a mi
              experiencia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
