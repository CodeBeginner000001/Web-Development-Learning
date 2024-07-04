import { useState,useEffect } from "react";

export default function Counter(){
    let [countx,setCountx]=useState(0);
    let [county,setCounty]=useState(0);

    let incCountx= ()=>{
        setCountx(currCount=>currCount+1)
    }
    let incCounty= ()=>{
        setCounty(currCount=>currCount+1)
    }

    useEffect(function() {
        console.log("useEffect called");
    },[countx]);

    /*Used when we need to see the changes at the time of rendering or re-rendering for more than 1 state */
    // useEffect(function() {
    //     console.log("useEffect called");
    // },[countx,county]);

  /*Used when we need to see the changes at the time of rendering but not for re-rendering*/
    // useEffect(function() {
    //     console.log("useEffect called");
    // },[]);
    return(
    <div>
        <h1>Counter</h1>
        <h3>countx = {countx}</h3>
        <button onClick={incCountx}>+1</button>
        <h3>countx = {county}</h3>
        <button onClick={incCounty}>+1</button>
    </div>
    );
}