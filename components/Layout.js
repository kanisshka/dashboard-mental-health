import React from 'react';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div style={{display:"flex"}}>
      <header>
        <Nav />
      </header>
      <main style={{margin: "auto", width: "70%"}}>
        {children}
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  )
}

export default Layout