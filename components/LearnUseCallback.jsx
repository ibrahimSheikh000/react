import React, { useCallback } from 'react'
import GenerateRandomNumber from './generateRAndom'

const LearnUseCallback = () => {
  const [count, setCount] = useState(0)
  const handleIncreaseCount = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const [randomNumber, setRandomNumber] = useState(0);
  const generateRandomNumber = useCallback(() => {
    const newRandomNumber =  Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber); 
  }, [randomNumber]);
  
  

  return (
    <>
    <GenerateRandomNumber randomNumber = {randomNumber} generateRandomNumber = {generateRandomNumber}/>
    <h1>Count: {count}</h1>
    <button onClick={handleIncreaseCount}>Increase Count</button>
    </>
  )

}
export default LearnUseCallback