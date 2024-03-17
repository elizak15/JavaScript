/** TASK 72 - Array Copy
 *
 * Create a copy of the array.
 * When changing the array copy, the original array must not be changed
 */


/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

const a = [1, 2, 3]


//OPTION 1
// const b = [...a];

//OPTION 2
// const b = JSON.parse(JSON.stringify(a))

//OPTION 3
const b = Array.from(a)


b.push('newElement')

console.log(a)
// [1, 2, 3]

console.log(b)
// [1, 2, 3, "newElement"]
