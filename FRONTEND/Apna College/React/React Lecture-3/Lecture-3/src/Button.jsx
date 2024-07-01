//Handling Click
function printHello(){
    console.log("Hello");
}

function parahello(){
    console.log("Hello, Clicked on hello...");
}
// Handling MouseOver
function paraHover(){
    console.log("Hovered on paragraph");
}

// Handling Double Click
function Dblclick(){
    console.log("You double Clicked me");
}

// Accessing the event Object in Handler
function handlingEvent(event){
    console.log("Hello");
    console.log(event);
}
export default function button(){
    return (
        <div>
            {/* given below  are CLick Event */}
            <button onClick={printHello}>Click Me!</button>
            <p onClick={parahello}>This is p tag</p>

            {/* Given below is non click event */}
            <p onMouseOver={paraHover}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque delectus corporis expedita dolore repellat eum omnis. Nihil, rem tempore natus nisi laudantium architecto? Quis quas distinctio nisi assumenda quos soluta.
            Esse, iste! Numquam odio modi, officiis esse iste itaque sunt quam qui id, dolores harum eos nulla reprehenderit, cum tempora nostrum totam libero odit suscipit quibusdam sapiente! Animi, recusandae quaerat?
            Minus, impedit libero! Dicta eveniet incidunt minus modi perspiciatis, corrupti explicabo aliquid quia debitis, quisquam ducimus nam placeat corporis beatae nobis iste ad nisi delectus. Mollitia ipsa excepturi dolorum iusto!
            Perspiciatis numquam, architecto sequi id, doloribus nam adipisci tenetur officia ratione sint a voluptate enim reiciendis vitae cum voluptas laborum. Nobis ea in quae assumenda suscipit doloribus odit, molestias labore!
            </p>

            {/* Given below  is for double click*/}
            <button onDoubleClick={Dblclick}>Double Click Me!</button>

            {/* Given below is for Event Object */}
            <button onClick={handlingEvent}>Click Me!</button>
        </div>
    );
}