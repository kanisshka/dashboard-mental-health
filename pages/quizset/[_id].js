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
    updatedQuiz[index] = { ...updatedQuiz[index], ques: value }; // Update the specific object at the index
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

  const handleUpdateDetails = async (_id) => {
  console.log(_id);
  console.log('Updating details...', quizset);

  try {
    const updatedData = {
      quiz: quizset // Pass the updated quizset array
    };

    const result = await axios.put(
      `https://mental-health-backend.vercel.app/api/quizzies/${_id}`,
      updatedData
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
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
              <button style={{background:'#0066ff',color:'white'}} onClick={handleAddField}>Add Field</button>
            ) : (
              <button style={{background:'red',color:'white'}} onClick={() => handleRemoveField(index)}>Remove Field</button>
            )}
          </div>
        ))}
        {isEditMode ? (
          <button id="btn-sbt" onClick={()=>handleUpdateDetails(quiz._id)}>Update Details</button>
        ) : (
          <button id="btn-sbt" onClick={() => setIsEditMode(true)}>Edit</button>
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
