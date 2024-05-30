// Practice Question-1
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;
function findnumbersinarray(arr, num) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
findnumbersinarray(arr, num)

// Practice Question-2
function uniquestr(str) {
    let g = "";
    for (let i = 0; i < str.length; i++)
    {
        let curstr = str[i];
        if (g.indexOf(curstr) == -1)
        {
            g += curstr;
            }
    }
    console.log(g);
}
let str = "abcdabcdefgggh";
uniquestr(str);

// Practice Question-3
// let arr1 = prompt("Enter the list of country");
let arr1 = ["Australia", "Germany", "United States of America"];
function longestcountryName(arr1) {
    let maxlenght = "";
    for (let i = 0; i < arr1.length; i++){
        if (maxlenght.length < arr1[i].length)
        {
            maxlenght = arr1[i];
            }
    }
    console.log(maxlenght);
}
longestcountryName(arr1);

// Practice Question-4
function vowelCount(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] == 'a' || 
            string[i] == 'e' ||
            string[i] == 'i' ||
            string[i] == 'o' ||
            string[i] == 'u' ) {
            count++;
        }
    }
    console.log(count);
}
vowelCount("absjboeeiowa");

// Practice Question-5
console.log("Random Number customization");
let start = 2;
let end = 20;
function random1(start, end) {
    console.log(Math.floor(Math.random() * end) + start);
}
random1(start, end);
random1(start, end);
random1(start, end);
random1(start, end);
random1(start, end);
random1(start, end);
random1(start, end);
random1(start, end);
random1(start, end);
