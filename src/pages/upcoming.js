import React from 'react';

const Tech = () => {
  return <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
}


const Intro = () => {
  return (
    <div className='flex text-black'>
      <div className='flex flex-col'>
        <div className='text-4xl font-bold opacity-100 leading-snug whitespace-pre-line mb-7'>{"my upcoming projects👀"}</div>
      </div>
    </div>
  )
}

const Content = () => {
  return (
    <div className='flex flex-col text-white bg-indigo-600 p-3 px-6 rounded-xl opacity-100 mb-7'>
      <div className='flex items-center space-x-3 text-2xl font-bold leading-snug pb-2 mb-3 border-b border-white border-opacity-20'>
        <div>📝 CV Builder</div>
      </div>
      <div className='text-base font-medium leading-snug mb-3'>
        CV Builder is a web app that people can use to create amazing-looking CV's that will make them stand-out to employers, amongst other candidates.
      </div>
      <div className='text-base font-medium leading-snug mb-3'>
        Alot of young people don't have or don't know how to make a CV. This app should make it easier for thousands of young teens to create and have professional-looking CV's.
      </div>
    </div>
  )
}


const Dashboard = () => {
  return (
    <div className='bg-white'>
      <div className='flex flex-col justify-start h-screen mx-5 px-3'>
        <div className='mt-16 mb-7'><Intro/></div>
        <div className='mb-7'><Content/></div>
      </div>
    </div>
  )
}

export default Dashboard