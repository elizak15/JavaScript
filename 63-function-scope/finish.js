/** ЗАДАЧА 63 - Зона видимости функции
 *
 * Что будет выведено в консоль?
 * Ответьте на вопрос без запуска кода
 */

const b = 2
let d = 15

function myFn1(a) {
  let b
  let d = 10
  myFn2(b) // b == undefined
}

function myFn2(a) {
  let c = 5
  console.log(a, b, c, d)
}

myFn1()

// a - undefined, b - 2 - global scope, c - 5, d - 15 - - global scope