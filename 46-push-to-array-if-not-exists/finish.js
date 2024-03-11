/** TASK 46 - Adding unique elements to an array
 *
 * 1. Create a function "pushIfUnique" with two parameters "inputArray" and "newElement"
 *
 * 2. If "inputArray" already contains "newElement",
 * print "{newElement} is already in the array" to the console
 *
 * 3. Otherwise, add "newElement" to the "inputArray"
 *
 * NOTE: We assume that "inputArray" contains elements of primitive types only
 */


/** ЗАДАЧА 46 - Добавление уникальных элементов в массив
 *
 * 1. Создайте функцию "pushIfUnique" с двумя параметрами "inputArray" и "newElement"
 *
 * 2. Если "inputArray" уже содержит "newElement",
 * выведите в консоль "{newElement} уже находится в массиве"
 *
 * 3. В противном случае добавьте "newElement" в "inputArray"
 *
 * ПРИМЕЧАНИЕ: Мы предполагаем, что "inputArray" содержит элементы только примитивных типов
 */

const myNumbers = [123, 50, 27]

const pushIfUnique = (inputArray, newElement) => {
    if(inputArray.includes(newElement)){
        return console.log(`${newElement} уже находится в массиве`)
    }
    return inputArray.push(newElement)
}

pushIfUnique(myNumbers, 50) // "50 уже в массиве"
console.log(myNumbers) // [123, 50, 27]

pushIfUnique(myNumbers, 80)
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80) // "80 уже в массиве"
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77)
console.log(myNumbers) // [123, 50, 27, 80, 77]
