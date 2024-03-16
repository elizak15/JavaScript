/** TASK 55 - Destructuring the result of a function
 *
 * 1. Create a function "minMax" that accepts any number of arguments
 *
 * 2. This function should return an array of two elements:
 * - The first element of the array is the minimum value among all arguments.
 * - The second element of the array is the maximum value among all arguments.
 */


/** ЗАДАЧА 55 - Деструктуризация результата функции
 *
 * 1. Создайте функцию "minMax", которая принимает любое количество аргументов
 *
 * 2. Эта функция должна возвращать массив из двух элементов:
 *  - Первый элемент массива - минимальное значение среди всех аргументов.
 *  - Второй элемент массива - это максимальное значение среди всех аргументов.
 */

function minMax(...args) {
    return [Math.min(...args), Math.max(...args)]
}
let min, max;
/* Вызовите здесь функцию "minMax" с аргументами 24, 5, 34, 10 
и используя деструктуризацию массивов присвойте значения переменным "min" и "max" */
[min, max] = minMax(24, 5, 34, 10);
console.log(min, max); // 5, 34

/* Вызовите здесь функцию "minMax" еще раз с аргументами 18, 23, 103, 70, 80, 25 */
[min, max] = minMax(18, 23, 103, 70, 80, 25);
console.log(min, max); // 18, 103
