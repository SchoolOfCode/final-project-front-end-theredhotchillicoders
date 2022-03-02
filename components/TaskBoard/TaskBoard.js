import { React, useState, useEffect } from "react";
import css from "./Taskboard.module.css";
import AddTask from "../addTaskButton/addTask.js";
import Todo from "../Task/Task";
import TaskCalendar from "../TaskCalendar/TaskCalendar";
import moment from "moment";
import ProgressBar from "../ProgressBar/ProgressBar";

/*
task date in usestate on the index, thats what needs to change
pass down set date into calender
use date to filter tasks
const [value, setValue] = useState(new Date());
*/

function filterToDos(todos, taskDate, setFilteredToDos) {
  let selectedDate = moment(taskDate).format("DD - MM - YYYY");
  let filtered = todos.filter(
    (todo) => moment(todo.date).format("DD - MM - YYYY") === selectedDate
  );
  setFilteredToDos(filtered);
}

export default function TaskBoard({ todos, deleteRequest }) {
  const [taskDate, setTaskDate] = useState(new Date());
  const [filteredToDos, setFilteredToDos] = useState([]);
  const [taskComplete, setTaskComplete] = useState(0);

  function deleteItem(findIndex) {
    console.log("filteredtodos", filteredToDos);
    setFilteredToDos([
      ...filteredToDos.slice(0, findIndex),
      ...filteredToDos.slice(findIndex + 1),
    ]);
  }

  useEffect(() => {
    filterToDos(todos, taskDate, setFilteredToDos);
  }, [todos, taskDate]);

  if (filteredToDos.length > 0) {
    console.log("length", todos.length);

    return (
      <div>
        <div className={css.progressBar}>
          <ProgressBar filteredToDos={filteredToDos} />
        </div>
        <div className={css.taskboard}>
          <TaskCalendar taskDate={taskDate} setTaskDate={setTaskDate} />
          <div className={css.todoList}>
            {filteredToDos.map((todo, index) => {
              function deleteTaskOnClick() {
                deleteItem(index);
                deleteRequest(todo.id);
              }

              return (
                <Todo
                  key={index}
                  todo={todo}
                  id={todo.id}
                  deleteTaskOnClick={deleteTaskOnClick}
                />
              );
            })}
          </div>
          <AddTask />
        </div>
      </div>
    );
  } else {
    return <div>No tasks today</div>;
  }
}

/*
filter(todos => {String(todos.date).substring(0,10) == String(taskDate)})
 function handleDelete(i) {
    console.log("%chandle delete", "color:lightblue");
    setToDos([...toDos.slice(0, i), ...toDos.slice(i + 1)]);
  } */

// calculate length of the filtered todods.
// then calculate the number of isComplete = true.
// divide iscomplete byt total number * 100 and pass to progress bar.
// the new progresss will be shown on page refresh.
