const classInfo = {
    aman: {
        grade: "A+",
        city: "Delhi"
    },
    sneha: {
        grade: "A",
        city: "Pune"
    },
    karan: {
        grade: "O",
        city:"Mumbai"
    }
}

// How to access Object of Objects
console.log(classInfo);
console.log(classInfo.sneha);
console.log(classInfo.karan.city);

// How to update
classInfo.sneha.grade = "A++";
// How to add
classInfo.sneha.age = 20;
console.log(classInfo.sneha);






