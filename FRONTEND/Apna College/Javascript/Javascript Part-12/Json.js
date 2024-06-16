/* JSON statement reading */
let jsonRes=
'{"fact":"A cat\u2019s heart beats nearly twice as fast as a human heart, at 110 to 140 beats a minute.","length":88}';
console.log(jsonRes);

/* To parse a string data into a JS object */
let vaildRes = JSON.parse(jsonRes);
console.log(vaildRes);
// Able to access the fact like string
console.log(vaildRes.fact);


/* To parse a JS object data into JSON */
let student={
    Name: "Adarsh Goyal",
    Marks:95,
};
console.log(JSON.stringify(student));