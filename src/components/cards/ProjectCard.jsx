import React from 'react'

export default function ProjectCard({image}) {
  return (
    <div className='w-[390px] h-[300px] overflow-hidden'>
      <img src={image} alt="image" className='max-w-full max-h-full' /> 
    </div>
  )
}
