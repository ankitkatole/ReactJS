import { useState } from "react";
import {generateTicket,sum} from "./helper";
import Ticket from "./Ticket";
import "./Lottery.css"


function Lottery({n=3, winningSum=15}){
    let [ticket, setTicket] = useState(generateTicket(n));
    let isWinning = sum(ticket) === winningSum;
    let buyticket = ()=>{
        setTicket(generateTicket(3))
    }
    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <Ticket ticket={ticket} />
            </div>
            <button onClick={buyticket}>Buy Ticket</button>
            {isWinning ? <h3 className="resW">Congo You won 😍</h3> : <h3 className="resF">Hard Luck 😒</h3>}
            
            
        </div>
    )
}

export default Lottery;