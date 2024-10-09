import React from 'react'

const LearnMemo = () => {

  const [count, setCount] = useState(0);
  const HandleIncresaseCount = () => {
    console.log("Increase Count Function");
    setCount((prevCount) => prevCount + 1)
  }
  const [random, setRandom] = useState(null);
  const generateRandomNumber = () => {
    console.log("Generate Random Nummber");
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandom(newRandomNumber)
  }

//   const isCountTen = () => {
// console.log("isCountTen called")
// if(count === 10) {
// return "Yes"
// }
// return "No"
//  }

const isCountTen = useMemo(() => {
  console.log("isCount Called");
if(count === 10){
  return "yes"
}
return "No"
}, [count])
  return (
    <>
    <h1>Is {count} 10 ---- {isCountTen}</h1>
    <button onClick={HandleIncresaseCount}>Increase Count</button>
    <h1>Random: {random}</h1>
    <button onClick = {generateRandomNumber}>Change Random Number</button>
    </>
  )
}

export default LearnMemo