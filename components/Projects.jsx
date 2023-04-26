import React from 'react'
import Link from "next/link";
import Image from 'next/image';

import { FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';

function ProjectCard ({title, id, summary, techs, image}){
  return (
    
        <div className='bg-gray-200 dark:bg-gray-800 rounded-md my-2 px-5 py-5 flex space-x-5 max-w-md'>
          <div className='w-1/6'>
            <Image src={image} width={100} height={100} className="w-16 h-16 rounded-xl overflow-hidden object-cover object-center"/>
          </div>

          <div className='w-5/6'>
          <div className="flex">
            <div className='w-3/5'>
              <ul className='flex space-x-2 text-xs mb-2 text-blue-200 text-left'>
                {techs.map((tech)=> <li key={tech[1]}><h6>{tech[0]}</h6></li>)}
              </ul>
            </div>
            <div className='w-2/5 text-right'>
            <ul className='flex font-light text-sm space-x-4 text-gray-900 dark:text-gray-300 justify-end mt-1'>
            {/*<li className='text-right'><p className='text-xs font-medium'>Visit</p></li>*/}
              <li className='text-right'><Link href={"https://github.com/karimjawhar5/"+title}><FaGithub className="cursor-pointer w-5 h-5"/></Link></li>
            </ul>
            </div>
          </div>

          <Link href={`/projects/${id}`}>
            <h2 className='text-xl mb-1'>{title}</h2>
          </Link>
          <p className='text-sm font-light text-gray-300'>{summary}</p>
          </div>
        </div>
  )
}

export default function Projects({projects, summaries, techs}) {
  return (
    <div>
      <h2 className='mb-5 text-gray-900 dark:text-gray-200'> My Projects </h2>
      { projects?.map( (project, i) =>(
        <ProjectCard key={project.id} title={project.properties.Name.title[0]?.plain_text || ''} id={project.id} summary={summaries[i]} techs={techs[i]} image={project.cover?.external.url || "/fav.png"}/>
      )
      )}
    </div>
  )
}