/** CHALLENGE 65 - Ternary Operator
 *
 * Modify the "isNumber" function using the ternary operator
 */


/** ЗАДАЧА 65 - Тернарный оператор
 *
 * Измените функцию "isNumber", используя тернарный оператор
 */


// function isNumber(a) {
//   if (typeof a === 'number') {
//     return `${a} - это число`
//   } else {
//     return `${a} - это не число`
//   }
// }

//OPTION 1
// const isNumber = (a) => typeof a === 'number' ? `${a} - это число` : `${a} - это не число`
 

//OPTION 2
function isNumber(a) {
   return typeof a === 'number' ? `${a} - это число` : `${a} - это не число`
  }



console.log(isNumber(10))
// 10 - это число

console.log(isNumber('Привет'))
// Привет - это не число

console.log(isNumber(true))
// true - это не число
