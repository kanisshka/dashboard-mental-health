import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Nav from './Nav';

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check the value of isLoggedIn in localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // If isLoggedIn is false or null, redirect the user to the login page
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <header>
        <Nav />
      </header>
      <main style={{ margin: 'auto', width: '70%' }}>
        {children}
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}

export default Layout;
