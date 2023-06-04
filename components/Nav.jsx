import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Update the value of isLoggedIn in localStorage to false
    localStorage.setItem('isLoggedIn', 'false');

    // Redirect the user to the login page
    router.push('/login');
  };

  return (
    <div className='navbar'>
      <nav style={{ display: 'flex', flexDirection: 'column' }}>
        <Link href={'/'} className='lis'>
          Dashboard
        </Link>
        <Link href={'/quizset'} className='lis'>
          QuizSet
        </Link>
        <Link href={'/users'} className='lis'>
          Users
        </Link>
        <button className='lis' onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Nav;
