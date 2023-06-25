import experiencia from "../../public/img/React.png";
import { LinksFunction } from "@remix-run/node";
import stylesUrl from "./styles/experiencia.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function ExperienciaPortafolioRoute() {
  return (
    <div>
      <h2>Experiencia</h2>

      <hr />
      <main>
        <section>
          <h3>
            <span>Desarrollador web</span>
          </h3>
          <h5>Cascada Santiago Yosondúa - Publivalle Dania </h5>
          <p>
            -Me considero una persona Autodidacta, mis proyectos realizados han
            sido con la intesión de obtener nuevas herramientas para un mayor
            conocimientos.
          </p>
          <p>
            -Pagina web Realizada con las siguentes herramientas: Html, Css,
            JavaScript.
          </p>
        </section>
        <section>
          <h3>
            <span>Clonaciones</span>
          </h3>
          <h5>Mercado Libre - Portafolio</h5>
          <p>
            -La experiencia obtenida es por el aprendizaje General de las
            tecnología.
          </p>
          <p>-Fueron realizadas con tecnologias: React( Remix), React js.</p>
        </section>
        <img 
          src={experiencia} 
          alt="Código" 
          className="experiencia-img"
           />
      </main>
    </div>
  );
}
