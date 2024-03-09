/** TASK 26 - What will be output in the console
 *
 * What will be displayed in the console?
 * Answer the question without running the code
 */

/** ЗАДАЧА 26 - Что будет выведено в консоли
 *
 * Что будет выведено в консоли?
 * Ответьте на вопрос без запуска кода
 */

function fn() {
  console.log('Привет из функции fn')

  return function (a) {
    console.log(a)
  }
}

fn()(true)

// fn() - Привет из функции fn
// a = true
// function(true) = true