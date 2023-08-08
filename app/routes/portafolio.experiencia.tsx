import { LinksFunction } from "@remix-run/node";
import stylesUrl from "./styles/experiencia.css";

import { RiPagesFill } from "react-icons/ri";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function ExperienciaPortafolioRoute() {
  return (
    <div>
      <h1>Experiencia</h1>
      <hr />
      <main>
        <section>
          <div className="container">
            <div className="card">
              <h2>
                <span>Desarrollador web</span>
              </h2>
              <div className="bar">
                <div className="emptybar"></div>
                <div className="filledbar"></div>
              </div>
              <div className="circle">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle className="stroke" cx={60} cy={60} r={50} />
                </svg>
              </div>
            </div>
            
          </div>
        </section>
      </main>
    </div>
  );
}

/*<h2>
              <span>Clonaciones</span>
            </h2>
            <p>
              La experiencia obtenida es por el aprendizaje General de las
              tecnología.
            </p>
            <div className="carouse">
              <div className="elements">
                <h4>Cascada Santiago Yosondúa</h4>
                <p>
                  -Pagina web Realizada con las siguentes herramientas: Html,
                  Css, JavaScript.
                </p>
                <a
                  className=""
                  href="https://cascada-yosondua-no-oficial.netlify.app/"
                >
                  <RiPagesFill />
                </a>
              </div>
              <div className="elements">
                <h4>Publivalle Dania </h4>
                <p>
                  -Pagina web Realizada con las siguentes herramientas: Html,
                  Css, JavaScript.
                </p>
                <a className="" href="https://publivalle-dania.netlify.app/">
                  <RiPagesFill />
                </a>
              </div>
              <div className="elements">
                <h4>Mercado Libre </h4>
                <p>
                  -Fueron realizadas con tecnologias: React( Remix), React js.
                </p>
                <a className="" href="https://mercado-libre-clone.netlify.app/">
                  <RiPagesFill />
                </a>
              </div>
              <div className="elements">
                <h4>Portafolio</h4>
              </div>
            </div> */
