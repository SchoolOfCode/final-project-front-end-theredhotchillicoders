import { React, useState, useEffect } from 'react'
import css from './Taskboard.module.css'
import AddTask from '../addTaskButton/addTask.js'
import Todo from '../Task/Task'
import { useTheme } from '@mui/material'
import moment from 'moment'
import ProgressBar from '../ProgressBar/ProgressBar'
import RandomQuote from '../RandomQuote/RandomQuote.js'

//filtering todo list to get the correct todos for the current day.

function filterToDos(todos, taskDate, setFilteredToDos) {
    let selectedDate = moment(taskDate).format('DD - MM - YYYY')
    let filtered = todos.filter(
        (todo) => moment(todo.date).format('DD - MM - YYYY') === selectedDate
    )
    setFilteredToDos(filtered)
}

export default function TaskBoard({
    todos,
    deleteRequest,
    setTodos,
    taskDate,
}) {
    const [filteredToDos, setFilteredToDos] = useState([])

    let theme = useTheme()
    function deleteItem(findIndex) {
        console.log('filteredtodos', filteredToDos)
        setFilteredToDos([
            ...filteredToDos.slice(0, findIndex),
            ...filteredToDos.slice(findIndex + 1),
        ])
    }

    useEffect(() => {
        filterToDos(todos, taskDate, setFilteredToDos)
    }, [todos, taskDate])

    if (filteredToDos.length > 0) {
        return (
            <div>
                <div className={css.progressBar}>
                    <ProgressBar filteredToDos={filteredToDos} />
                </div>
                <div
                    className={css.taskboard}
                    style={{
                        backgroundColor: theme.palette.text.secondary,
                        boxShadow: '2px 2px 10px black',
                        border: `solid 2px ${theme.palette.text.primary}`,
                    }}
                >
                    <div className={css.todoList}>
                        {filteredToDos.map((todo, index) => {
                            function deleteTaskOnClick() {
                                deleteItem(index)
                                deleteRequest(todo.id)
                            }

                            return (
                                <Todo
                                    key={index}
                                    todo={todo}
                                    id={todo.id}
                                    deleteTaskOnClick={deleteTaskOnClick}
                                    filteredToDos={filteredToDos}
                                    setFilteredToDos={setFilteredToDos}
                                    setTodos={setTodos}
                                    todos={todos}
                                />
                            )
                        })}
                    </div>
                    <AddTask />
                </div>
            </div>
        )
    } else {
        return <RandomQuote />
    }
}
