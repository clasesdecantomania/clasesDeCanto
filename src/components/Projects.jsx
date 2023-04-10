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
        ¿Te gustaría aprender a cantar y desarrollar tu técnica vocal? En
        nuestro centro de enseñanza musical en Merlo zona oeste ofrecemos clases
        de canto para todos los niveles, desde principiantes hasta avanzados.
        Nuestros profesores altamente capacitados te ayudarán a mejorar tu voz y
        descubrir todo tu potencial artístico.
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
