import React from 'react'

function Layout({child}) {
  return (
    <div>
      <header></header>
      <main>{child}</main>
      <footer>@2023 KARIM JAOUHAR</footer>
    </div>
  )
}

export default Layout
