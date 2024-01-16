"use client"

import React from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import blueBlob from "/public/blueBlob.png"
import yellowBlob from "/public/yellowBlob.png"

import Questions from "@/components/Questions";
import CheckAnswers from "@/components/CheckAnswers";

import styles from "./page.module.css"

const Quizz = () => {

  useEffect(() => {
    fetchQuizz()
  }, [])

  const [quizQuestions, setQuizQuestions] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [answerStyle, setAnswerStyle] = useState("option")

  const disorderOptions = function (options) {
    options = options.sort(() => {
      return Math.random() - 0.5
    })
    const objOptions = options.map((element) => ({
      optionName: element,
      isClicked: false
    }))

    return objOptions
  }

  const fetchQuizz = async function () {
    const response = await fetch("https://the-trivia-api.com/v2/questions?limit=5")
    const data = await response.json()
    const questions = data.map((element) => ({
      question: element.question.text,
      options: disorderOptions(element.incorrectAnswers.concat(element.correctAnswer)),
      correctAnswer: element.correctAnswer,
      incorrectAnswer: element.incorrectAnswers,
      id: element.id,
    }))
    setQuizQuestions(questions)
  }

  return (
    <div className={styles.container}>
      <Image src={yellowBlob} className={styles.yellowBlob} alt="blob-image" />

      <Questions
        quizQuestions={quizQuestions}
        setQuizQuestions={setQuizQuestions}
        isCompleted={isCompleted}
        answerStyle={answerStyle}
        setAnswerStyle={setAnswerStyle} />

      <CheckAnswers
        quizQuestions={quizQuestions}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted} />

      <Image src={blueBlob} className={styles.blueBlob} alt="blob-image" />
    </div>
  )
}

export default Quizz