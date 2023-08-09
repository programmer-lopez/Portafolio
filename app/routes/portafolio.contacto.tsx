import { LinksFunction } from "@remix-run/node";
import stylesUrl from "./styles/contactme.css";
import { Link } from "@remix-run/react";

import video from "../../public/videos/Portafolio.mp4";
import Junior from "../../public//img/Junior.svg"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function ContactoPortafolioRoute() {
  return (
    <main>
      <div className="contactame">
        <div className="container">
          <h1>Desarrolador Junior</h1>
          <h2>Marcos Lopez Sanchez</h2>
          <h4>PORTAFOLIO CONTACTO</h4>
          {/*car 1*/}
          <div className="card">
           <img src={Junior} alt="" />
          </div>
          {/*car 2*/}
          <div className="card">
           <img src={Junior} alt="" />
          </div>
          {/*car 3*/}
          <div className="card">
           <img src={Junior} alt="" />
          </div>
        </div>
        <Link
          className="button"
          to="https://drive.google.com/file/d/1I6Gz0FbIle17-6rES018pqQUAK4lWM3f/view?usp=drive_link"
          download="CV"
          reloadDocument
        >
          <button>
            <span></span>CV.pdf
          </button>
        </Link>
      </div>
      {/* <div className="video">
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
      </div> */}
    </main>
  );
}
