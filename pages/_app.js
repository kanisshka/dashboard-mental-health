import '../styles/globals.css'
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout.js';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Check if the current route is the login page
    const isLoginPage = router.pathname === '/login';

    // Check the value of isLoggedIn in localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // If isLoggedIn is false or null and the current route is not the login page, redirect the user to the login page
    if (isLoggedIn==="false" && !isLoginPage) {
      router.push('/login');
    }
  }, []);

  // Render the login page component directly without using the Layout component
  if (router.pathname === '/login') {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
