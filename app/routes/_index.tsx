import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/routes/styles/syled.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return <div>Hello Marcos Index Route</div>;
}