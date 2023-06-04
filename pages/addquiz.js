import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

const addQuiz = () => {
  const [quizData, setQuizData] = useState({
    title: '',
    desc: '',
    quiz: [{ ques: '' }],
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'title' || name === 'desc') {
      setQuizData({ ...quizData, [name]: value });
    } else {
      const updatedQuiz = [...quizData.quiz];
      updatedQuiz[index] = { ...updatedQuiz[index], [name]: value };
      setQuizData({ ...quizData, quiz: updatedQuiz });
    }
  };

  const handleAddField = () => {
    setQuizData({ ...quizData, quiz: [...quizData.quiz, { ques: '' }] });
  };

  const handleRemoveField = (index) => {
    const updatedQuiz = [...quizData.quiz];
    updatedQuiz.splice(index, 1);
    setQuizData({ ...quizData, quiz: updatedQuiz });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an API call to save the quiz data
      await axios.post('https://mental-health-backend.vercel.app/api/quizzies', quizData);
      console.log('Quiz data saved successfully');
      // Reset the form after successful submission
      setQuizData({ title: '', desc: '', quiz: [{ ques: '' }] });
      // Show success alert
      alert('Quiz data saved successfully!');
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="add-quiz-form">
        <Head>
        <title>Add Quiz | Mental Health</title>
      </Head>
      <h1>Add Quiz</h1>
      <Link href="/quizset">
        <p className="add-button">Back</p>
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" value={quizData.title} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" name="desc" value={quizData.desc} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Quiz Questions</label>
          {quizData.quiz.map((item, index) => (
            <div key={index} className="quiz-question">
              <input
                type="text"
                name="ques"
                value={item.ques}
                onChange={(e) => handleChange(e, index)}
              />
              {index === quizData.quiz.length - 1 ? (
                <button type="button" onClick={handleAddField}>
                  Add Field
                </button>
              ) : (
                <button type="button" onClick={() => handleRemoveField(index)}>
                  Remove Field
                </button>
              )}
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>

      <style jsx>{`
        .add-quiz-form {
          margin: 0 auto;
          padding: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .form-group input[type='text'] {
          width: 100%;
          padding: 10px;
          font-size: 16px;
        }

        .quiz-question {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .quiz-question input[type='text'] {
          flex: 1;
          margin-right: 10px;
        }

        .quiz-question button {
          background-color: #f0f0f0;
          border: none;
          border-radius: 4px;
          padding: 5px 10px;
          cursor: pointer;
          font-size: 14px;
        }

        button[type='submit'] {
          background-color: #333;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
          cursor: pointer;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default addQuiz;
