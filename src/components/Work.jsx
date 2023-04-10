import React from 'react';
import WorkItem from './WorkItem';

const data = [
{
year: 2022,
title: 'Director del Coro de la Escuela Nacional de Música Carlos López Buchardo',
duration: '1 Año',
details:
'Encargado de la dirección del coro y la organización de ensayos y presentaciones.',
},
{
year: 2019,
title: 'Profesor de Canto en la Escuela de Música Popular de Avellaneda',
duration: '3 Años',
details:
'Impartí clases de técnica vocal y repertorio a estudiantes de diferentes edades y niveles.',
},
{
year: 2016,
title: 'Participación en la obra "Los Miserables" en el Teatro Ópera',
duration: '6 Meses',
details:
'Formé parte del elenco del coro y también interpreté algunos solos en esta reconocida obra.',
},
{
year: 2014,
title: 'Participación en la ópera "La Traviata" en el Teatro Colón',
duration: '4 Meses',
details:
'Formé parte del coro estable en esta prestigiosa ópera, interpretando diferentes papeles secundarios.',
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
