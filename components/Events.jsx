import React from 'react'

const Events = () => {
    const HandleClick1 = (e) =>{
        e.preventDefault()
        console.log("Hello World");
    }
        const HandleClick2 = (myID) =>{
            console.log("Hello World 2", myID);
    }
  return (
    <>
    {/*without argument*/}
    <button onClick={HandleClick1}> Button Clicked</button>

    {/*with argument*/}
    <button onClick={(e) => HandleClick2("78983")}> Button Clicked</button>
    </>
  )
}


export default Events