import React from 'react'

const JsxComponent = () => {
    let model = "G11";
  return (
    <>
    <h1>Learn JSX</h1>
    <h1>Learn React</h1>

    {/*JavaScript expression in jsx*/}
    <h1>Price: {10 + 20}</h1>
    <h1>LG {model}</h1>

    {/*Attributes in jsx*/}
    <h1 className='bg-primary'>Learn JSX2</h1>   
    <h1 className = {model}>Learn JSX3</h1>
    </>
  )
}

export default JsxComponent