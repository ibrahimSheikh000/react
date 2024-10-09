import React from 'react'

const LiftingStateUp = (props) => {
    const HandleClick = (e) => {
        e.preventDefault()
        let x = "I am child data"
        props.anyname(x);
    }
  return (
    <>
    <button onClick={HandleClick}>Click 1</button>
    </>
  )
}

export default LiftingStateUp