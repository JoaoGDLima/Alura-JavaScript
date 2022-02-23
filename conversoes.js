// conversão implícita
const num = 456;
const numS = "456";

console.log( num === numS);
console.log( num == numS);

console.log( num + numS);

// Number()
// String()
console.log( num + Number(numS));

// conversão explícita