// Practice-1

// push: Add to end
// pop: Delete from end & return it
// unshift: Add to start
// shift: Delete from start & return it
let start = ['january', 'july', 'march', 'august'];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");
final = start;
console.log(final);
console.log(final.length);
console.log(final[0]);
console.log(final[3]);
console.log(final.push("September"));
final.pop();
final[1] = "may";
final.pop();
console.log(final.length);
console.log(final);

// Array Method
// indexOf : returm index of something
let primary = ["red", "yellow", "blue"];
console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("green"));
console.log(primary.indexOf("Yellow"));

// includes : Search for a value 
console.log(primary.includes("red"));
console.log(primary.includes("green"));

// concat: merge 2 arrays
let first = ["red", "yellow", "blue"];
let second = ["orange", "green", "violet"];
let g = first.concat(second);
console.log(g);

// reverse:reverse an array
g=first.reverse();
console.log(g);

// slice:copies a portion of an array
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-2));

// splice:removes / replaces / add elements in place
// splice(start,deleteCount,item()....itemN)
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0,1));
console.log(colors);
console.log(colors.splice(0, 1, "black", "grey"));
console.log(colors);

// sort: sorts an array
let days = ["monday", "sunday", "wednesday", "tuesday"];
console.log(days.sort());
let square = [25, 16, 4, 49, 36, 9];
console.log(square.sort());

// Practice-2
let start1 = ['january', 'july', 'march', 'august'];
start1.shift();
console.log(start1.splice(1,0,'june'));
console.log(start1);

let language = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(language.indexOf("javascript"));
console.log(language.reverse().indexOf("javascript"));

// Array References
let arr = ['a', 'b'];
let arrcopy = arr;
console.log(arrcopy);
arrcopy.push('c');
console.log(arr);
console.log(arr == arrcopy);

// nested array
let numb2 = [[2, 4], [3, 6], [4, 8]];
console.log(numb2[1].length);
console.log(numb2[1][0]);
numb2[1][0] = 10;
console.log(numb2[1][0]);



