import { useState,useEffect } from 'react'
import {nanoid} from "nanoid"

const QuestionsPage = (props) => {
 
 
  return (
    <div className="QuestionsPage">
        <form>
        <h4>{props.question}</h4>
        </form>
    </div>
  )
}

export default QuestionsPage