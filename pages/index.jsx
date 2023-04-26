import { Main } from "next/document"
import Head from "next/head"
import {useState, useEffect} from 'react'

export default function Home() {
    const [section, setSection] = useState("projects")

  return (
      <div>
        <Head>
          <title>Karim's Portfolio</title>
          <meta name="Description" content="Welcome to Karim Jaouhar's Portfolio"/>
          <link rel="icon" href="/fav.png" />
        </Head>

        <main>
          <div className="flex flex-wrap">
            <div className="w-full bg-blue-700 h-24 lg:w-1/2 h-auto px-4">
              <h1>Hello I'm Karim Jaouhar</h1>
              <p>As a 3rd-year computer science student at York University, I am passionate about exploring the vast field of computer science and continually expanding my knowledge and skill set. With a strong foundation in data structures and algorithm design, as well as some experience in software development, cybersecurity, and machine learning, I am constantly seeking opportunities to apply my skills and provide value to a team.</p>
              <ul>
                <li>Projects</li>
                <li>Experience</li>
                <li>Connect</li>
              </ul>
            </div>
            <div className="w-full bg-red-600 min-h-200 lg:w-1/2 h-auto px-4">
              <h1>component</h1>
            </div>
          </div>
        </main>
      </div>
  )
}
