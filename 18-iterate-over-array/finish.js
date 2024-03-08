/** TASK 18 - Array element search
 *
 * 1. Create an array with several elements
 *
 * 2. Using one of the array methods, search through all the elements
 * and output each element to the console
 */

/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */


const myArray = [true, 10, "str"];

myArray.forEach((element, index) => {
    console.log(element, index)
})

// myArray.map((element, index) => {
//     console.log(element, index)
// })
