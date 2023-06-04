import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete'
import Link from 'next/link';
const CardQuizset = ({quiz}) => {
  console.log(quiz)
  return (
    <>
    <div class="card">
    <div class="card-edit">
    <Link href={`/quizset/${quiz._id}`}><EditIcon/></Link>
    
    </div>
  {/* <img src="card-image.jpg" alt="Card Image" class="card-image"/> */}
  <div class="card-content">
    <h2 class="card-title">{quiz.title}</h2>
    <p class="card-text">{quiz.desc}</p>
    <p class="card-text">TotalQuestions : {quiz.quiz.length}</p>
    <p style={{background:'red'}} href="#" class="card-button">Delete</p>
  </div>
</div>
</>
  )
}

export default CardQuizset