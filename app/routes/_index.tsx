import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/routes/styles/syled.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return (
    <section className="hero" id="hero">
    <img src="assets/images/Junior.svg" alt="Marcos-Lopez" loading="lazy" className="hero-img" />
    <div className="hero-bio animate__animated animate__shakeX">
      <h2 className="hero-bio-titulo">Sobre Mí</h2>
      <p className="hero-bio-texto">
        Soy una persona capaz de trabajar en equipo aportando ideas, debido a mi experiencia
        como Operador de Recepción Digital era necesario la comunicación entre departamento
        para ser eficaz también ser multitarea manteniéndome en comunicación con mi equipo,
        debido a ser un aprendiz proactivo me he dado a la tarea de esforzarme en aprender
        para mejorar constantemente.
      </p>
    </div>
  </section>
  )
  ;
}