import React, { useState, } from 'react';
import { FaTimes } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";


const StartPage = (props) => {
  const [showDescription,setShowDescription] = useState(false);
  const toggleDescription = () => {
    setShowDescription(prevState => !prevState)
  }
  return (
    <div className="start__page">
          <div className="intro__page">
            <h1 className="intro__page__title">Quizzical</h1>
            <a href="#" className="intro__page__paragraph" onClick={toggleDescription}>Some description if needed</a>
            <button className="intro__page__button" onClick={props.startQuiz} disabled={props.isLoading}>Start quiz</button>
          </div>
          {<div className="description__container" style={{transform:showDescription ? "translateY(0%)" : "translateY(400%)"}}>
            <FaTimes className="description__closeBtn" onClick={toggleDescription}/>
            <p className="description__text">created by The Hybrid</p>
            <div className="description__icons">
              <a href="https://twitter.com/michael_olu99" className="description__icon"><FaTwitter /></a>
              <a href="https://github.com/Michaelhybrid" className="description__icon"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/oludare-emmanuel/" className="description__icon"><FaLinkedin /></a>
            </div>
            <p className="description__copyright">The Hybrid <FaCopyright />2023</p>
            </div>}
        </div>
  )
}

export default StartPage