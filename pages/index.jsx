import Head from "next/head"
import { useState } from 'react'

import { getDatabasePages } from "./api/connectNotion.jsx";
import {getTechs, getSummaries, getGithubURL} from './api/business.jsx'

import { FaGithub, FaLinkedin} from 'react-icons/fa';

import Projects from "@/components/Projects.jsx"
import Experience from "@/components/Experience.jsx"
import Connect from "@/components/Connect.jsx"

import { motion } from "framer-motion";


export default function Home({ projects, summaries, techs, githubs}) {
    const [activeSection, setActiveSection] = useState("Projects")
    function handleClick(section){
        setActiveSection(section)
    }

  return (
      <div>
        <Head>
          <title>Jad Jaouhar's Portfolio</title>
          <meta name="description" content="Check out my portfolio, learn about my exprience, discover my journey, and get in touch." />

          <meta property="og:title" content="Jad Jaouhar's Portfolio" />
          <meta property="og:description" content="Check out my portfolio, learn about my exprience, discover my journey, and get in touch." />
          <meta property="og:type" content="website" />
        </Head>

        <main className="text-gray-950 dark:text-gray-200 font-light">
          <div className="flex flex-wrap lg:max-w-screen-xl 2xl:max-w-screen-2xl md:max-w-screen-md  mx-auto px-4 lg:px-8 py-10">

            <div className="w-full lg:pr-8 lg:w-1/2 border-b lg:border-r lg:border-b-0 dark:border-gray-700 border-gray-200">

              <motion.h3 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }} 
              className="lg:leading-snug text-4xl md:text-5xl text-gray-950 dark:text-gray-100 ">Hello, I'm
              </motion.h3>

              <motion.h1 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }} 
              className="lg:leading-snug text-4xl md:text-5xl text-gray-950 dark:text-gray-100 "><span className="font-medium">Jad Jaouhar</span>
              </motion.h1>

              <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }} 
               className="mt-8 md:mt-10">
                Hi, my name is Jad Jaouhar. I am a Canadian-educated undergraduate currently pursuing a degree in <b className="font-medium">Banking and Finance at the Lebanese American University (LAU)</b>. My professional experience spans customer service, financial transaction oversight, and business growth strategies in the retail industry. At Freshway Retail Establishment, I played a pivotal role in enhancing customer satisfaction and implementing strategies that drove financial growth and business expansion.
               </motion.p>
               <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }} 
              className="mt-4 md:mt-6">
               Beyond my professional endeavors, I am deeply committed to giving back to my community. I have volunteered with Operation Big Blue, contributing to the preservation and cleanup of Lebanon’s coastline, and provided care and companionship to residents at Trafalgar Lodge Retirement Housing. These experiences have enriched my perspective and strengthened my passion for fostering positive change both professionally and personally.
               </motion.p>
              <motion.ul
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }} 
              className="mt-10 md:mt-12 text-blue-500 dark:text-blue-300">
                {activeSection=="Projects"?<li><a className="cursor-pointer font-medium">__ Experience</a></li>:<li><a className="cursor-pointer hover:font-medium" onClick={()=> handleClick('Projects')}>_ Experience</a></li>}
                {activeSection=="Experience"?<li className="pt-2"><a className="cursor-pointer font-medium">__ Timeline</a></li>:<li className="pt-2"><a className="cursor-pointer hover:font-medium" onClick={()=> handleClick('Experience')}>_ Timeline</a></li>}
                {activeSection=="Connect"?<li className="pt-2"><a  className="cursor-pointer font-medium">__ Connect</a></li>:<li className="pt-2"><a  className="cursor-pointer hover:font-medium" onClick={()=>handleClick('Connect')}>_ Connect</a></li>}
              </motion.ul>

              <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }} 
               className="flex mt-10 md:mt-16 mb-8">
              <ul className="flex w-1/2 text-sm space-x-3">
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/jadjaouhar/">
                    <FaLinkedin className="cursor-pointer w-6 h-6  md:w-5 md:h-5 inline-block" />
                    <span className="pl-2 hidden md:inline-block">LinkedIn</span>
                  </a>
                </li>
              </ul>
              <ul className="flex w-1/2 text-sm space-x-3 md:space-x-4 justify-end -mt-1 md:-mt-2">
                <li>
                  <button className="bg-gray-200 dark:bg-gray-800 font-normal py-2 px-4 rounded-full ml-5">
                  <a href="/Jad_Jaouhar.pdf" download> Resume</a>
                </button>
                </li>
                <li>
                  <button className="bg-gray-200 dark:bg-gray-800 font-normal py-2 px-4 rounded-full">
                  <a href="mailto:jadjaouhar5@gmail.com"> Email</a>
                </button>
                </li>
              </ul>

              </motion.div>

            </div>

            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
              {activeSection === 'Projects' && <Projects projects = {projects} summaries={summaries} techs={techs} githubs={githubs} />}
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
  const githubs = await getGithubURL(response)
  return {
    props:{
      projects: response.results,
      summaries: summaries,
      techs: techs,
      githubs: githubs
    },
    revalidate: 14400
  }
}