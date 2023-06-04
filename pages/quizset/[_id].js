import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
// import './Quizsetdetails.css'; // Import the CSS file

const Quizsetdetails = ({ quiz }) => {
  console.log(quiz);
  const [quizset, setQuizset] = useState([...quiz.quiz]);
  const [isEditMode, setIsEditMode] = useState(false); // Track whether it's in edit mode or not

  const handleChange = (e, index) => {
    const { value } = e.target;
    const updatedQuiz = [...quizset];
    updatedQuiz[index] = { ques: value };
    setQuizset(updatedQuiz);
  };

  const handleAddField = () => {
    setQuizset([...quizset, { ques: '' }]);
  };

  const handleRemoveField = (index) => {
    const updatedQuiz = [...quizset];
    updatedQuiz.splice(index, 1);
    setQuizset(updatedQuiz);
  };

  const handleUpdateDetails = () => {
    // Implement your logic to update the details using an API call
    console.log('Updating details...');
  };

  return (
    <>
    <Link href="/quizset">
        <p className="add-button">Back</p>
      </Link>
      <div>
        <h1>{quiz.title}</h1>
      </div>
      <p>{quiz.desc}</p>
      <h3>Total Number of Questions: {quizset.length}</h3>
      <div className="quizset-form">
        {quizset.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              value={item.ques}
              onChange={(e) => handleChange(e, index)}
              disabled={!isEditMode} // Disable input fields if not in edit mode
            />
            {index === quizset.length - 1 ? (
              <button onClick={handleAddField}>Add Field</button>
            ) : (
              <button onClick={() => handleRemoveField(index)}>Remove Field</button>
            )}
          </div>
        ))}
        {isEditMode ? (
          <button onClick={handleUpdateDetails}>Update Details</button>
        ) : (
          <button onClick={() => setIsEditMode(true)}>Edit</button>
        )}
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://mental-health-backend.vercel.app/api/quizzies/${params._id}`
  );
  return {
    props: {
      quiz: res.data,
    },
  };
};

export default Quizsetdetails;
