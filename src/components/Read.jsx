import React, { Fragment } from 'react'
import { useState } from 'react'

const Read = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;    

const [status, setstatus] = useState(false)
const renderTodos = todos.map((todo)=>{
return <li style={{color : todo.status ? "green" : "red"}} key={todo.id}>{todo.title}</li>
})

  return (
    <Fragment>
         <h2 style={{color : "tomato"}}>PENDING TODOS LIST</h2>
    <ol>{renderTodos}</ol>
    </Fragment>
  )
}

export default Read