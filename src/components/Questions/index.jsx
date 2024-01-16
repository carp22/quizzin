"use client"

import React from 'react'
import styles from "./index.module.css"


const Questions = ({ quizQuestions, setQuizQuestions, isCompleted, }) => {

    const handleClick = function (event, id) {
        const { innerText } = event.target

        setQuizQuestions(oldQuizz => oldQuizz.map(question => {
            return id === question.id ?
                {
                    ...question,
                    options: question.options.map(option => (
                        innerText === option.optionName ?
                            { ...option, isClicked: true }
                            : { ...option, isClicked: false }
                    ))
                }
                : question
        }))
    }

    const validatedAnswers = function (option, correctAnswer, isClicked) {
        let optionStyle = {};

        if (isCompleted) {
            if (option === correctAnswer) {
                return optionStyle = {
                    backgroundColor: "#94D7A2",
                    border: "none",
                }
            } else {
                if (isClicked) {
                    return optionStyle = {
                        backgroundColor: "#F8BCBC",
                        opacity: "0.5",
                        border: "none",
                    };
                } else {
                    return optionStyle = {
                        opacity: "0.5"
                    }
                }
            }
        }
    };



    return (
        <div className={styles.quizz}>
            {quizQuestions.map((element, index) => (
                <div className={styles.container} key={index}>

                    <h2 className={styles.question}>{element.question}</h2>

                    <div className={styles.options}>

                        {element.options.map((option, index) => (
                            <h2 className={option.isClicked ? styles.optionHold : styles.option}
                                key={index}
                                style={validatedAnswers(option.optionName, element.correctAnswer, option.isClicked)}
                                onClick={() => handleClick(event, element.id)}>
                                {option.optionName}
                            </h2>
                        ))}

                    </div>

                </div>
            ))}

        </div>
    )
}
export default Questions