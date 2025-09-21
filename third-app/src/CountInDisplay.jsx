import { useState } from "react";
function Counter(){
    // let [Dynamic_state , setState]=useState(Initial Value)
    let[count,setCount]=useState(0);
    function incr_emp(){
        setCount(++count);
        console.log("The number of Current Emp:",count);
    }
    function dec_emp(){
        setCount(--count);
        console.log("The number of Current Emp:",count);
    }
    return(
    <div>
        <h1>Counter</h1>
        <h1>The number of employee is : {count} </h1>
        <button onClick={incr_emp}>Add Employee</button>
        <button onClick={dec_emp}>dec_Emp</button>

    </div>
    )
}
export default Counter;