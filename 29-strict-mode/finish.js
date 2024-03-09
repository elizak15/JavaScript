/** TASK 29 - Strict Regime
 *
 * 1. Correct the error that occurs when strict mode is enabled
 *
 * 2. What happens if you disable strict mode? // We haven't error and variable a in the global scope
 */


/** ЗАДАЧА 29 - Строгий режим
 *
 * 1. Исправьте ошибку, которая возникает при включенном строгом режиме
 *
 * 2. Что будет, если отключить строгий режим? // We haven`t error
 */

'use strict'

function myFunction() {
  const a = 2
  return a
}

myFunction()
