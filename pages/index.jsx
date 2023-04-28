import Head from "next/head"
import { useState, useEffect } from 'react'

import { getDatabasePages } from "./api/connectNotion.jsx";
import {getTechs, getSummaries} from './api/business.jsx'

import { FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';

import Projects from "@/components/Projects.jsx"
import Experience from "@/components/Experience.jsx"
import Connect from "@/components/Connect.jsx"

export default function Home({ projects, summaries, techs}) {
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState("Projects")
    function handleClick(section){
        setActiveSection(section)
    }

  return (
      <div>
        <Head>
          <title>Karim's Portfolio</title>
          <meta name="Description" content="Welcome to Karim Jaouhar's Portfolio"/>
        </Head>

        <main className="text-gray-950 dark:text-gray-200 font-light">
          <div className="flex flex-wrap lg:max-w-screen-xl md:max-w-screen-md  mx-auto px-4 lg:px-8 py-10">

            <div className="w-full lg:pr-8 lg:w-1/2 border-b lg:border-r lg:border-b-0 dark:border-gray-700 border-gray-200">

              <h1 className="lg:leading-snug text-4xl md:text-5xl text-gray-950 dark:text-gray-100 ">Hello, I'm <br /> <span className="font-medium">Karim Jaouhar</span></h1>
              <p className="mt-8 md:mt-10">As a 3rd-year <u>computer science student</u> at York University, I am passionate about exploring the vast field of computer science and continually expanding my knowledge and skill set.<br /><br /> I have a strong foundation in <u>data structures and algorithm design</u>, as well as some experience in <u>software development</u>, <u>cybersecurity</u>, and <u>machine learning</u>, I am constantly <u>seeking opportunities</u> to apply my skills and provide value to a team.</p>
              
              <ul className="mt-10 md:mt-12 ">
                {activeSection=="Projects"?<li><a className="cursor-pointer font-medium">_________ Projects</a></li>:<li><a className="cursor-pointer hover:font-medium" onClick={()=> handleClick('Projects')}>_________ Projects</a></li>}
                {activeSection=="Experience"?<li className="pt-2"><a className="cursor-pointer font-medium">_________ Timeline</a></li>:<li className="pt-2"><a className="cursor-pointer hover:font-medium" onClick={()=> handleClick('Experience')}>_________ Timeline</a></li>}
                {activeSection=="Connect"?<li className="pt-2"><a  className="cursor-pointer font-medium">_________ Connect</a></li>:<li className="pt-2"><a  className="cursor-pointer hover:font-medium" onClick={()=>handleClick('Connect')}>_________ Connect</a></li>}
              </ul>

              <div className="flex mt-10 md:mt-16 mb-8">
              <ul className="flex w-1/2 text-sm space-x-3">
                <li>
                  <a target="_blank" href="https://github.com/karimjawhar5">
                    <FaGithub className="cursor-pointer w-6 h-6  md:w-5 md:h-5 inline-block" />
                    <span className="pl-2 hidden md:inline-block md:block">GitHub</span>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/karimjaouhar/">
                    <FaLinkedin className="cursor-pointer w-6 h-6  md:w-5 md:h-5 inline-block" />
                    <span className="pl-2 hidden md:inline-block md:block">LinkedIn</span>
                  </a>
                </li>
              </ul>
              <ul className="flex w-1/2 text-sm space-x-3 md:space-x-4 justify-end -mt-1 md:-mt-2">
                <li>
                  <button className="bg-gray-200 dark:bg-gray-800 font-normal py-2 px-4 rounded-full ml-5">
                  <a href="/resume.pdf" download> Resume</a>
                </button>
                </li>
                <li>
                  <button className="bg-gray-200 dark:bg-gray-800 font-normal py-2 px-4 rounded-full">
                  <a href="mailto:karimjawhar5@gmail.com"> Email</a>
                </button>
                </li>
              </ul>

              </div>

            </div>

            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
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
    },
    revalidate: 14400
  }
}