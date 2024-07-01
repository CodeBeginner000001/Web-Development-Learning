import {useState} from "react";
export default function LudoBoard(){
    let [moves,setmoves]=useState({blue:0,yellow:0,green:0,red:0})
    let [arr,setarr]=useState(["no move , "])

    let updateBlue =()=>{
        setmoves((prevMove)=>{
            return {...prevMove,blue:prevMove.blue+1};
        });

        setarr((prevarr)=>{return [...prevarr,"blue moved,"]})
        // console.log(`moves.blue = ${moves.blue}`);
    }
    let updateYellow =()=>{
        setmoves((prevMove)=>{
            return {...prevMove,yellow:prevMove.yellow+1};
        });
        // console.log(`moves.yellow = ${moves.yellow}`);
    }
    let updateGreen =()=>{
        setmoves((prevMove)=>{
            return {...prevMove,green:prevMove.green+1};
        });
        // console.log(`moves.green = ${moves.green}`);
    }
    let updateRed =()=>{
        setmoves((prevMove)=>{
            return {...prevMove,red:prevMove.red+1};
        });
        // console.log(`moves.red = ${moves.red}`);
    }
    return(
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="Board">
                <p>Blue moves = {moves.blue}</p>
                <button style={{backgroundColor:"Blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor:"Yellow",color:"black"}} onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor:"Green"}} onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor:"Red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}