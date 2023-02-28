const earlyBird = ["Ade","Kunle", "Gerrad"];
const users = ["Bayo", "Terminator", "Mr Musa"];
const total = [...earlyBird, ...users];

console.log(...earlyBird);
console.log(...users);
console.log(...total);
users.push("Nonso");
console.log(...users);