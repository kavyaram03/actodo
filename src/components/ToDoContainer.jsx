import { useState } from "react";
import AddToDoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function ToDoContainer() {
    const [activityArr, setActivityArr] = useState([
        {
            id: 1,
            activity: "Go for a walk"
        },
        {
            id: 2,
            activity: "Have breafast"
        },
        {
            id: 3,
            activity: "Take a shower"
        }
    ])

    return (
        <div className="flex gap-5 items-start w-full">
            <AddToDoForm activityArr={activityArr} setActivityArr={setActivityArr} />
            <TodoList activityArr={activityArr} setActivityArr={setActivityArr}/>
        </div>
    );
}

export default ToDoContainer;