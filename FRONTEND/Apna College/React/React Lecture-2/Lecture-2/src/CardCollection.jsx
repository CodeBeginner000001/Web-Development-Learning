import Cards from "./Card.jsx"

function CardCollection(){
    let styles={
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems:"center",
    }
    return (
        <div style={styles}>
        <Cards title="Logitech MX Master" idx={0}/>
        <Cards title="Apple Pencill (2nd Gen)" idx={1}/>
        <Cards title="Zebronics Zeb-transformwer" idx={2}/>
        <Cards title="Petronics Toad 23" idx={3}/>
        </div>
    )
}

export default CardCollection;