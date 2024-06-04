let inp = document.querySelector("input");
// inp.addEventListener("keydown", function (event) {
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key was pressed");
// });
// inp.addEventListener("keyup", function () {
//     console.log("key was released");
// });
inp.addEventListener("keydown", function (event) {
    console.log("code= ", event.code);//ArrowUp,ArrowDown,ArrowLeft,ArrowRight
    if (event.code === "ArrowUp") { //ArrowU
        console.log("Character move up");
    }
    else if (event.code === "ArrowDown") {//ArrowD
        console.log("Character move down");
    }
    else if (event.code === "ArrowLeft") { //ArrowL
        console.log("Character move left");
    }
    else if (event.code === "ArrowRight") { //ArrowR
        console.log("Character move right");
    }
});
