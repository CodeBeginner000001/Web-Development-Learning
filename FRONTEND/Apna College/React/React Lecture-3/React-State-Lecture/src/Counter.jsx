import { useState } from "react";
export default function Counter(){
    let [count,setCount]=useState(0);

    let increaseCount= ()=>{
        setCount(count+1);
        console.log("<------------------>")
        console.log(count);
        console.log(count+1);//Re-render ka stage time ma ya inital value pa hota hai 
    }
    return(
        <div>
            <h3>Count: {count}</h3>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    )
}