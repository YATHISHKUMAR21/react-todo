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
return <li  className='mb-4 flex justify-between items-center p-6 bg-slate-700 rounded'
    //  style={{classcolor : todo.status ? "green" : "red"}}
      key={todo.id}>

  <span className='text-2xl text-slate-100'>{todo.title}</span>  {" "} <button className=' text-red-500' onClick={()=>{DeleteHandler(todo.id)}}>DELETE</button>
  
  </li>
})



  return (  
    <div className='w-[30%] p-10'>
         <h1  className='text-white text-4xl mb-10'><span className='text-yellow-300'>PENDING </span>TODOS</h1>
    <ol>{renderTodos}</ol>
    </div>
  )
}

export default Read