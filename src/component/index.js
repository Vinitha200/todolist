import React,{useState} from "react";
import AddForm from "./addlist/addForm";
import "./index.css"
import Read from "./readlist/read";

const Main =()=>{
    const [newTask,setNewTask] = useState([])
  

    return(
        <>
        <div className="main-div">
            <div className="main-container">
                <AddForm  newTask={newTask}  setNewTask={setNewTask}/>
        <Read newTask={newTask}/>
            </div>
        
        </div>
        
        </>
    )
}

export default Main;