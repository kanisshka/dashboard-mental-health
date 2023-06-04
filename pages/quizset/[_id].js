import React,{useState,useEffect} from 'react'
import axios from 'axios'
const Quizsetdetails = ({quiz}) => {
  console.log(quiz)
  const [quizset, setQuizset] = useState([{ ques: '' }]);

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
  return (
  <>
    <div><h1>{quiz.title}</h1></div>
    <p>{quiz.desc}</p>
    <h3>Total Number of Questions : {quiz.quiz.length}</h3>
    <div>
    {quiz.quiz.map((item, index) => (
        <div key={index}>
          <input
            type="text"
            value={item.ques}
            onChange={(e) => handleChange(e, index)}
          />
          {index === quiz.length - 1 && (
            <button onClick={handleAddField}>Add Field</button>
          )}
          {index !== quiz.length - 1 && (
            <button onClick={() => handleRemoveField(item._id)}>Remove Field</button>
          )}
        </div>
      ))}

    </div>
    </>
  )
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://mental-health-backend.vercel.app/api/quizzies/${params._id}`
  );
  // console.log(params._id)
  return {
    props: {
      quiz: res.data,
    },
  };
}
export default Quizsetdetails