let fruits = ["apple", "mango", 'litchi', "banana", "Orange", "pineapple"];
for (let i = 0; i < fruits.length; i++)
{
    console.log(i, fruits[i]);
}

// Nested Array
let heroes = [["Ironman", "Spiderman", "Thor"], ["Superman","Wonder Woman","Flash"]];

for (let i = 0; i <heroes.length; i++)
{
    console.log(`List #${i}`);
    for (let j = 0; j < heroes[i].length; j++)
    {
        console.log(heroes[i][j]);
    }
}


// for of loop
let fruit = ["Mango", "Apple", "Orange", "Pineapple", "Litchi", "Banana"];
for (f of fruit)
{
    console.log(f);
}

for (char of "apnacollege") {
    console.log(char);
}

// Nested for of loop
let hero = [["Ironman", "Spiderman", "Thor"], ["Superman", "Wonder woman", "Flash"]];
for (list of hero) {
    for (h of list) {
        console.log(h);
    }
}


