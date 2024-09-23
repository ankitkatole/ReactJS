import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
// import "./ToDoList.css"
export default function ToDoList() {
    let [ tasks, setTasks] = useState([{task:"sample-tsk",id:uuidv4()}]);
    let [newTask, setNewTask] = useState("");

    let addNewTask = ()=>{
        console.log("Adding New Task")
        setTasks([...tasks,{task:newTask,id:uuidv4()}])
        setNewTask("")
    }
    let updateTask = (event)=>{
        setNewTask(event.target.value)
    }
    return (
        <div>
            <h1>ToDo List</h1>
            <input placeholder="Task" value={newTask} onChange={updateTask}></input><br />
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <br />
            <hr></hr>
            <h2>Your Tasks</h2>
            <ul>
                {tasks.map((task)=>(
                    <li key={task.id}>{task.task}</li>
                ))}
            </ul>
        </div>
    )
}