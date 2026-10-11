import { useState } from "react"; 
import TodoItem from "./TodoItem";

function TodoList(props) {
  const activityArr = props.activityArr
  const setActivityArr = props.setActivityArr
    
  return (
    <div className="bg-[#BDB4E4] border rounded-md p-2 flex-1">
      <h1 className="text-2xl font-medium">Today's activity</h1>

      {
        activityArr.length===0?<p>You haven't added anything yet!</p>:""
      }
      {
        activityArr.map(function(item,index){
            return <TodoItem activity={item.activity} id={item.id} index={index} activityArr={activityArr} setActivityArr={setActivityArr}/>
        })
      }
    
    </div>
  );
}

export default TodoList;