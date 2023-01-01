import React, { useState } from 'react';
import { decode } from "html-entities";
import { Loading } from 'react-loading-dot';
import Confetti from 'react-confetti';


const QuestionsPage = (props) => {
  const { questions,firstQuestionOptions,secondQuestionOptions,thirdQuestionOptions,fourthQuestionOptions,fifthQuestionOptions } = props;
  const correctAnswers = [questions[0].correct_answer,questions[1].correct_answer,questions[2].correct_answer,questions[3].correct_answer,questions[4].correct_answer];
  const [answerCompleteSetting, setAnswerCompleteSetting] = useState(false);
  const [completeAnswering, setCompleteAnswering] = useState(false);
  const [score, setScore] = useState(0);
  const [formData, setFormData] = useState({
    firstQuestionOption:"",
    secondQuestionOption:"",
    thirdQuestionOption:"",
    fourthQuestionOption:"",
    fifthQuestionOption:"",
  });

  function handleChange(event) {
    const {name, value, classList} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name] : value
        }
    })
}

 const handleScoring = (event) => {
    event.preventDefault();
    setCompleteAnswering(true);
    if (event.target.innerHTML === `Check answers`) {
      let scoreOne,scoreTwo,scoreThree,scoreFour,scoreFive;
      formData.firstQuestionOption  === questions[0].correct_answer ? scoreOne = 1 : scoreOne = 0;
      formData.secondQuestionOption === questions[1].correct_answer ? scoreTwo = 1 : scoreTwo = 0;
      formData.thirdQuestionOption === questions[2].correct_answer ? scoreThree = 1 : scoreThree = 0;
      formData.fourthQuestionOption === questions[3].correct_answer ? scoreFour = 1 : scoreFour = 0;
      formData.fifthQuestionOption === questions[4].correct_answer ? scoreFive = 1 : scoreFive = 0;
      setScore(scoreOne+scoreTwo+scoreThree+scoreFour+scoreFive);
      Object.values(formData).every((answer) => {
          if(answer !== ""){
              setAnswerCompleteSetting(true);
          }else{
              answerCompleteSetting;
          }
      });
    } else {
      window.location.reload();
    }
  }
      
    const isQuizComplete = questions.length !== 5;
    const width = 650;
    const height =  window.innerHeight;
  
  return (
    <div className="QuestionsPage">
      {isQuizComplete ? (
        <Loading background="rgb(41,50,100)" />
      ) : (
        <form>
          {score < 5 ? <Confetti width={width} height={height} style={{zIndex: 10}}/> : <></>}
            {/* FIRST QUESTION */}
        <div className="question__page">
              <h4>{decode(questions[0].question)}</h4>
              <div className="options">
                <input 
                type="radio"
                name="firstQuestionOption"
                value={decode(firstQuestionOptions[0])}
                id={decode(firstQuestionOptions[0])}
                checked={formData.firstQuestionOption === decode(firstQuestionOptions[0])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(firstQuestionOptions[0])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[0] === firstQuestionOptions[0] ? '#94d7a2' : 
                  formData.firstQuestionOption === decode(firstQuestionOptions[0]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(firstQuestionOptions[0])}</label>

                <input 
                type="radio"
                name="firstQuestionOption"
                value={decode(firstQuestionOptions[1])}
                id={decode(firstQuestionOptions[1])}
                checked={formData.firstQuestionOption === decode(firstQuestionOptions[1])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(firstQuestionOptions[1])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[0] === firstQuestionOptions[1] ? '#94d7a2' : 
                  formData.firstQuestionOption === decode(firstQuestionOptions[1]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(firstQuestionOptions[1])}</label>

                <input 
                type="radio"
                name="firstQuestionOption"
                value={decode(firstQuestionOptions[2])}
                id={decode(firstQuestionOptions[2])}
                checked={formData.firstQuestionOption === decode(firstQuestionOptions[2])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(firstQuestionOptions[2])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[0] === firstQuestionOptions[2] ? '#94d7a2' : 
                  formData.firstQuestionOption === decode(firstQuestionOptions[2]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(firstQuestionOptions[2])}</label>

                <input 
                type="radio"
                name="firstQuestionOption"
                value={decode(firstQuestionOptions[3])}
                id={decode(firstQuestionOptions[3])}
                checked={formData.firstQuestionOption === decode(firstQuestionOptions[3])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(firstQuestionOptions[3])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[0] === firstQuestionOptions[3] ? '#94d7a2' : 
                  formData.firstQuestionOption === decode(firstQuestionOptions[3]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(firstQuestionOptions[3])}</label>
              </div>
        </div>
           {/* SECOND QUESTION */}
           <div className="question__page">
              <h4>{decode(questions[1].question)}</h4>
              <div className="options">
                <input 
                type="radio"
                name="secondQuestionOption"
                value={decode(secondQuestionOptions[0])}
                id={decode(secondQuestionOptions[0])}
                checked={formData.secondQuestionOption === decode(secondQuestionOptions[0])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(secondQuestionOptions[0])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[1] === secondQuestionOptions[0] ? '#94d7a2' : 
                  formData.secondQuestionOption === decode(secondQuestionOptions[0]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(secondQuestionOptions[0])}</label>

                <input 
                type="radio"
                name="secondQuestionOption"
                value={decode(secondQuestionOptions[1])}
                id={decode(secondQuestionOptions[1])}
                checked={formData.secondQuestionOption === decode(secondQuestionOptions[1])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(secondQuestionOptions[1])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[1] === secondQuestionOptions[1] ? '#94d7a2' : 
                  formData.secondQuestionOption === decode(secondQuestionOptions[1]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(secondQuestionOptions[1])}</label>

                <input 
                type="radio"
                name="secondQuestionOption"
                value={decode(secondQuestionOptions[2])}
                id={decode(secondQuestionOptions[2])}
                checked={formData.secondQuestionOption === decode(secondQuestionOptions[2])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(secondQuestionOptions[2])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[1] === secondQuestionOptions[2] ? '#94d7a2' : 
                  formData.secondQuestionOption === decode(secondQuestionOptions[2]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(secondQuestionOptions[2])}</label>

                <input 
                type="radio"
                name="secondQuestionOption"
                value={decode(secondQuestionOptions[3])}
                id={decode(secondQuestionOptions[3])}
                checked={formData.secondQuestionOption === decode(secondQuestionOptions[3])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(secondQuestionOptions[3])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[1] === secondQuestionOptions[3] ? '#94d7a2' : 
                  formData.secondQuestionOption === decode(secondQuestionOptions[3]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(secondQuestionOptions[3])}</label>
              </div>
           </div>
           {/* THIRD QUESTION */}
           <div className="question__page">
              <h4>{decode(questions[2].question)}</h4>
              <div className="options">
                <input 
                type="radio"
                name="thirdQuestionOption"
                value={decode(thirdQuestionOptions[0])}
                id={decode(thirdQuestionOptions[0])}
                checked={formData.thirdQuestionOption === decode(thirdQuestionOptions[0])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(thirdQuestionOptions[0])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[2] === thirdQuestionOptions[0] ? '#94d7a2' : 
                  formData.thirdQuestionOption === decode(thirdQuestionOptions[0]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(thirdQuestionOptions[0])}</label>

                <input 
                type="radio"
                name="thirdQuestionOption"
                value={decode(thirdQuestionOptions[1])}
                id={decode(thirdQuestionOptions[1])}
                checked={formData.thirdQuestionOption === decode(thirdQuestionOptions[1])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(thirdQuestionOptions[1])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[2] === thirdQuestionOptions[1] ? '#94d7a2' : 
                  formData.thirdQuestionOption === decode(thirdQuestionOptions[1]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(thirdQuestionOptions[1])}</label>

                <input 
                type="radio"
                name="thirdQuestionOption"
                value={decode(thirdQuestionOptions[2])}
                id={decode(thirdQuestionOptions[2])}
                checked={formData.thirdQuestionOption === decode(thirdQuestionOptions[2])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(thirdQuestionOptions[2])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[2] === thirdQuestionOptions[2] ? '#94d7a2' : 
                  formData.thirdQuestionOption === decode(thirdQuestionOptions[2]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(thirdQuestionOptions[2])}</label>

                <input 
                type="radio"
                name="thirdQuestionOption"
                value={decode(thirdQuestionOptions[3])}
                id={decode(thirdQuestionOptions[3])}
                checked={formData.thirdQuestionOption === decode(thirdQuestionOptions[3])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(thirdQuestionOptions[3])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[2] === thirdQuestionOptions[3] ? '#94d7a2' : 
                  formData.thirdQuestionOption === decode(thirdQuestionOptions[3]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(thirdQuestionOptions[3])}</label>
              </div>
           </div>
           {/* FOURTH QUESTION */}
           <div className="question__page">
              <h4>{decode(questions[3].question)}</h4>
              <div className="options">
                <input 
                type="radio"
                name="fourthQuestionOption"
                value={decode(fourthQuestionOptions[0])}
                id={decode(fourthQuestionOptions[0])}
                checked={formData.fourthQuestionOption === decode(fourthQuestionOptions[0])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(fourthQuestionOptions[0])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[3] === fourthQuestionOptions[0] ? '#94d7a2' : 
                  formData.fourthQuestionOption === decode(fourthQuestionOptions[0]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(fourthQuestionOptions[0])}</label>

                <input 
                type="radio"
                name="fourthQuestionOption"
                value={decode(fourthQuestionOptions[1])}
                id={decode(fourthQuestionOptions[1])}
                checked={formData.fourthQuestionOption === decode(fourthQuestionOptions[1])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(fourthQuestionOptions[1])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[3] === fourthQuestionOptions[1] ? '#94d7a2' : 
                  formData.fourthQuestionOption === decode(fourthQuestionOptions[1]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(fourthQuestionOptions[1])}</label>

                <input 
                type="radio"
                name="fourthQuestionOption"
                value={decode(fourthQuestionOptions[2])}
                id={decode(fourthQuestionOptions[2])}
                checked={formData.fourthQuestionOption === decode(fourthQuestionOptions[2])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(fourthQuestionOptions[2])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[3] === fourthQuestionOptions[2] ? '#94d7a2' : 
                  formData.fourthQuestionOption === decode(fourthQuestionOptions[2]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(fourthQuestionOptions[2])}</label>

                <input 
                type="radio"
                name="fourthQuestionOption"
                value={decode(fourthQuestionOptions[3])}
                id={decode(fourthQuestionOptions[3])}
                checked={formData.fourthQuestionOption === decode(fourthQuestionOptions[3])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(fourthQuestionOptions[3])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[3] === fourthQuestionOptions[3] ? '#94d7a2' : 
                  formData.fourthQuestionOption === decode(fourthQuestionOptions[3]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(fourthQuestionOptions[3])}</label>
              </div>
           </div>
           {/* FIFTH QUESTION */}
           <div className="question__page">
              <h4>{decode(questions[4].question)}</h4>
              <div className="options">
                <input 
                type="radio"
                name="fifthQuestionOption"
                value={decode(fifthQuestionOptions[0])}
                id={decode(fifthQuestionOptions[0])}
                checked={formData.fifthQuestionOption === decode(fifthQuestionOptions[0])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(fifthQuestionOptions[0])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[4] === fifthQuestionOptions[0] ? '#94d7a2' : 
                  formData.fifthQuestionOption === decode(fifthQuestionOptions[0]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(fifthQuestionOptions[0])}</label>

                <input 
                type="radio"
                name="fifthQuestionOption"
                value={decode(fifthQuestionOptions[1])}
                id={decode(fifthQuestionOptions[1])}
                checked={formData.fifthQuestionOption === decode(fifthQuestionOptions[1])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(fifthQuestionOptions[1])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[4] === fifthQuestionOptions[1] ? '#94d7a2' : 
                  formData.fifthQuestionOption === decode(fifthQuestionOptions[1]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(fifthQuestionOptions[1])}</label>

                <input 
                type="radio"
                name="fifthQuestionOption"
                value={decode(fifthQuestionOptions[2])}
                id={decode(fifthQuestionOptions[2])}
                checked={formData.fifthQuestionOption === decode(fifthQuestionOptions[2])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(fifthQuestionOptions[2])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[4] === fifthQuestionOptions[2] ? '#94d7a2' : 
                  formData.fifthQuestionOption === decode(fifthQuestionOptions[2]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(fifthQuestionOptions[2])}</label>

                <input 
                type="radio"
                name="fifthQuestionOption"
                value={decode(fifthQuestionOptions[3])}
                id={decode(fifthQuestionOptions[3])}
                checked={formData.fifthQuestionOption === decode(fifthQuestionOptions[3])}
                onChange={handleChange}
                disabled={completeAnswering}
                />
                <label htmlFor={decode(fifthQuestionOptions[3])} className="option"
                style={{
                  backgroundColor: answerCompleteSetting && correctAnswers[4] === fifthQuestionOptions[3] ? '#94d7a2' : 
                  formData.fifthQuestionOption === decode(fifthQuestionOptions[3]) && answerCompleteSetting ?
                  "#f8bcbc" : '',
                  }}
                >
                {decode(fifthQuestionOptions[3])}</label>
              </div>
           </div>

        <div className="score__review">
            {answerCompleteSetting && <p className="score__review-text">{answerCompleteSetting ? `You scored ${score}/5 correct answers` : `Please provide an answer to all quiz questions`}</p>}
            <button className="check__answers__button" onClick={handleScoring} id="check__answers">{answerCompleteSetting ? `Play again` : `Check answers`}</button>
        </div>
        </form>
      )}
    </div>
  );
}

export default QuestionsPage