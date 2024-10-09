import React from 'react'
import { useState } from 'react'

const LearnUseState = () => {
const [num, setNum] = useState(0)
const HandleNumber = () =>{
    setNum((prevCount) => prevCount + 1)
}

const [position, setPosition] = useState({x: 0, y: 4})
const HandlePosition = () => {
  setPosition({x: position.x + 1, y: position.y + 1})
}

  return (
   <>
   <h1>Number: {num}</h1>
   <button onClick={HandleNumber}>Change Number</button>
   <h1>Position: {position.x} {position.y}</h1>
   <button onClick = {HandlePosition}>Change Position</button>
   </>
  )
}

export default LearnUseState