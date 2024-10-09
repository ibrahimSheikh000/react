import React, { useEffect, useState } from 'react'

const LearnUseEffect = () => {
    const [count, setCount] = useState(0)
    const updateCount = ()=>{
        setCount((prevCount)=> prevCount + 1)
    }
    const [random, setRandom] = useState(null);
    const generateRandomNumber = () => {
      const newRandomNumber = Math.floor(Math.random * 100) + 1;
      setRandom(newRandomNumber)
    };
    // example 1: It runs each time when the component is mounted and re rendered
    useEffect(()=>{
      console.log('useEffect Called')
    })

    //example2: It runs once when the comoponent is mounted
    useEffect(()=>{
      console.log('useEffect Called')
    }, [])

    //example3: It runs whenever the component is mounted and dependancy changes
    useEffect(()=>{
      console.log('useEffect Called')
    }, [count])

    //example4: The cleanup function runs when the component unmounts or when the dependencies in the
    //dependancy array change
    //since count is in the array, whenever count changes, the cleanup function is called
    //before the new effect runs
    useEffect(()=>{
      console.log('useEffect Called')
      return() => {
        console.log('Component will unmount')
      }
    }, [count])
         return (
    <>
        <h1>Count: {count}</h1>
        <button onClick={updateCount}>Change Count</button>
        <h1>Random: {random}</h1>
        <button onClick={generateRandomNumber}>Random Nummber</button>
    </>
  )
}

export default LearnUseEffect