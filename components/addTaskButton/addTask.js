import { useState } from "react";

const AddTask = () => {
    const [text, setText] = useState('')

    return (
            <div className="taskButton">
                <button>+ Add Task</button>
                {/* <input
                type='text'
                placeholder="Add Task" 
                value = {text}
                onChange={(e) => setText(e.target.value)}
                /> */}
            </div>
    )
}

export default AddTask