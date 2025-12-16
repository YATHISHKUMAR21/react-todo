import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import Create from './components/Create'
import Read from './components/Read'

const App = () => {
 const [todos, settodos] = useState(
  [
  {id : 1, title : "wake up", status : false}, 
 ]
)
return (
    <div className="flex w-screen h-screen bg-blue-800 p-10">
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  )
}

export default App