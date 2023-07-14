import { Links } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";

import stylesUrl from "./styles/about.css";
import about from "../../public/img/about.jpg";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];
export default function AboutPortafolioRoute() {
  return (
    <main>
      <div className="about-content">
        <Links />
        <h2 style={{ textAlign: "center" }}>Desarrollador de Software</h2>
        <h5 style={{ textAlign: "center" }}>Sobre mí</h5>
        <div className="about-container">
          <div className="card">
            <div className="card-content">
              <div className="card-conteiner">
                <span></span>
                <div className="img">
                  <img src={about} alt="Portafolio" />
                </div>
                <p>
                  Soy una persona que precisa instrucciones organizadas para que
                  un ordenador pueda ejecutar sistemas, programas y aplicaciones
                  que sean eficaces, accesibles y afable. Con atención, esfuerzo
                  y perseverancia.
                </p>
              </div>
              <div className="links">
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaGithub />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="card-conteiner">
                <span></span>
                <div className="img">
                  <img src={about} alt="Portafolio" />
                </div>
                <p>
                  Soy una persona que precisa instrucciones organizadas para que
                  un ordenador pueda ejecutar sistemas, programas y aplicaciones
                  que sean eficaces, accesibles y afable. Con atención, esfuerzo
                  y perseverancia.
                </p>
              </div>
              <div className="links">
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaGithub />
                </a>
                <a href="#">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
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
