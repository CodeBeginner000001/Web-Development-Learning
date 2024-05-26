let delhi = {
    latitude: "28.7041° N",
    longitude: "77.1025° E"
};

const student = {
    name: "Adarsh Goyal",
    age: 22,
    marks: 94.4,
    city: "New Delhi"
};

// Twitter Post
let Post = {
    username: "@_adarsh00001",
    content: "Video",
    likes: 1024,
    reposts: 25,
    tags: ["#Robotics","#Player"]
};

// Get value 
console.log(student["name"]);
console.log(student.name);

// Add & Update
console.log(student);
student.gender = "Male";
console.log(student.gender);
console.log(student);


