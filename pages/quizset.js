import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CardQuizset from '../components/CardQuizset';
import axios from 'axios';

const Quizset = () => {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://mental-health-backend.vercel.app/api/quizzies/');
        console.log(result.data);
        setQuizData(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly',gap:'30px' }}>
        {quizData.map((quiz, index) => (
          <CardQuizset key={index} quiz={quiz} />
        ))}
      </div>

      <Link href="/addquiz">
        <p className="add-button">Add Quiz</p>
      </Link>
    </>
  );
};

export default Quizset;
