import { useState } from "react"
export default function LudoBoard(){
    let [moves,setMoves] = useState({blue:0,yellow:0,green:0,red:0})

    let updateBlue = ()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves, blue: prevMoves.blue+1}
        });
    }
    let updateYellow = ()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves, yellow: prevMoves.yellow+1}
        });
    }
    let updateGreen = ()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves, green: prevMoves.green+1}
        });
    }
    let updateRed = ()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves, red: prevMoves.red+1}
        });//Using Spread "..." coz setStates doesnt trigger rerender until there are any changes in state of object and chaging keys of object doesnt change address(referenece) of state. so the spread operator creates copy and signals the change
    }
    return (
        <>
            <p>Game Begins</p>
            <div className="board" style={{fontWeight:"bold"}}>
                <p>Blue Moves = {moves.blue}</p>
                <button style={{backgroundColor:"Blue"}} onClick={updateBlue}>Blue+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{backgroundColor:"Yellow", color:"black"}} onClick={updateYellow}>Yellow+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor:"Green"}} onClick={updateGreen}>Green+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{backgroundColor:"Red",color:"black"}} onClick={updateRed}>Red+1</button>
            </div>
        </>
    )
}