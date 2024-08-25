import { useState } from "react";
export default function Counter(){
    let [count,setStateCount]= useState(0);
    let incCount = ()=>{
        // setStateCount(++count);
        setStateCount((currCount)=>{
            return currCount + 1;
        })
        setStateCount((currCount)=>{
            return currCount + 1;
        })//Calling multiple setState when new Val depend on old valwe do it by Callback since setState is async func
    }
    return(
        <>
            <h3>Counter = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </>
    )
}