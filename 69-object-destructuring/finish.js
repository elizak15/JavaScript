/** TASK 69 - Object Destructuring
 *
 * Create a function "mult", which will multiply
 * values of x, y, z properties of the passed object
 *
 * Return the result of multiplication from the function
 */


/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

// Создайте функцию здесь

// //OPTION 1
// const mult = (arr) => {
//     const {x, y, z} = arr;
//     return x * y * z;
// }

// //OPTION 2
// const mult = ({x, y, z}) => {
//   return x * y * z;
// }

//OPTION 3
const mult = ({x, y, z}) =>  x * y * z;


const result = mult(objectWithNumbers)
console.log(result)
// 300
