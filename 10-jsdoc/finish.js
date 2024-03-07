/** TASK 10 - Comment before function
 *
 * 1. Declare a function with two parameters whose values are numbers.
 *
 * 2. This function must return the difference between the first and the second parameter.
 *
 * 3. Add a multi-line comment before the function:
 * - Comment text "Returns the difference of two numbers"
 * - Specify the type of parameters - number
 * - Specify the type of return value - number
 * - Describe the return value - "Difference of numbers".
 *
 * 4. Call the function
 */

/** ЗАДАЧА 10 - Комментарий перед функцией
 *
 * 1. Объявите функцию с двумя параметрами, значения которых - числа
 *
 * 2. Эта функция должна возвращать разницу между первым и вторым параметром
 *
 * 3. Добавьте многострочный комментарий перед функцией:
 *  - Текст комментария "Возвращает разницу двух чисел"
 *  - Укажите тип параметров - number
 *  - Укажите тип возвращаемого значения - number
 *  - Опишите возвращаемое значение - "Разница чисел"
 *
 * 4. Вызовите функцию
 */


/**
 * Returns the difference of two numbers
 * @param {number} numberOne 
 * @param {number} numberTwo 
 * @returns {return} Difference of numbers
 */
function differenceOfNumber(numberOne, numberTwo) {
    const difference = numberOne - numberTwo;
    return difference;
}

console.log(differenceOfNumber(10, 5))