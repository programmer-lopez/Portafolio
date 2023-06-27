import { Links } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";

import stylesUrl from "./styles/about.css";
import about from "../../public/img/about.jpg";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];
export default function AboutPortafolioRoute() {
  return (
    <main>
      <div className="about-content">
        <Links />
        <div className="about-container">
          <div>
            <h2>Desarrollador de Software</h2>
            <hr />
            <h5>Sobre mí</h5>
            <p>
              Soy una persona que precisa instrucciones organizadas para que un
              ordenador pueda ejecutar sistemas, programas y aplicaciones que
              sean eficaces, accesibles y afable. Con atención, esfuerzo y
              perseverancia.
            </p>
          </div>
          <img src={about} alt="Portafolio" className="portafolio-logo" />
        </div>
        <h4>INGENIERO EN SISTEMAS COMPUTACIONALES</h4>
        <h6>EXPERIENCIA</h6>
        <p>
          Me estoy enfocando en aprender nuevas tecnoloías, actualmente Remix es
          una de ellas, éste Portafolio esta desarrollado en Remix-tsx.
        </p>
        <a href=" https://github.com/programmer-lopez/portafolio-html.git">
          Git del proyecto
        </a>
        <h3>Disponibilidad y compromiso </h3>
        <p>
          Cuento con toda la disponibilidad de esfuerzo, dedicación y tiempo.
          Enfrento situaciones poco comunes, bajo presión desarrollando
          habilidades tanto responsabilidad para un crecimiento propio, con una
          curva de aprendizaje corta.
        </p>
        <h3>APTITUDES</h3>
        <p>
          Siendo autodidacta, responsable con dedicación para trabajar en equipo
          de manera organizada, cumpliendo con cada fragmento referente al
          trabajo; realizando tareas de manera efectiva en tiempo y forma.
        </p>
      </div>
    </main>
  );
}
