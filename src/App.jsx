import './App.css';
import React, { useState,useEffect } from 'react';
import StartPage from './components/StartPage';
import QuestionsPage from './components/QuestionsPage';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([
    {"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"What do the video games No Man&rsquo;s Sky and Mighty No. 9 have in common?","correct_answer":"Both were announced in 2013.","incorrect_answers":["Both were crowdfunded.","Both were developed by indie studios.","Both were released for the PlayStation 3."]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"When was the video game publisher &quot;Ubisoft&quot; founded ?","correct_answer":"March 1986","incorrect_answers":["April 1990","June 2001","August 1956"]},{"category":"Sports","type":"multiple","difficulty":"easy","question":"In bowling, what is the term used for getting three consecutive strikes?","correct_answer":"Turkey","incorrect_answers":["Flamingo","Birdie","Eagle"]},{"category":"Science & Nature","type":"multiple","difficulty":"easy","question":"What lies at the center of our galaxy?","correct_answer":"A black hole","incorrect_answers":["A wormhole","A supernova","A quasar"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In the video game &quot;Postal 2&quot;, what is the name of Postal Dude&#039;s dog?","correct_answer":"Champ","incorrect_answers":["Snoopy","Krotchy","Duke"]}
  ]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    .then(res => res.json())
    .then(data => setQuestions(data.results))
      }, [])

  const firstQuestionOptions = [...questions[0].incorrect_answers,questions[0].correct_answer].sort(() => {return 0.5 - Math.random()});
  const secondQuestionOptions = [...questions[1].incorrect_answers,questions[1].correct_answer].sort(() => {return 0.5 - Math.random()});
  const thirdQuestionOptions = [...questions[2].incorrect_answers,questions[2].correct_answer].sort(() => {return 0.5 - Math.random()});
  const fourthQuestionOptions = [...questions[3].incorrect_answers,questions[3].correct_answer].sort(() => {return 0.5 - Math.random()});
  const fifthQuestionOptions = [...questions[4].incorrect_answers,questions[4].correct_answer].sort(() => {return 0.5 - Math.random()});

  const startQuiz = () => {setIsLoading(true)}

  return (
    <main>
      <div className="App">
      {
        isLoading
        ?
        <QuestionsPage 
        questions={questions}
        firstQuestionOptions={firstQuestionOptions}
        secondQuestionOptions={secondQuestionOptions}
        thirdQuestionOptions={thirdQuestionOptions}
        fourthQuestionOptions={fourthQuestionOptions}
        fifthQuestionOptions={fifthQuestionOptions}
        />
        : 
        <StartPage 
        startQuiz={startQuiz}
        isLoading={isLoading}/>
      }
     </div>
    </main>
  )
}

export default App