import TitleSection from '@/components/TitleSection'
import ProjectCard from '@/components/cards/ProjectCard'
import Link from 'next/link'
import React from 'react'

export default function Projet({posts}) {
  return (
    <div className='text-gray-500 md:mx-[20%] '>
      <TitleSection
        title='projet'
      />
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 justify-center w-full max-w-[1170px]'>
           {
        posts.map(post=>(
          <Link href={`post/${post.fields.slug}`}
          key={post.sys.id} > 
          <ProjectCard
          image={post.fields.images.fields.file.url}
          
          />
          </Link>
        ))
      }
        
        </div>
      
      </div>
  )
}

 