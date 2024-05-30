// const student = {
//     name: "Adarsh",
//     age: 22,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg() {
//         let avg = (eng + math + phy) / 3;
//         console.log(avg);
//     }
// }
// The code given above will give you error

const student = {
    name: "Adarsh",
    age: 22,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got an average marks: ${avg}`);
    }
}
// The above code will give the avg which is 95