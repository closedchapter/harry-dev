import React from 'react';
import { Link } from 'react-router-dom';
import data from './data/data.json'


const Landing = () => {
  return (
    <div className='bg-indigo-800 h-screen flex flex-col justify-start lg:whitespace-pre-line pt-12'>
      <div className='text-xl md:text-2xl font-normal container mx-auto p-12 py-20 text-white text-left md:text-center animate-fade-in-down'>
          <div className='text-6xl md:text-8xl font-bold mb-12'>{data.header}</div>
          <div className='mb-12 flex flex-col justify-center items-center'>
            <div className=' lg:w-1/2'>
              <div className='mb-16 leading-relaxed'>{data.subtitle}</div>
              <div className=''>{data.subtitle2}</div>
            </div>
          </div>
          <Link to='./projects' className='mx-auto text-lg bg-black rounded-xl md:rounded-full p-5 px-12 font-bold w-max select-none active:bg-white active:text-black'>Click here</Link>
      </div>
    </div>
  )
}

export default Landing
