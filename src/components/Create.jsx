import React, { Fragment } from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

 const [title, settitle] = useState("")   

 const submitHandler = (e) =>{
  e.preventDefault();

  const newTodo = {
    id : nanoid(),
    title : title,
    status : true
  }

  // console.log(newTodo);

  // let copytodos = [...todos]
  // copytodos.push(newTodo)
  // settodos(copytodos);

  settodos([...todos, newTodo]); 

  settitle(""); 

 
 }

const buttoncss = {
    color : "black",
    borderRadius : "5px",
    backgroundColor : "lightgreen",
    padding : "5px 10px",
    border : "1px solid black",

}

  return (
    <Fragment>
         <h1>CREATE TODO</h1>
    <hr />
    <br />
    <form onSubmit={submitHandler}>
      <input onChange={(e)=> settitle(e.target.value)}
      value={title}
      
      type="text" placeholder='enter title' />
      <br />
      <br />
      <input checked={status}
      onChange={(e)=>setstatus(e.target.checked)}
       type="checkbox"  /> Completed
      <br />
      <br />
      <hr />
      <br />
      <button  style={buttoncss} type='submit'>ADD TODO</button>
    </form>
    </Fragment>
  )
}

export default Create