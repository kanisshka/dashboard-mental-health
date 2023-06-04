import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <div className='navbar'>
    <nav style={{display:'flex', flexDirection:'column'}}>
        <Link href={'/'} className='lis'>Dashboard</Link>
        <Link href={'/quizset'} className='lis'>QuizSet</Link>
        <Link href={'/users'} className='lis'>Users</Link>
        <Link href={'/'} className='lis'>Logout</Link>
    </nav>
    </div>
  )
}

export default Nav