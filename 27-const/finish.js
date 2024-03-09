/** TASK 27 - Const
 *
 * Answer the following questions:
 * 1. Why is there no error after line 13? - Array is a reference type
 * 2. Why is a TypeError generated after line 18? - Because of CONST
 *
 * Change one line of code to make this error disappear.
 * Do not change lines 13, 18
 */

/** ЗАДАЧА 27 - Const
 *
 * Ответьте на следующие вопросы:
 *   1. Почему после 13 строки не выдается ошибка? - Array is a  reference type
 *   2. Почему после строки 18 генерируется TypeError? - Because of CONST
 *
 * Измените одну строку кода, чтобы эта ошибка исчезла.
 * Не меняйте строки 13, 18
 */

let arr = [1, 2] // <-- Declaring a variable using const Объявление переменной используя const

arr.push(3) // reference type

console.log(arr)
// [1, 2, 3]

arr = [1, 2, 3, 4]
// ДО: Uncaught TypeError: Assignment to constant variable.
// ПОСЛЕ: Нет ошибки

console.log(arr)
// [1, 2, 3, 4]
