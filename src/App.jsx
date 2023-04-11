import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Helmet } from "react-helmet";

function App() {
  const shareImage = "https://i.postimg.cc/SNkK631z/clases-Canto.png";

  const pageTitle = "Clases de Canto | Merlo";
  const pageDescription = "Aprende a cantar con Brian, profesor de canto en Merlo, Argentina. Clases personalizadas para todos los niveles y edades.";
  const pageUrl = "https://clases-de-canto.netlify.app/";

  return (
    <div>
      <Helmet>
        <html lang="es" />
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <link rel="canonical" href={pageUrl} />
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://i.postimg.cc/SNkK631z/clases-Canto.png" />
        <meta property="og:image:secure_url" content="https://i.postimg.cc/SNkK631z/clases-Canto.png" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Tu nombre" />
        <meta name="generator" content="React, Vite" />
      </Helmet>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;