import { LinksFunction } from "@remix-run/node";
import stylesUrl from "./styles/experiencia.css";
import Cascada from "../../public/svg/icon-portafolio.svg";
import Publivalle from "../../public/svg/icon-portafolio.svg";
import Mercado from "../../public/svg/icon-portafolio.svg";
import Portafolio from "../../public/svg/icon-portafolio.svg";

import { RiPagesFill } from "react-icons/ri";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function ExperienciaPortafolioRoute() {
  return (
    <div>
      <main className="content">
      <h1>Experiencia</h1>
      <h2 className="Subtitle">Clonaciones</h2>
      <p>
        La experiencia obtenida es por el aprendizaje General de las tecnologías.
      </p>
        <hr />
        <section>
          <div className="container">
            {/* aqui inicia carousel */}
            <div className="card">
              <h2 className="title">
                <span>Cascada Santiago Yosondúa</span>
              </h2>
              <div className="bar">
                <div className="emptybar"></div>                
                <div className="filledbar"></div>                
              </div>
              <div className="subtitle">
              <p>
                  -Pagina web Realizada con las siguentes herramientas: Html,
                  Css, JavaScript.
                </p>
              </div>
              <div className="circle">              
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle className="stroke" cx={60} cy={98} r={50} />
                  <img className="perfile-img" src={Cascada} alt="Marcos_Lopez" />
                </svg>
                <a
                  className="icon"
                  href="https://cascada-yosondua-no-oficial.netlify.app/"
                >
                  <RiPagesFill />
                </a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card">
              <h2 className="title">
                <span>Pagina Publivalle Dania</span>
              </h2>
              <div className="bar">
                <div className="emptybar"></div>                
                <div className="filledbar"></div>                
              </div>
              <div className="subtitle">
              <p>
                  -Pagina web Realizada con las siguentes herramientas: Html,
                  Css, JavaScript.
                </p>
              </div>
              <div className="circle">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle className="stroke" cx={60} cy={98} r={50} />
                  <img className="perfile-img" src={Publivalle} alt="Marcos_Lopez" />
                </svg>
                <a
                  className="icon"
                  href="https://publivalle-dania.netlify.app/"
                >
                  <RiPagesFill />
                </a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="card">
              <h2 className="title">
                <span>Clone Mercado Libre</span>
              </h2>
              <div className="bar">
                <div className="emptybar"></div>                
                <div className="filledbar"></div>                
              </div>
              <div className="subtitle">
              <p>
                  -Pagina web Realizada con las siguentes herramientas: Html,
                  Css, JavaScript.
                </p>
              </div>
              <div className="circle">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle className="stroke" cx={60} cy={98} r={50} />
                  <img className="perfile-img" src={Mercado} alt="Marcos_Lopez" />
                </svg>
                <a
                  className="icon"
                  href="https://mercado-libre-clone.netlify.app/"
                >
                  <RiPagesFill />
                </a>
              </div>
            </div>
            {/* Card 4 */}
            <div className="card">
              <h2 className="title">
                <span>Github: Codigo de este Portafolio</span>
              </h2>
              <div className="bar">
                <div className="emptybar"></div>                
                <div className="filledbar"></div>                
              </div>
              <div className="subtitle">
              <p>
                  -Pagina Realizada con documentacion de  <a href="https://remix.run/">https://remix.run/</a>.
                </p>
              </div>
              <div className="circle">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle className="stroke" cx={60} cy={98} r={50} />
                  <img className="perfile-img" src={Portafolio} alt="Marcos_Lopez" />
                </svg>
                <a
                  className="icon"
                  href="https://github.com/programmer-lopez/portafolio-html"
                >
                  <RiPagesFill />
                </a>
              </div>
            </div>
            
            {/* <div className="card">
              <h2 className="title">
                <span>Publivalle Dania</span>
              </h2>
              <div className="bar">
                <div className="emptybar"></div>
                <p>
                  -Pagina web Realizada con las siguentes herramientas: Html,
                  Css, JavaScript.
                </p>
                <div className="filledbar"></div>
                <a className="" href="https://publivalle-dania.netlify.app/">
                  <RiPagesFill />
                </a>
              </div>
              <div className="circle">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle className="stroke" cx={60} cy={98} r={50} />
                </svg>
              </div>
            </div>
            <div className="card">
              <h2 className="title">
                <span>Mecado Libre</span>
              </h2>
              <div className="bar">
                <div className="emptybar"></div>
                <p>
                  -Fueron realizadas con tecnologias: React( Remix), React js.
                </p>
                <div className="filledbar"></div>
              </div>
              <div className="circle">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle className="stroke" cx={60} cy={98} r={50} />
                </svg>
              </div>
            </div>
            <div className="card">
              <h2 className="title">
              <span>Portafolio en Remix</span>
              </h2>
              <div className="bar">
                <div className="emptybar"></div>
                <a className="" href="https://mercado-libre-clone.netlify.app/">
                  <RiPagesFill />
                </a>
                <div className="filledbar"></div>
              </div>
              <div className="circle">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <circle className="stroke" cx={60} cy={98} r={50} />
                </svg>
              </div>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}