/** TASK 45 - Finding Elements in Arrays
 *
 * 1. Create a function isElementInArray with two parameters "searchElement" and "inputArray"
 *
 * 2. If "searchElement" is not an object, simply use the "includes" method
 *
 * 3. If "searchElement" is an object or array,
 * you need to first convert each "inputArray" element to a string,
 * and then apply the "includes" method with an argument that will also be converted to a string
 */

/** ЗАДАЧА 45 - Поиск элементов в массивах
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "searchElement" и "inputArray"
 *
 * 2. Если "searchElement" - не объект, просто используйте метод "includes"
 *
 * 3. Если "searchElement" - это объект или массив,
 * вам необходимо сначала преобразовать каждый элемент "inputArray" в строку,
 * а затем применить метод "includes" с аргументом, который также будет преобразован в строку
 */

const tags = [
  ['javascript', 'es6'],
  ['css', 'flexbox'],
  ['html', 'web-browser'],
]

const fruits = [
  { title: 'Orange', quantity: 10 },
  { title: 'Banana', quantity: 5 },
  { title: 'Apple', quantity: 25 },
]

const isElementInArray = (searchElement, inputArray) => {
  if(typeof searchElement !== "object"){
     return inputArray.includes(searchElement);}
     

   return inputArray
   .map(element => JSON.stringify(element))
   .includes(JSON.stringify(searchElement));
  }
const primitiveTypesArray = [25, 'x', true, undefined, null]

console.log(isElementInArray(['css', 'flexbox'], tags)) // true

console.log(isElementInArray(['flexbox', 'css'], tags)) // false

console.log(isElementInArray({ title: 'Apple', quantity: 25 }, fruits)) // true

console.log(isElementInArray({ title: 'Banana' }, fruits)) // false

console.log(isElementInArray(25, primitiveTypesArray)) // true
