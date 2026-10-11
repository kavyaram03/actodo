import { useState } from "react";
function AddToDoForm(props) {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const [newactivity,setNewactivity] = useState("")

    function handleChange(event){
        setNewactivity(event.target.value)
    }

    function addActivity(){
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setNewactivity("")
    }
    return (
        <div className="flex flex-col gap-3 w-64">
            <h1>Manage activities</h1>
            <input value={newactivity} onChange={handleChange} type="text" className="border border-black bg-transparent p-2 w-full" placeholder="Next Activity?"></input>
            <button onClick={addActivity} className="bg-black text-white p-2 w-full">Add</button>
        </div>
    )
}
export default AddToDoForm;
