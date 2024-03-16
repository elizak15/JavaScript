/** TASK 68 - Checking for arguments in a function call
 *
 * Modify the function "square" so that if it is called
 * without an argument an error is generated
 * "The "square" function cannot be called without an argument."
 */

/** ЗАДАЧА 68 - Проверка наличия аргументов в вызове функции
 *
 * Измените функцию "square" так, чтобы в случае ее вызова
 * без аргумента генерировалась ошибка
 * "Функция "square" не может быть вызвана без аргумента"
 */

function square(a) {

   // OPTION 1
  // if (a === undefined) {
  //   throw new Error('Функция "square" не может быть вызвана без аргумента')
  // }

  
  //OPTION 2
   if(!arguments.length){
    throw new Error(`Функция "square" не может быть вызвана без аргумента`)
   }
    console.log(a * a)
   } 

square(10)
// 100

square()
// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
