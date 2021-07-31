import React from 'react';
import obj from './data/projects.json'

const FeaturesElement = (data) => {
  let obj = data.data
  return (
    <div className='bg-white mb-12 overflow-hidden rounded-xl border shadow lg:w-1/3'>
      <div className=' h-72 overflow-hidden'>
        <img className='w-full object-cover' src={require('./images/'+obj.image+'').default} alt='Cover' />
      </div>
      <div className='flex flex-col px-8 py-4 pb-10 bg-black text-white'>
        <div className='text-lg font-bold'>{obj.headline}</div>
        <div className='text-basefont-normal mt-1 leading-relaxed'>{obj.description}</div>
        <a href={obj.link} rel='nofollow noreferrer noopener' target='_blank' id="link" className='bg-white text-black rounded p-3 mt-9 text-base font-bold flex space-x-1'>
          <div>View</div>
          <img className='w-4' src={require('./icon/link.svg').default} alt='Link' />
        </a>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className='bg-white min-h-screen flex flex-col justify-start pt-12 conta6iner mx-auto px-6'>
      <div className='text-sm mb-10 font-bold opacity-80'>MY PROJECTS</div>
      <div className='flex flex-col lg:flex-row'>
        {obj.projects.map((obj, key) => {return <FeaturesElement key={key} data={obj}/> })}
      </div>
    </div>
  )
}

export default Projects
