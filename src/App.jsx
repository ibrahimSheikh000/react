import React from 'react'
import MainComponent from '../components/MainComponent'
import JsxComponent from '../components/JsxComponent'
import Props from '../components/Props'
import Events from '../components/Events'
import LiftingStateUp from '../components/LiftingStateUp'

const App = () => {
  const getData = (data) => {
    console.log(data)
  }
  let roll = 100
  return (
    <>
    <MainComponent/>
    <JsxComponent/>
    <Props name = "Ibrahim" roll = {roll} />    
    <Events/>
    <LiftingStateUp anyname = {getData}/>
    </>
  )
}

export default App