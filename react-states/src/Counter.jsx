import { useState } from "react";
export default function Counter(){
    let [count,setStateCount]= useState(0);
    let incCount = ()=>{
        setStateCount(++count);
    }
    return(
        <>
            <h3>Counter = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </>
    )
}