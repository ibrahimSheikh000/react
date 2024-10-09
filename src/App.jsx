import React from 'react'
import MainComponent from '../components/MainComponent'
import JsxComponent from '../components/JsxComponent'
import Props from '../components/Props'
import Events from '../components/Events'
import LiftingStateUp from '../components/LiftingStateUp'
import LearnUseState from '../components/LearnUseState'
import LearnUseEffect from '../components/LearnUseEffect'
import LearnMemo from '../components/LearnMemo'
import LearnUseCallback from '../components/LearnUseCallback'
import Map from '../components/Map'

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
    <LearnUseState/>
    <LearnUseEffect/>
    <LearnMemo/>
    <LearnUseCallback/>
    <Map/>
    </>
  )
}

export default App