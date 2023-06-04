import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Head from 'next/head';

const Users = () => {
  const [userData, setUserData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://mental-health-backend.vercel.app/api/auth/');
        setUserData(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Head>
        <title>Users | Mental Health</title>
      </Head>
      <h1>User Details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link href="/">
        <p className="add-button">Back</p>
      </Link>

      <style jsx>{`
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        th,
        td {
          border: 1px solid #ddd;
          padding: 8px;
        }

        th {
          background-color: #f2f2f2;
        }
      `}</style>
    </>
  );
};

export default Users;
