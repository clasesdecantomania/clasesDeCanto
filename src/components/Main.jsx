import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  FaFacebookF,
  FaInstagram,
  FaLink,
} from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main' >
      <img
        className='w-full h-screen object-cover object-left rotate-y-180 mx-auto'
        src='https://i.postimg.cc/4y6KPRRY/313994861-10226718918975020-3744391805926796704-n.jpg'
        alt='/'
      />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center mt-[30vh]'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Brian Alonso Volarich</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            Clases de 
            <TypeAnimation
              sequence={[
                'Canto', // Types 'One'
                2000, // Waits 1s
                'Música', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Dirección Coral', // Types 'Three' without deleting 'Two'
                2000,
                () => {
                },
              ]}
              wrapper='span'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
          <a href='https://www.facebook.com/profile.php?id=100063654342475' target='_blank' rel='noopener noreferrer'>
            <FaFacebookF className='cursor-pointer' size={20}/>
            </a>
            <a href='https://www.instagram.com/brian_alonsovolarich/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='cursor-pointer' size={20}/>
            </a>
            <a href='https://drive.google.com/file/d/14quILgT7fpniOiHSn2dvw41bgPCiqRFK/view?usp=share_link' target='_blank' rel='noopener noreferrer'>
            <FaLink className='cursor-pointer' size={20}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
