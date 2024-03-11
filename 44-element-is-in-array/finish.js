/** TASK 44 - Search for elements of primitive types in an array
 *
 * 1. Create a function isElementInArray with two parameters "inputArray" and "searchElement"
 *
 * 2. If "searchElement" is found in "inputArray" - return "true"
 *
 * 3. Otherwise return "false"
 */


/** ЗАДАЧА 44 - Поиск элементов примитивных типов в массиве
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "inputArray" и "searchElement"
 *
 * 2. Если "searchElement" найден в "inputArray" - вернуть "true"
 *
 * 3. В противном случае вернуть "false"
 */

//OPTION 1 
const transports = ['Bus', 'Car', 'Bicycle', 'Airplane']

const isElementInArray = (inputArray, searchElement) => {
    return inputArray.some((element) => (element === searchElement) ? true : false);
}

console.log(isElementInArray(transports, 'Bus')) // true
console.log(isElementInArray(transports, 'Phone')) // false
console.log(isElementInArray(transports, 'Airplane')) // true

//OPTION 2
// const transports = ['Bus', 'Car', 'Bicycle', 'Airplane']

// const isElementInArray = (inputArray, searchElement) => {
//     return inputArray.includes(searchElement);
// }

// console.log(isElementInArray(transports, 'Bus')) // true
// console.log(isElementInArray(transports, 'Phone')) // false
// console.log(isElementInArray(transports, 'Airplane')) // true
