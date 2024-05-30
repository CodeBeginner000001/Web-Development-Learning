const student = {
    name: "Adarsh Goyal",
    marks: 95,
    prop: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope --> window
        return this.marks;
    },
    // refering this in function will refer to the object in which it is called
    // refering this independing will refer to the global scope not the object in which it is being called
    getinfo1: function () {
        setTimeout(() => {
            console.log("getinfo1")
            console.log(this);  //student
        }, 2000);
    },
    getinfo2: function () {
        setTimeout(function () {
            console.log(this);  //window
            console.log("getinfo2");
        }, 2000);
    },
    getinfo3:function () {
        console.log(this);
        console.log("getinfo3");
    }
};
