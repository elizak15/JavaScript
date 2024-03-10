/** TASK 40 - Convert JSON to JavaScript Objects
 *
 * 1. Convert an array of JSON objects into an array of JavaScript objects
 *
 * 2. Print the resulting array to the console
 *
 * 3. Print the "postId" of the second object to the console
 *
 * 4. Console the "commentsQuantity" of the last object.
 */

/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
]

const newObject = postsJSON.map(JSON.parse)
console.log(newObject)
console.log(newObject[1].postId)
console.log(newObject[3].commentsQuantity)



