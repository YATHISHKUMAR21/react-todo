import React, { Fragment } from 'react'
import { useState } from 'react'
import css from "./Read.module.css" 


const Read = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;    

const DeleteHandler = (id)=>{
  console.log(id)


  const remainingtodo =  todos.filter((todo)=>{
     return todo.id != id
  });
  settodos(remainingtodo)

 
}


const renderTodos = todos.map((todo)=>{
return <li 
    // style={{color : todo.status ? "green" : "red"}}
      key={todo.id}>

  {todo.id} {" -----"}  {"------- "} {todo.title} | {" "} <span onClick={()=>{DeleteHandler(todo.id)}}>DELETE</span>
  
  </li>
})



  return (
    <Fragment>
         <h1 className={css.read_list_heading}>PENDING TODOS LIST</h1>
    <ol>{renderTodos}</ol>
    </Fragment>
  )
}

export default Read