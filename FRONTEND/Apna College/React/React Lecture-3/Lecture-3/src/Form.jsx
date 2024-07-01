function formsubmit(event){
    event.preventDefault();
    console.log("Form submitted...");
}

export default function form(){
    return(
        <form onSubmit={formsubmit} >
            <input type="text" placeholder="Enter Text" />
            <button onClick={formsubmit}>Submit using onClick in button</button>
            <button>Form Submit using onsubmit in form</button>
        </form>
    )
}