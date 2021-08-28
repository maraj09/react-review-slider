import React, { useState, useEffect } from 'react'

import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai";
import Review from "./Review";
import Person from "./data";


function App() {
  const [index, setIndex] = useState(0);
  const next = () => {
    if (index >= Person.length - 1 ) {
      return setIndex(0)
    }
    setIndex(index + 1)
  }
  const previous = () => {
    if (index < 1) {
      return setIndex(Person.length - 1)
    }
    setIndex(index - 1)
  }
  useEffect(() => {
    let interval = setInterval(()=>{
      if (index >= Person.length - 1 ) {
        return setIndex(0)
      }
      setIndex(index + 1)
    }, 4000)
    return () => {
      clearInterval(interval)
    }
  },[index])
  return (
    <>
      <div className="heading">
        <h1>My Reviews</h1>
        <div className="underline"></div>
      </div>
      <div className="content">
        <div className="nav">
          <AiFillLeftSquare onClick={()=> previous()} className="icon" />
        </div>
        <div className="container">
          {Person.map((data,dataIndex) => {
            let active = "nextSlide"
            if (dataIndex === index) {
              active = "activeSlide"
            }
            if (
              dataIndex === index - 1 ||
              (index === 0 && dataIndex === Person.length - 1)
            ) {
              active = 'lastSlide'
            }
            return(
              <Review data={data} active={active} key={data.id}/>
            )
          })}
        </div>
        <div className="nav">
          <AiFillRightSquare onClick={()=> next()} className="icon" />
        </div>
      </div>
    </>
  );
}

export default App;
