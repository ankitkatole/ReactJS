import { useState } from "react";
export default function Counter() {
    let [count,setCount] = useState(0);
    
    let incCount = ()=>{
        setCount(++count);
    }
  return (
    <>
    <div><h3>Counter {count}</h3></div>
    <button onClick={incCount}>+1</button>
    </>
  )
}
