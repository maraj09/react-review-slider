import React, { useState } from 'react'

import { AiFillLeftSquare, AiFillRightSquare } from "react-icons/ai";
import Review from "./Review";
import Person from "./data";


function App() {
  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex(index + 1)
  }
  const previous = () => {
    setIndex(index - 1)
  }
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
            let active = ""
            if (dataIndex === index) {
              active = "activeSlide"
            }
            return(
              <Review data={data} active={active}/>
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
