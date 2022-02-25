import {React , useState} from "react";
import css from "./Taskboard.module.css";
import AddTask from "../addTaskButton/addTask.js";
import Todo from "../Task/Task";
import TaskCalendar from "../TaskCalendar/TaskCalendar";
import moment from "moment";

/*
task date in usestate on the index, thats what needs to change
pass down set date into calender 
use date to filter tasks
const [value, setValue] = useState(new Date());
*/


export default function TaskBoard({ todos , deleteItem, deleteRequest }) {
  const [taskDate, setTaskDate] = useState(new Date());
  console.log("moment date" , moment(taskDate).format('YYYY-MM-DD'))
  ;
 
 console.log(taskDate)
  if (todos.length > 0) {
    console.log(todos[8].date)
    console.log("data date" , String(todos[8].date).substring(0,10))
    //console.log(taskDate)
    return (
      <div className={css.taskboard}>
          <TaskCalendar taskDate={taskDate} setTaskDate={setTaskDate}/>
        <div className={css.todoList}>
          {todos.filter(todos => {String((todos.date)).substring(0,10) === String(moment(taskDate).format('YYYY-MM-DD'))}).map((todo, index ) => {
            function deleteTaskOnClick(){
              deleteItem(index)
              deleteRequest(todo.id)}
            
            return (<Todo 
              key={index}
              todo={todo}
              id={todo.id} 
              deleteTaskOnClick={deleteTaskOnClick}
              />
          )})}
        </div>
        <AddTask />
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

/*
filter(todos => {String(todos.date).substring(0,10) == String(taskDate)})
 function handleDelete(i) {
    console.log("%chandle delete", "color:lightblue");
    setToDos([...toDos.slice(0, i), ...toDos.slice(i + 1)]);
  } */
