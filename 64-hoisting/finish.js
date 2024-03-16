/** CHALLENGE 64 - Hoisting
 *
 * Change the code to correct the error after line 13.
 *
 * The error after line 21 should still be generated.
 * Why does the error after line 21 occur? // c not defined in global scope
 */

/** ЗАДАЧА 64 - Hoisting
 *
 * Измените код, чтобы исправить ошибку после строки 13.
 *
 * Ошибка после строки 21 все равно должна генерироваться.
 * Почему ошибка после строки 21 возникает?
 */

const a = 5
const b = 10


if (b > a) {
  let c = 2;
   c = a + b + c
  // ДО: ReferenceError: Cannot access 'c' before initialization
  // ПОСЛЕ: Нет ошибки
  console.log(c)
  // 17
}

console.log(c)
// Uncaught ReferenceError: c is not defined

// c not defined in global scope
