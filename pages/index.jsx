import Head from "next/head"
import { useState } from 'react'

import { getDatabasePages, getPageProperties } from "./api/connectNotion.jsx";

import { FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';

import Projects from "@/components/Projects.jsx"
import Experience from "@/components/Experience.jsx"
import Connect from "@/components/Connect.jsx"

export default function Home({ projects, summaries, techs}) {
    const [activeSection, setActiveSection] = useState("Projects")
    function handleClick(section){
        setActiveSection(section)
    }

  return (
      <div>
        <Head>
          <title>Karim's Portfolio</title>
          <meta name="Description" content="Welcome to Karim Jaouhar's Portfolio"/>
          <link rel="icon" href="/fav.png" />
        </Head>

        <main className="">
          <div className="flex flex-wrap bg-white dark:bg-gray-950 max-w-screen-lg mx-auto pt-10">
            <div className="w-full lg:w-1/2 px-6 py-5">
              <h1 className="leading-tight text-5xl text-black dark:text-gray-100 font-light">Hello, I'm <br /> <span className="font-medium">Karim Jaouhar</span></h1>
              <p className="font-light text-m pt-10 text-gray-900 dark:text-gray-200">As a 3rd-year <u>computer science student</u> at York University, I am passionate about exploring the vast field of computer science and continually expanding my knowledge and skill set.<br /><br /> I have a strong foundation in <u>data structures and algorithm design</u>, as well as some experience in <u>software development</u>, <u>cybersecurity</u>, and <u>machine learning</u>, I am constantly <u>seeking opportunities</u> to apply my skills and provide value to a team.</p>
              <ul className="pt-8 font-light text-gray-900 dark:text-gray-200">
                <li><a className="cursor-pointer hover:font-normal " onClick={()=> handleClick('Projects')}>_________ Projects</a></li>
                <li className="pt-2"><a className="cursor-pointer hover:font-normal" onClick={()=> handleClick('Experience')}>_________ Experience</a></li>
                <li className="pt-2"><a  className="cursor-pointer hover:font-normal" onClick={()=>handleClick('Connect')}>_________ Connect</a></li>
              </ul>
      <ul className="flex font-light text-sm space-x-4 pt-10 text-gray-900 dark:text-gray-200">
      <li>
        <a href="https://github.com/your-username">
          <FaGithub className="cursor-pointer w-5 h-5 inline-block" />
          <span className="pl-2">GitHub</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/your-username/">
          <FaLinkedin className="cursor-pointer w-5 h-5 inline-block" />
          <span className="pl-2">LinkedIn</span>
        </a>
      </li>
      <li>
        <button className="bg-gray-200 dark:bg-gray-800 font-normal py-2 px-4 rounded-full -mt-1 ml-5">
        <a href="/path/to/resume.pdf" download> Resume</a>
      </button>
      </li>
      <li>
        <button className="bg-gray-200 dark:bg-gray-800 font-normal py-2 px-4 rounded-full -mt-1">
        <a href="/path/to/resume.pdf" download> Email me</a>
      </button>
      </li>
    </ul>
    <hr className="border-1 border-gray-500 mt-10 lg:mt-0 lg:border-0" />
            </div>
            <div className="w-full bg-gray-950 min-h-200 lg:w-1/2 h-auto px-6 py-5 lg:mt-28">
              {activeSection === 'Projects' && <Projects projects = {projects} summaries={summaries} techs={techs} />}
              {activeSection === 'Experience' && <Experience />}
              {activeSection === 'Connect' && <Connect />}
            </div>
          </div>
        </main>
      </div>
  )
}
export async function getStaticProps(){
  const {response} = await getDatabasePages();
  const summaries = await getSummaries(response);
  const techs = await getTechs(response)
  return {
    props:{
      projects: response.results,
      summaries: summaries,
      techs: techs
    }
  }
}

async function getTechs(database){
  if(database){
    const pageIds = database.results.map((page)=>page.id)
    const techId = database.results[1].properties.Tech.id
    const techs = await Promise.all(pageIds.map(async (pageId) => {
      const tech = await getPageProperties(pageId, techId)
      const techTags = tech.response.multi_select;
      if (techTags.length>0){
        return (techTags.map((techTag)=> [techTag.name, techTag.id]));
      }else{
        return []
      }
      
    }));
    return techs
  }else{
    return []
  }
}

async function getSummaries(database){
  if(database){
    const pageIds = database.results.map((page)=>page.id)
    const summaryId = database.results[1].properties.Summary.id
    const summaries = await Promise.all(pageIds.map(async (pageId) => {
      const summary = await getPageProperties(pageId, summaryId)
      if (summary.response.results.length>0){
        return (summary.response.results[0].rich_text.plain_text);
      }else{
        return ""
      }
      
    }));
    return summaries
  }else{
    return []
  }
}