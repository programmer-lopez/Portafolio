import { LinksFunction } from "@remix-run/node";
import stylesUrl from "./styles/contactme.css";

import video from "../../public/videos/Portafolio.mp4";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function ContactoPortafolioRoute() {
  return (
    <div className="video">
      <video autoPlay muted loop id="myVideo">
        <source 
        src={video} 
        type="video/mp4" />
      </video>
    </div>
  );
}
