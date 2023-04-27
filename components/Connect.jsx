import React from 'react'
import { useState } from 'react'

import Link from 'next/link'

import { FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';

const initValues = {"name":"","email":"","reason":"", "message":"", "honeyPot":""}

function Connect() {
  const [values, setValues] = useState(initValues)
  
  const handleChange = ({target})=> setValues((prev) => ({
    ...prev,
    [target.name]: target.value
  }))

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(values.honeyPot){
      return;
    }else{
      console.log(`Name: ${values.name} Email: ${values.email} Reason: ${values.reason} Message: ${values.message}`)
    }
  }

  return (
    <div>
      <h2 className='mb-6 font-medium'>Contact Me</h2>
      <div>
        <ul className='space-y-2 mb-6'>
          <li><Link href="tel:6475494696"><u><b>Phone:</b></u> &nbsp; (647)-549-4696</Link></li>
          <li><Link href="mailto:karimjawhar5@gmail.com"><u><b>Email:</b></u> &nbsp; karimjawhar5@gmail.com</Link></li>
        </ul>
        <ul className='flex space-x-4 text-sm md:text-sm font-medium text-blue-500 dark:text-blue-200'>
          <li><Link href="#"><FaLinkedin className='inline-block w-5 h-5'/><p className='inline-block pl-2'>LinkedIn</p></Link></li>
          <li><Link href="#"><FaTwitter className='inline-block w-5 h-5'/><p className='inline-block pl-2'>Twitter</p></Link></li>
          <li><Link href="#"><FaGithub className='inline-block w-5 h-5'/><p className='inline-block pl-2 '>Github</p></Link></li>
        </ul>
      </div>

      <form className='mt-8 w-3/4 text-sm' onSubmit={handleSubmit}>
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
        <textarea name='message' required className="block p-2 w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder:text-gray-600 dark:placeholder:text-gray-400 border border-gray-300 dark:border-gray-700 rounded-md" id="message" type="text-box" placeholder="Message" rows={8} value={values.message} onChange={handleChange}/>
        </div>

        <input type="text" name="honeypot" className='hidden' value={values.honeyPot} onChange={handleChange}/>

        <input className='p-2 font-medium rounded-md w-40 border border-gray-800 dark:border-gray-300 text-gray-800 dark:text-gray-300 cursor-pointer mt-2' type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Connect
