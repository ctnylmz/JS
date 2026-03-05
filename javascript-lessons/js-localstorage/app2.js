console.log("app.js 2");


const people = [
    {name: "John",phone: "Apple"},
    {name: "Emily",phone: "Samsung"},
    {name: "Michael",phone: "Xiaomi"},
];

console.log(people);
console.log(JSON.stringify(people));
console.log(JSON.parse(JSON.stringify(people)));

localStorage.setItem("people",JSON.stringify(people))

let storData =  localStorage.getItem("people")

console.log(storData)