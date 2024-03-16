/** TASK 70 - Array destructuring and the "rest" operator
 *
 * Assign values to variables "a", "b" and "c" using the
 * array destructuring and "rest" operator
 *
 * The values of the variables should be the same as in the output in the console
 */


/** ЗАДАЧА 70 - Деструктуризация массивов и "rest" оператор
 *
 * Присвойте переменным "a", "b" и "с" значения, используя
 * деструктуризацию массивов и "rest" оператор
 *
 * Значения переменных должны быть такими как в выводах в консоли
 */

const arr = [1, 2, 3, 4, 5, 6, 7]

const [a, b, ...c] = arr;

// Напишите код здесь

console.log(a)
// 1

console.log(b)
// 2

console.log(c)
// [3, 4, 5, 6, 7]
