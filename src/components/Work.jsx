import React from 'react';
import WorkItem from './WorkItem';

const data = [
  {
  year: 2022,
  title: 'Participación en la obra "El Jorobado de París" - Cibrián-Mahler, interpretando el papel del poeta Pierre Gringore',
  duration: 'Actualidad',
  details:
  'Formo parte del elenco de la obra y asumo el papel del poeta Pierre Gringore.',
  },
  {
  year: 2019,
  title: 'Docente de canto para adultos y jóvenes en el Centro Cultural Abiespaciodearte en Parque San Martin',
  duration: 'Actualidad',
  details:
  'Imparto clases de técnica vocal y repertorio a estudiantes de diferentes edades y niveles para ayudarles a desarrollar su habilidad vocal.',
  },
  {
  year: 2014,
  title: 'Integrante del Coro del Conservatorio Alberto Ginastera de Morón',
  duration: '1 Año',
  details:
  'Participé en distintas presentaciones del coro, incluyendo un concierto en el "Teatro Gran Rex" en octubre de 2014, lo que me permitió desarrollar mis habilidades como cantante y mejorar mi técnica vocal.',
  },
  {
  year: 2013,
  title: 'Recital como solista en el Auditorio de Belgrano',
  duration: '1 Presentación',
  details:
  'Presenté un recital como solista en el Auditorio de Belgrano en el año 2013, lo que me permitió mostrar mi talento y consolidar mi experiencia como intérprete.',
  },
  {
  year: 2012,
  title: 'Recital como solista en el Museo de Bellas Artes de Moreno, Francisco Molina Campos',
  duration: '1 Presentación',
  details:
  'Presenté un recital como solista en el "Museo de Bellas Artes de Moreno, Francisco Molina Campos" en el año 2012, lo que me permitió adquirir experiencia como intérprete en distintos espacios culturales.',
  },
  {
  year: 2007,
  title: 'Asistente de la profesora de técnica vocal del Coro Italiano de Merlo',
  duration: 'Actualidad',
  details:
  'Colaboro en la enseñanza de la técnica vocal y en la preparación de los ensayos y presentaciones del coro, lo que me permite mejorar mis habilidades como cantante y docente.',
  },
  {
  year: 2007,
  title: 'Jefe de Cuerda de Tenor en el Coro Italiano de Merlo, perteneciente a la Sociedad Italiana de Merlo',
  duration: 'Actualidad',
  details:
  'Soy el responsable de la coordinación y liderazgo de los tenores en el coro, participando en distintos eventos y viajes, y contribuyendo a la calidad musical del grupo.',
  },
  ];

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-8'>Experiencia</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
