import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video px-12 py-10 flex flex-col gap-4 absolute text-white bg-gradient-to-r from-zinc-900 -z-0 justify-center'>
        <h1 className='font-bold text-5xl'>{title}</h1>
        <p className='text-lg w-1/3'>{overview}</p>
        <div className='flex gap-2'>
            <button className='bg-white text-black px-5 py-2 text-lg rounded-md hover:bg-opacity-80'>▶ Play</button>
            <button className='bg-gray-500 text-white px-5 py-2 text-lg rounded-md hover:bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle