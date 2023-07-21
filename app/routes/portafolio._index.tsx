import { LinksFunction } from "@remix-run/node";
import perfile from "../../public/img/perfile.png";
import stylesUrl from "./styles/portaIndex.css";
import { FaReact,FaJava,FaFileCode, FaMdb} from "react-icons/fa6";

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
            <h1 className="portafolio-h1">Ingeniero: Marcos Lopez Sanchez</h1>
            <h2  className="portafolio-h2">Desarrollador de Software</h2>
            <p></p>
            <h3 className="portafolio-h3">Habilidades</h3>
            <p>
              Experiencia en <FaReact/>React, <FaJava/>java, <FaFileCode/>Spring Boot,<FaMdb/> Mongo DB <br />
              La experiencia obtenida es por el aprendizaje autodidacta con
              ayuda de las tecnología de la informacion.
            </p>
            <h3 className="portafolio-h3">Disponibilidad y compromiso </h3>
            <p className="portafolio-p">
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
