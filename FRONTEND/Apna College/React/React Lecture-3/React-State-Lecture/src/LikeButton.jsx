import { useState } from "react";
export default function LikeButton(){
    let[Islike,setIslike]=useState(false);
    let[clicks,setclicks]=useState(0);
    let toggleLike= ()=>{
        setIslike(!Islike);
        setclicks(clicks+1);
    }
    
    let likestyle={
        color:"red"
    };
    return(
        <div>
            <p>Clicks: {clicks}</p>
            <p onClick={toggleLike}>
                {
                    Islike ? <i className="fa-solid fa-heart"style={likestyle}></i> : <i className="fa-regular fa-heart"></i>
                }
            </p>
        </div>
    );
}