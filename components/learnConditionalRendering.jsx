import React from 'react'

const learnConditionalRendering = () => {
    const status = true
    const [isLogin, setLogin] = useState(false)

  return (
<>
{status && <h1>Geeky Shows</h1>}
{isLogin? (<><h1>Dashboard Page</h1><button onClick={()=> setIsLogin(false)}></button></>) 
: (<><h1>Login Page</h1><button onClick={()=> setIsLogin(true)}></button></>)}
</>
  )
}

export default learnConditionalRendering