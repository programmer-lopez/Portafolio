import { 
  LiveReload, 
  Outlet,
  Links,
} from "@remix-run/react";


export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <link rel="stylesheet" href="./index.css" />
        <title>Remix: So great, it's funny!</title>
        <Links/>
      </head>
      <body>
        <Outlet/>
        <LiveReload />
      </body>
    </html>
  );
}
