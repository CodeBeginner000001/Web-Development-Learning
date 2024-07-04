import { useEffect, useState } from "react";

export default function joker(){
    const url ="https://official-joke-api.appspot.com/random_joke";
    let [joke,setJoke]=useState({});
    const getJoke = async ()=>{
        let res=await fetch(url);
        let jsonresp = await res.json();
        setJoke({setup:jsonresp.setup,punchline:jsonresp.punchline})
    }
    useEffect(()=>{
        async function refreshjoke(){
        let res=await fetch(url);
        let jsonresp = await res.json();
        setJoke({setup:jsonresp.setup,punchline:jsonresp.punchline})
        }
        refreshjoke();
    },[]);
    return(
        <div>
            <h1>Joker....</h1>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={getJoke}>Tell a Joke</button>
        </div>
    )
}