
let num = [1, 2, 3, 4]
let double = num.map(function (el) {
    return el * 2;
});

let square = num.map((el) => { return el * el });

let students = [
    {
        name: "Alice",
        marks: 95,
    },
    {
        name: "Bob",
        marks: 94.4,
    },
    {
        name: "Rajat",
        marks: 93,
    },
];

let gpa = students.map((students) => {
    return (students.marks / 10);
});