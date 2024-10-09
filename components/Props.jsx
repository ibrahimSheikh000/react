import React from 'react'
// props are values that we send from parent class to child class
// it is read only and is uni directional
const Props = (props) => {
return (
  <>
  <h1>Hello I am a prop</h1>
  <h1>Hello my name is {props.name}</h1>
  <h1>Hello my roll is {props.roll}</h1>
  </>
  )
  }


//this is how we destructure
// const Props = ({name, roll}) => {
//     return (
//       <>
//       <h1>Hello I am a prop</h1>
//       <h1>Hello my name is {name}</h1>
//       <h1>Hello my roll is {roll}</h1>
//       </>
//       )
//       }

export default Props