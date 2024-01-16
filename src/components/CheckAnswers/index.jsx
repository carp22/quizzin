import React, { useState } from 'react'
import Link from 'next/link'
import styles from "./index.module.css"

const CheckAnswers = ({ quizQuestions, isCompleted, setIsCompleted }) => {
  const [score, setScore] = useState(0)
  
  const validateQuizz = function () {

    for (let index = 0; index < quizQuestions.length; index++) {

      const correctAnswer = quizQuestions[index].correctAnswer;
      const option = quizQuestions[index].options;

      for (let index = 0; index < option.length; index++) {
        const element = option[index];

        if (element.isClicked && element.optionName === correctAnswer) {
          setScore(oldScore => oldScore + 1)
        } 
      }
      setIsCompleted(true)
    }
  }


  return (
    <div>
      {isCompleted ?
        <section className={styles.playAgain}>
          <Link href="/"><h2 className={styles.btn}> Play again</h2></Link>
          <h2 >You scored {score}/5 correct answers</h2>
        </section> :
        <h2 className={styles.btn} onClick={validateQuizz}>Check Answers!</h2>
      }
    </div>
  )
}

export default CheckAnswers