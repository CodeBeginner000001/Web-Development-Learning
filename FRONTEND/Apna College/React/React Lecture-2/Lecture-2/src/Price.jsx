export default function price({oldPrice, newPrice}){
    let oldstyle={
        textDecorationLine:"line-through",
    }

    let newstyle={
        fontWeight:"bold",
    }

    let styles={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#e0c367",
        height:"30px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
    }

 return(
    <div style={styles}>
        <span style={oldstyle}>{oldPrice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={newstyle}>{newPrice}</span>
    </div>
 )
}