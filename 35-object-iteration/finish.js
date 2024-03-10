/** TASK 35 - Iterating over object properties
 *
 * 1. Iterate through all the object's intrinsic properties
 *
 * 2. If the property name (key) is "key1" or "key3",
 * print the property value to the console.
 */


/** ЗАДАЧА 35 - Итерация по свойствам объекта
 *
 * 1. Переберите все собственные свойства объекта
 *
 * 2. Если имя свойства (ключ) равно "key1" или "key3",
 * выведите значение свойства в консоль.
 */

const myObject = {
  key1: true,
  key5: 10,
  key3: 'abc',
  key4: null,
  key10: NaN,
}

Object.keys(myObject).forEach((key) => {
  if(key == "key1" || key == "key3"){
    console.log(key, myObject[key])
  }
})