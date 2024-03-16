/** CHALLENGE 62 - Difference in function declaration
 *
 * 1. Explain the difference between the two variants of function declaration
 *
 * 2. Show this difference by adding additional code under the functions
 *
 * 3. Also call both functions
 */


/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */


// // Function can be called before declaration
// console.log(firstFunction(2, 3))


//The declared function can be assigned to a variable or not 
function firstFunction(a, b) {
  return a + b
}
// // We can assign new value
// firstFunction = '123'
// console.log(firstFunction)


function firstFunction(a, b) {
  return a + b
}


// // Cannot access 'secondFunction' before initialization
// secondFunction(2, 7)

//the function expression has no name, but it can be assigned to a variable
const secondFunction = function (a, b) {
  return a + b
}

// // New value can't be assigned
// secondFunction = true 

console.log(firstFunction(10,10))
const firstSum = firstFunction(5, 5);
console.log(firstSum)
secondFunction(5, 6)
const secondSum = secondFunction(5, 6);
console.log(secondSum)
