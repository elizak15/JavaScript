/** CHALLENGE 38 - Ternary Operator
 *
 * 1. Rewrite the instruction "if . else" without using "else"
 *
 * 2. Rewrite the contents of the function using a ternary operator
 *
 * 3. Replace a normal function with an arrow function
 */


/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

// function isArrayEmpty(inputArray) {
//   if (inputArray.length > 0) {
//     return 'Массив не пустой'
//   } else {
//     return 'Массив пустой'
//   }
// }

// console.log(isArrayEmpty([1, 3]))
// console.log(isArrayEmpty([]))

// Task 1
/**
 * function isArrayEmpty(inputArray) {
 * if (inputArray.length > 0) {
 *   return 'Массив не пустой'
 * } 
 *  return 'Массив пустой'
 * }
 * console.log(isArrayEmpty([1, 3]))
 * console.log(isArrayEmpty([]))
*/


//Task 2
// function isArrayEmpty(inputArray) {
//   return (inputArray.length > 0) ? 'Массив не пустой' : 'Массив пустой' }


// console.log(isArrayEmpty([1, 3]))
// console.log(isArrayEmpty([]))


//Task 3
const isArrayEmpty = (inputArray) =>
 (inputArray.length > 0) ? 'Массив не пустой' : 'Массив пустой' 


console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))