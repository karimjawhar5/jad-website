import React from 'react'
import { useState } from 'react'
import Image from 'next/image';

import Link from 'next/link'

import { FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';

const initValues = {"name":"","email":"","reason":"", "message":"", "honeyPot":""}


import { motion } from "framer-motion";

function Connect() {
  const [values, setValues] = useState(initValues)
  const [sending, setSending] = useState(false);
  
  const handleChange = ({target})=> setValues((prev) => ({
    ...prev,
    [target.name]: target.value
  }))

  const handleSubmit = async (event) => {
    event.preventDefault()
    const name = values.name
    const email = values.email
    const reason = values.reason
    const message = values.message
    setSending(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, reason, message }),
      })
      const data = await response.json()

      if (data.success) {
        console.log("Email sent")
        setValues(initValues);
        setSending(false)
      } else {
        console.log('Something went wrong. Please try again later.')
      }
    } catch (error) {
      console.log("somthing went wrong")
    }
  }

  return (
    <div>
      <motion.h2 
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
      className='mb-6 font-medium'>
        Contact Me
      </motion.h2>

      <motion.div 
      initial={{ y: 1, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      className='md:flex md:space-x-4 mb-6'>

        <Image src={"/PFP.jpg"} alt={"Profile Picture"} width={148} height={167} className='w-100 h-auto border dark:border-gray-700 border-gray-200'></Image>

        <div>
          <ul className='space-y-2 md:space-y-3 mb-6 md:mb-8 mt-6 md:mt-0'>
            <li><u><b>Full Name:</b></u> &nbsp; Jad Jaouhar</li>
            <li><Link href="tel:+96170742312"><u><b>Phone:</b></u> &nbsp; +961 (70) 742 312</Link></li>
            <li><Link href="mailto:jadjaouhar5@gmail.com"><u><b>Email:</b></u> &nbsp; jadjaouhar5@gmail.com</Link></li>
          </ul>
          <ul className='flex space-x-4 text-sm md:text-sm font-medium text-blue-500 dark:text-blue-200'>
            <li><a target="_blank" href="https://www.linkedin.com/in/jadjaouhar/"><FaLinkedin className='inline-block w-5 h-5'/><p className='inline-block pl-2'>LinkedIn</p></a></li>
          </ul>
        </div>
      </motion.div >

      <motion.form
      initial={{ y: 1, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
      className='mt-8 w-full md:w-3/4 text-sm' onSubmit={handleSubmit}>
        <div className='mb-3 space-y-1'>
        <label className=' font-medium' htmlFor="name">Name</label><br />
        <input className="block p-2 w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder:text-gray-600 dark:placeholder:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-md" required name='name' id="name" type="text" placeholder="Name" value={values.name} onChange={handleChange}/>
        </div>

        <div className='mb-3 space-y-1'>
        <label className=' font-medium' htmlFor="email">Email</label><br />
        <input required name='email' className="block p-2 w-full bg-gray-100 dark:bg-gray-800 text-gray-900  dark:text-gray-200 placeholder:text-gray-600 dark:placeholder:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-md" id="email" type="email" placeholder="Email" value={values.email} onChange={handleChange}/>
        </div>

        <div className='mb-3 space-y-1'>
        <label className='font-medium' htmlFor="reason">Reason For Contact</label><br />
        <select name='reason' required className="block p-2 w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder:text-gray-600 dark:placeholder:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-md" id="reason" value={values.reason} onChange={handleChange}>
            <option>General inquiry</option>
            <option>Feedback or suggestions</option>
            <option>Project Collaboration</option>
            <option>Job Opportunity</option>
            <option>Other</option>
          </select>
        </div>

        <div className='mb-3 space-y-1'>
        <label className=' font-medium' htmlFor="message">Message</label><br />
        <textarea name='message' required className="block p-2 w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder:text-gray-600 dark:placeholder:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-md" id="message" type="text-box" placeholder="Message" rows={6} value={values.message} onChange={handleChange}/>
        </div>

        <input type="text" name="honeypot" className='hidden' value={values.honeyPot} onChange={handleChange}/>

        <input className='p-2 font-medium rounded-md w-40 border border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-300 cursor-pointer mt-2' type="submit" value={sending?"Sending": "Send"} />
      </motion.form>
    </div>
  )
}

export default Connect
