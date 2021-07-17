import React from 'react';
import { Link } from 'react-router-dom';

const Arrow = () => {
  return <svg class="w-3 h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
}


const CTA = () => {
  return (
    <div className='flex'>
      <Link to='/upcoming' className='flex justify-start text-sm font-semibold text-white bg-indigo-800 py-2 px-4 rounded-full'>
        <div className='flex-1 mr-3'>View now</div>
        <div><Arrow /></div>
        </Link>
    </div>
  )
}

const Intro = () => {
  return (
    <div className='flex text-black'>
      <div className='flex flex-col'>
        <div className='text-6xl font-bold opacity-100 leading-snug whitespace-pre-line mb-7'>{"404\nError!"}</div>
      </div>
    </div>
  )
}


const Dashboard = () => {
  return (
    <div className='bg-white'>
      <div className='flex flex-col justify-start h-screen mx-5 px-3'>
        <div className='mt-16 mb-7'><Intro/></div>
        <div className='text-base font-medium opacity-80 leading-snug mb-7'>
          {"This mini website is a fun little way to present my skills to employers while also storing all the side-projects which I develop in my spare time."}
        </div>
        <div className='text-base font-medium opacity-80 leading-snug mb-7'>
          Bare with me as the website is quite - sparse, but it is always being updated. For now, have a look at <b>my upcoming projects!</b>
        </div>
        <div className='mb-7'><CTA /></div>
      </div>
    </div>
  )
}

export default Dashboard
