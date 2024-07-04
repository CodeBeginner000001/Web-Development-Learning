import './App.css'
import { sum } from './helper'
import Lottery1 from "./Lottery"
function App() {
  let wincondition= (ticket)=>{
    /*Below line is for winning at the total digit sum: 15 */
    // return sum(ticket)===15; 
    /*Below line is for winning at the digit are equal to its 0th index number */
    return ticket.every((num)=>num===ticket[0]);
  };
  return (
    <>
    <Lottery1 n={3} wincondition={wincondition}/>
    </>
  )
}

export default App
