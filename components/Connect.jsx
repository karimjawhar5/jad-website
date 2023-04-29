import React from 'react'
import { useState } from 'react'

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
      className='mb-6 font-medium'>Contact Me</motion.h2>
      <div>
        <motion.ul 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className='space-y-2 mb-6'>
          <li><Link href="tel:6475494696"><u><b>Phone:</b></u> &nbsp; (647) 549 4696</Link></li>
          <li><Link href="mailto:karimjawhar5@gmail.com"><u><b>Email:</b></u> &nbsp; karimjawhar5@gmail.com</Link></li>
        </motion.ul >
        <motion.ul 
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        className='flex space-x-4 text-sm md:text-sm font-medium text-blue-500 dark:text-blue-200'>
          <li><a target="_blank" href="https://www.linkedin.com/in/karimjaouhar/"><FaLinkedin className='inline-block w-5 h-5'/><p className='inline-block pl-2'>LinkedIn</p></a></li>
          <li><a target="_blank" href="https://twitter.com/KarimJawhar02"><FaTwitter className='inline-block w-5 h-5'/><p className='inline-block pl-2'>Twitter</p></a></li>
          <li><a target="_blank" href="https://github.com/karimjawhar5"><FaGithub className='inline-block w-5 h-5'/><p className='inline-block pl-2 '>Github</p></a></li>
        </motion.ul>
      </div>

      <motion.form
      initial={{ y: 10, opacity: 0 }}
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

        <input className='p-2 font-medium rounded-md w-40 border border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-300 cursor-pointer mt-2' type="submit" value={sending?"Sendig": "Send"} />
      </motion.form>
    </div>
  )
}

export default Connect
