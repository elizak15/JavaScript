/** TASK 32 - Adding elements to the beginning of an array
 *
 * 1. Add elements to the beginning of the array:
 * - first the string "Hello"
 * - then the number 100
 *
 * 2. Print the length of the resulting array to the console
 */


/** ЗАДАЧА 32 - Добавление элементов в начало массива
 *
 * 1. Добавьте элементы а начало массива:
 *  - сначала строку "Привет"
 *  - потом число 100
 *
 * 2. Выведите длину результирующего массива в консоль
 */

const myArray = [true, null]

// Напишите код здесь

console.log(myArray.unshift(100, "Hello"))

// myArray.unshift(100);

console.log(myArray) // [100, "Hello", true, null]

// console.log(myArray.length)
