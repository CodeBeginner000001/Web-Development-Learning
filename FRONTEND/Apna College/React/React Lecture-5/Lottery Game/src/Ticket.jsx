import TicketNum from "./TicketNum"
import "./Ticket.css"
export default function Ticket({ticketArr}){
    return(
        <>
        <div className="ticket">
            <span>Lottery Ticket = </span>
            {
                ticketArr.map((ticket,index)=>(
                    <TicketNum num={ticket} key={index}/>
                ))
            }
        </div>
        </>
    );
}