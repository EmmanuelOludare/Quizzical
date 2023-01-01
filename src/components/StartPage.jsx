const StartPage = (props) => {
  return (
    <div className="start__page">
          <div className="intro__page">
            <h1 className="intro__page__title">Quizzical</h1>
            <a href="#" className="intro__page__paragraph">Some description if needed</a>
            <button className="intro__page__button" onClick={props.startQuiz} disabled={props.isLoading}>Start quiz</button>
          </div>
        </div>
  )
}

export default StartPage