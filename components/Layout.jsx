import Head from 'next/head'
import React from 'react'

function Layout({children}) {
  return (
    <div>
      <Head>
      <link rel="icon" href="/fav.png" />
    </Head>
    
      <header>
      </header>

      <main>{children}</main>

      <footer className='w-full text-center text-sm font-light py-2 dark:text-gray-200 text-gray-800'>@2023 Karim Jaouhar - Protfolio Website</footer>

    </div>
  )
}

export default Layout