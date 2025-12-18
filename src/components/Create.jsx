import React, { Fragment } from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

 const [title, settitle] = useState("")   
const [status, setstatus] = useState(false)
 const submitHandler = (e) =>{
  e.preventDefault();

  const newTodo = {
    id : nanoid(),
    title : title,
    status : status
  }

  // console.log(newTodo);

  // let copytodos = [...todos]
  // copytodos.push(newTodo)
  // settodos(copytodos);

  settodos([...todos, newTodo]); 

  settitle(""); 

 
 }

// const buttoncss = {
//     color : "black",
//     borderRadius : "5px",
//     backgroundColor : "lightgreen",
//     padding : "5px 10px",
//     border : "1px solid black",

// }

  return (
    <div className=' w-[65%] p-10 text-center'>
         <h1 className='text-5xl text-white mb-10' >CREATE <span className='text-red-400'>TODO </span>FOR WORK</h1>
    <hr />
    <br />
    <form onSubmit={submitHandler}>
      <input className='border-b  mb-10 w-full text-2xl p-2 outline-none'
       onChange={(e)=> settitle(e.target.value)}
      value={title}
      
      type="text" placeholder='enter title' />
      <br />
      
      <input checked={status}
      onChange={(e)=>setstatus(e.target.checked)}
       type="checkbox"
         /> 
      <br />
      <br />
      <hr />
      <br />
      <button className='mt-5 bg-green-600 text-xl px-10 py-2  border rounded'
      type='submit'>ADD TODO</button>
    </form>
    </div>
  )
}

export default Create