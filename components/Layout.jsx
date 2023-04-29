import Head from 'next/head'
import React from 'react'

function Layout({children}) {
  return (
    <div className='page-content-styler'>
      <Head>
        <link rel="icon" href="/fav.png" />
      </Head>
    
      <header className='h-3 md:h-8' style={{ flex: 1 }}></header>

      <main style={{ flex: 1 }}>{children}</main>

      <footer className='w-full text-center text-xs font-light py-2 dark:text-gray-300 text-gray-800'>© 2023 Karim Jaouhar - Portfolio Website</footer>

    </div>
  )
}

export default Layout