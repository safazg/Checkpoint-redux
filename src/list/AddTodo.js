import React from 'react'
import {useState} from "react"
import { useDispatch } from 'react-redux'


function AddTodo() {
 const [id, setid] = useState('')
 const [des, setdes] = useState('')
 const dispatch = useDispatch()
 
 return (
  <div className="add">
     <label>N°</label>
     <input type="text"  onChange={(e) => setid(e.target.value)}/>
     <label>description</label>
     <input type="text"onChange={(e) => setdes(e.target.value)}/>
     <button onClick={()=>{dispatch({type:"add",id:id,description:des});}}>Add</button>
  </div>
 )
}

export default AddTodo
