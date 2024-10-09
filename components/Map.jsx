import React from 'react'

const Map = () => {
  const items = ['item1', 'item2', 'item3', 'item4'];
  return (
    <>
    <ul>
      {
        items.map((item, i)=>(
          <li key = {i}>{i}----{item}</li>
        ))
      }
    </ul>
    </>
  )
}
 
export default Map