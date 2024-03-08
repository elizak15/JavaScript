/** TASK 14 - Capitalize String
 *
 * 1. Create a variable and assign any string to it
 *
 * 2. Make sure that the value of this variable is NOT an instance of String
 * Use the "instanceof" operator to do this
 *
 * 3. Make sure that the value of this variable is of type "string" *
 *
 * 4. Create another variable, and its value must be the value
 * of the first variable in capital letters
 *
 * 5. Console the value of the second variable.
 */

/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */


const variableOne = "Yelyzaveta";

console.log(variableOne instanceof String)
console.log(typeof(variableOne))

const variableTwo = variableOne.toUpperCase();
console.log(variableTwo)
