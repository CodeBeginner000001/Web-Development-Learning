let todo = [];
let req = prompt("Please Enter Your request");
while (true) {
    if (req == "Quit") {
        console.log("Quitting App......");
        break;
    }else
    if (req == "List") {
        console.log("---------------");
        for (let i = 0; i < todo.length; i++)
        {
            console.log(i, todo[i]);
        }
        console.log("---------------");

    }
    else
    if (req == "Add") {
        todo.push(prompt("Enter the task you want to Add...."))
        console.log("Task Added.....");
    }
    else
    if (req == "Delete") {
        todo.splice(prompt("Enter the index of the task you want to delete"), 1);
        console.log("Task Deleted......");
    }
    else {
        console.log("Wrong Request......");
    }
    req = prompt("Please Enter Your request");

}