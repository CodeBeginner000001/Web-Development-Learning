import {useState} from "react"
import { genRand,sum } from "./helper";
import Ticket from "./Ticket";
import Button1 from "./button";
export default function Lottery({n=3,wincondition}){
    let [ticket,setTicket]=useState(genRand(n))
    let isWinning=wincondition(ticket);

    function buyticket(){
        setTicket(genRand(n));
    }
    return(
    <div>
        <h1>Lottery Game!</h1>
        <Ticket ticketArr={ticket}/>
        <Button1 action={buyticket}/>
        <h3>{isWinning && "Congratulation! You won the Lottery"}</h3>
    </div>
    );
}