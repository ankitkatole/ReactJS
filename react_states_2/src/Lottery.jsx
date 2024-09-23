import { useState } from "react";
import {generateTicket,sum} from "./helper";
import "./Lottery.css"
// function Lottery(){
//     let [ticket, setTicket] = useState(generateTicket(3));
//     
//     return(
//         <div>
//             <h1>Lottery</h1>
//             <div className="ticket">
//                 <span>{ticket[0]}</span>
//                 <span>{ticket[1]}</span>
//                 <span>{ticket[2]}</span>
//             </div>
//             
//         </div>
//     )
// }

function Lottery(){
    let [ticket, setTicket] = useState(generateTicket(3));
    let isWinning = sum(ticket) === 15;
    let buyticket = ()=>{
        setTicket(generateTicket(3))
    }
    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={buyticket}>Buy Ticket</button>
            {isWinning ? <h3 className="resW">Congo You won 😍</h3> : <h3 className="resF">Hard Luck 😒</h3>}
            
            
        </div>
    )
}

export default Lottery;