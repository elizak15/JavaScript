/** TASK 66 - Arrow Functions
 *
 * Replace ordinary functions with arrow functions
 */


/** ЗАДАЧА 66 - Стрелочные функции
 *
 * Замените обычные функции на стрелочные
 */

// function mult(a, b) {
//   return a * b
// }

// setTimeout(function () {
//   console.log(mult(5, 10))
// }, 1000)



const mult = (a, b) => a * b


setTimeout(() => console.log(mult(5, 10)), 1000)
// 50
