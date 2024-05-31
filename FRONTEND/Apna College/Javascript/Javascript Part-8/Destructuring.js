let names = ["Tony", "Bruce", "Steve", "Peter","ada","xyz","sf"];
let [winner, runnerup,SecondrunnerUp, ...others] = names;
console.log(winner, runnerup, SecondrunnerUp, others);
// Output: Tony Bruce Steve (4) ['Peter', 'ada', 'xyz', 'sf']

// Destructing with objects
const student = {
    name: "Adarsh",
    class: 9,
    age: 22,
    subjects: ["hindi", "english", "math", "science", "Social Science"],
    username: "Adarsh123",
    password: 1234,
};
const { username: user, password: pass , city="New Delhi"} = student;
console.log(user, pass,city);