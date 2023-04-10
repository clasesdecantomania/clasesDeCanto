import React from "react";
import ProjectItem from "./ProjectItem";
import traviata from "../assets/traviata.jpg";
import jorobadodeparis from "../assets/jorobadodeparis.webp";
import canto from "../assets/canto.webp";
import briancanto from "../assets/briancanto.webp";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 ру-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Geleria de imagenes
      </h1>
      <p className="text-center py-8">
        Soy un cantante lírico y docente de canto con amplia experiencia en
        la enseñanza de técnica y repertorio. Mi formación en el Conservatorio
        Alberto Ginastera de Morón y el trabajo con renombrados profesores de
        canto como Santiago Sirur, Sergio Giai, Cesar Tello y Gabriel Astorga,
        me han brindado valiosas herramientas técnicas y de interpretación.
        Además, he participado en conciertos líricos y montajes de musicales, lo
        que me ha permitido seguir creciendo como artista y ahora, aplico todos
        mis conocimientos para ayudar a mis estudiantes a descubrir y potenciar
        sus habilidades vocales. Si buscas alcanzar tu máximo potencial vocal y
        desarrollar todo tu talento artístico, ¡estás en el lugar adecuado! Con
        mi enfoque personalizado y alentador, te guiaré para superar tus
        limitaciones y alcanzar tus objetivos en un ambiente amigable y seguro.
        Únete a mi comunidad de aprendizaje musical y descubre todo lo que
        puedes lograr con tu voz. ¡Comienza hoy mismo tu camino hacia el éxito
        vocal!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={jorobadodeparis} title="Jorobado de Paris" />
        <ProjectItem img={traviata} title="La Traviata" />
        <ProjectItem img={canto} title="Clases de Canto" />
        <ProjectItem img={briancanto} title="Clases de Música" />
      </div>
    </div>
  );
};
export default Projects;
