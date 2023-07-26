import { LinksFunction } from "@remix-run/node";
import stylesUrl from "./styles/contactme.css";
import { Link } from "@remix-run/react";

import video from "../../public/videos/Portafolio.mp4";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function ContactoPortafolioRoute() {
  return (
    <div className="contactme">
      <div className="video">
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <Link className="button"
        to="https://drive.google.com/file/d/1I6Gz0FbIle17-6rES018pqQUAK4lWM3f/view?usp=drive_link"
        download="CV"
        reloadDocument
      >
        <button>
          <span></span>CV.pdf
        </button>
      </Link>
    </div>
  );
}
