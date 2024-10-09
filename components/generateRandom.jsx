// memo is a high order component that memoizes the rendering of a functional component
// It prevents a functional component from re rendering if its props havent changed


import React from 'react'

const GenerateRandomNumber = memo(({randomNumber, generateRandomNumber}) => {
    console.log("Generate Random Number when component re rendered");

  return (
    <>
    <h1>Random Number: {randomNumber}</h1>
    <button onClick={generateRandomNumber}>Random Number</button>
    </>
  )
})

export default GenerateRandomNumber