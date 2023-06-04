import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link';
import axios from 'axios';

const CardQuizset = ({ quiz }) => {
  const handleDelete = async () => {
    const shouldDelete = window.confirm('Are you sure you want to delete this quiz?');
    if (shouldDelete) {
      try {
        await axios.delete(`https://mental-health-backend.vercel.app/api/quizzies/${quiz._id}`);
        console.log('Quiz deleted successfully');
        window.location.reload(); 
        // Perform any additional actions after successful deletion
      } catch (error) {
        console.log('Error:', error);
      }
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-edit">
          <Link href={`/quizset/${quiz._id}`}>
            <EditIcon />
          </Link>
        </div>
        {/* <img src="card-image.jpg" alt="Card Image" className="card-image"/> */}
        <div className="card-content">
          <h2 className="card-title">{quiz.title}</h2>
          <p className="card-text">{quiz.desc}</p>
          <p className="card-text">Total Questions: {quiz.quiz.length}</p>
          <p style={{ background: 'red',cursor:'pointer' }} onClick={handleDelete} className="card-button">
            Delete
          </p>
        </div>
      </div>
    </>
  );
};

export default CardQuizset;
