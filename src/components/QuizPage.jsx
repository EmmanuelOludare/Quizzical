import { useState,useEffect } from 'react'
import {nanoid} from "nanoid"
import StartPage from './StartPage'
import QuestionsPage from './QuestionsPage'

const QuizPage = () => {
      const [questions, setQuestions] = useState([
        {
          category: "History",
          correct_answer: "Apollo 17",
          difficulty:"medium",
          incorrect_answers: ['Apollo 13', 'Apollo 11', 'Apollo 15'],
          question: "Which Apollo mission was the last one in NASA&#039;s Apollo program?",
          type:"multiple"
        },
        {
          category: "Science & Nature",
          correct_answer: "TAA",
          difficulty:"hard",
          incorrect_answers: ['ACT', 'ACA', 'GTA'],
          question: "Which of these is a stop codon in DNA?",
          type:"multiple"
        },
        {
          category: "Geography",
          correct_answer: "Switzerland",
          difficulty:"medium",
          incorrect_answers: ['China', 'Canada', 'No Country'],
          question: "Which country has the abbreviation &quot;CH&quot;?",
          type:"multiple"
        },
        {
          category: "Vehicles",
          correct_answer: "Pirelli",
          difficulty:"easy",
          incorrect_answers: ['Goodyear', 'Bridgestone', 'Michelin'],
          question: "Which car tire manufacturer is famous for its &quot;P Zero&quot; line?",
          type:"multiple"
        },
        {
          category: "Entertainment: Video Games",
          correct_answer: "Pandora",
          difficulty:"medium",
          incorrect_answers: ['Helios', 'Icarus', 'Orion'],
          question: "In the 2000 video game &quot;Crimson Skies,&quot; what was the name of the protagonists&#039; zeppelin?",
          type:"multiple"
        }
      ]);
      
      useEffect(() => {
        console.log("Effect ran")
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(res => res.json())
        .then(data => setQuestions(data.results))
          }, [])

   const questionComponent = questions.map(item => {
        return (
            <QuestionsPage 
                key={nanoid()}
                category={item.category}
                question={item.question}
                correctAnswer={item.correct_answer}
                inCorrectAnswers={item.incorrect_answers}
                formData={formData}
                handleChange={handleChange}
            />
        )
    })    

  return (
    <div className="QuizPage">
        <StartPage />
        {questionComponent}
    </div>
  )
  }

export default QuizPage