/** CHALLENGE 30 - Colback function
 *
 * 1. What will be output to the console?
 * Try to answer without running the code.
 *
 * 2. Is there any way to fix this code?
 */

/** ЗАДАЧА 30 - Колбэк функция
 *
 * 1. Что будет выведено в консоль?
 * Постарайтесь ответить без запуска кода.
 *
 * 2. Нужно ли как-то исправить этот код?
 */

/*setTimeout(function myFn() {
  console.log('Привет из функции myFn')
}, 2000)

myFn() // We can`t see result of this function because it is in a different scope */


//fixed code
setTimeout(() => {
  console.log('Привет из функции myFn')
}, 2000)
