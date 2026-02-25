// Sadece reference tipler (object, array) find() ile değişir.
// Primitive tipler (number, string, boolean) değişmez.


/* (object, array) (reference) */ 
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Michael" },
  { id: 3, name: "Emma" }
]

// Find the user with id = 2
const user = users.find(u => u.id === 2)

user.name = "David"

console.log(users)

/* (object, array) (reference) */
let arr = [[1], [2], [3]]

let item = arr.find(x => x[0] === 2)

item[0] = 200

console.log(arr)


/* Primitive tipler (number, string, boolean) değişmez. */ 
const numbers = [10, 20, 30, 40,70,80,5]

let value = numbers.find(x => x === 20)
value = 200 
console.log(numbers)

const index = numbers.findIndex(x => x === 20)
numbers[index] = 200

console.log(numbers)


/* Reverse and Sort */
console.log("Reverse and Sort");

numbers.reverse();
console.log(numbers);

numbers.sort();
console.log(numbers);

numbers.sort((a,b) => a-b);
console.log(numbers);

numbers.sort((a,b) => b-a);
console.log(numbers);



