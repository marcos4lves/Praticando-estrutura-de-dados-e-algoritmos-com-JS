// var fibonacci = [1, 1];
// console.time('fibonacci');
// for (var i = 2; i < 100; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//     console.log(fibonacci[i]);
// };
// console.timeEnd('fibonacci')


// const meuArray = [1, 2, 3];

// const iterador = meuArray[Symbol.iterator]();
// console.log(typeof(iterador))
// console.log(typeof(meuArray))
// for (const item of meuArray) {
//   console.log(item);
// }

const numbers=[1,2,3,4,5,6,7,8,10]
let numbersFrom= Array.from(numbers)

let numbersOf= Array.of(...numbers)
console.log(numbersFrom)
console.log(numbersOf)
