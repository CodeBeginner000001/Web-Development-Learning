import "./Card.css"
import Price from "./Price.jsx"

function Card({title,idx}){
    let oldPrices=["12,495","11,900","1,599","599"];
    let newPrices=["8,999","9,199","899","278"];
    let Description=[
        ["8,000 DPI", "5 Programmable Buttons"],
        ["Intuitive touch surface","Designed for iPad Pro"],
        ["Intuitive touch surface","Designed for iPad Pro"],
        ["Wireless Mouse 2.4GHz","Optical Orientation"]
    ];
    // let Description=["8,000 DPI","Intuitive touch surface","Designed for iPad Pro","Optical Orientation"];
    return (
        <div class="Card">
            <h4>{title}</h4>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Card;