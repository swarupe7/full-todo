import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Appmodules.css';
import deleteIcon  from './img/delete-icon.png'

const Base_Url="http://localhost:5000/api";

const Appx = () => {
    const [todos,setTodos]=useState(null);
    const [todo,setTodo]=useState("");
    useEffect(()=>{
        getTodo();
    },[]);
    const getTodo=()=>{
        axios.get(`${Base_Url}/todos`).then((res)=>setTodos(res.data)).catch((err)=>console.error(err));
    }
    const handleAdd=(e)=>{
        axios.post(`${Base_Url}/todos/add`,{title:todo}).then((res)=>{
            setTodos([...todos,res.data]);
        setTodo("");}).catch((err)=>console.log(err));
    }
   const handleDel=(id)=>{
    axios.delete(`${Base_Url}/todos/delete/${id}`).then((res)=>{
        setTodos(todos.filter((todo)=>todo._id!==res.data._id))

    }).catch((err)=>console.log(err));

   }

   const toggleClick=(id)=>{
    axios.get(`${Base_Url}/todos/toggle/${id}`).then((res)=>getTodo()).catch((err)=>console.log(err));
   }

  return (
    <div className='App'>
        <div className="todo-input-wrapper">
            <input type="text" className="todo-input-bar" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Add something to TODO...'/>
      
        <button className="add-button btn" onClick={handleAdd}>+</button>  </div>
        <div className="todos-list">
            {!todos|| !todos.length?(
                <h3 style={{textAlign:"center"}}>No Todo Data</h3>
            ):(
                 todos.map((todo)=>(   <div className="todo" key={todo._id}>
                    <span id="todo-title" onClick={toggleClick(todo._id)} className={todo.complete?"complete":""}>{todo.title}</span>
                 

                 <span className="delete btn" onClick={()=>handleDel(todo._id)} >
                    <img src={deleteIcon} alt="del" height='20px' width='20px'/>
                 </span>
                    


                    </div>
                    ))
            )}
        </div>

    </div>
  )
}

export default Appx