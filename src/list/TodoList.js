import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Edit from '../modal/Edit'


const TodoList=()=> {
 
    const tasks = useSelector(state => state.TodoList)
    const dispatch = useDispatch()
  
  return (
  <div>
   
    <div className="button">

     <button onClick={()=>{dispatch({type:'alltask'})}} >See all</button>
     <button onClick={()=>{dispatch({type:'donetask'})}}   >Done</button>
     <button onClick={()=>{dispatch({type:'notdonetask'})}} >Not done</button>
    </div>
   <div className="TodoList">
       {
       tasks.filter((obj)=>obj.show==true).map((obj,i)=>{
    
        return(
       <div className="task" key={i}>
         <h2 style={obj.done?{textDecorationLine: 'line-through', 
           textDecorationStyle: 'solid'}:{}} onClick={()=>dispatch({type:"done",index:i})} >{obj.id} : {obj.description} 
         </h2>
       
         <div className="b">
           <Edit index={i}/>
           <button onClick={()=>{dispatch({type:'delete',index:i})}}>Delete</button>
         </div>
       </div>)})
    
   
        }
     </div>
 </div>)
}   


export default TodoList;
