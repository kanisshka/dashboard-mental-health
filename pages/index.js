import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';

// import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import { useRouter } from 'next/router';

export default function Home() {
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
    <div className='welc'>
      <Head>
        <title>Admin | Mental Health</title>
      </Head>
      <h1>Welcome to<br/>Mental Health Dashboard</h1>
    </div>
  )
}
