import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className='welc'>
      <Head>
        <title>Admin | Mental Health</title>
      </Head>
      <h1>Welcome to<br/>Mental Health Dashboard</h1>
    </div>
  )
}
