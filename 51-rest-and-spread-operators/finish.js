/** TASK 51 - Operators "rest" and "spread"
 *
 * 1. Create a function "meanScore",
 * which will take any number of arguments,
 * combine them into a single array and return the average of all arguments,
 * rounded to 2 decimal places.
 *
 * 2. If at least one element in this array is not a number -
 * output the following error to the console:
 * "All arguments in the function call must be numbers!"
 *
 * TIP: In this task, you must use both the "rest" operator,
 * as well as the "spread" operator.
 */

/** ЗАДАЧА 51 - Операторы "rest" (остаток) и "spread" (распространение)
 *
 * 1. Создайте функцию "meanScore",
 * которая будет принимать любое количество аргументов,
 * объединять их в один массив и возвращать среднее значение всех аргументов,
 * округленное до 2 знаков после запятой.
 *
 * 2. Если хотя бы один элемент в этом массиве не является числом -
 * выводим в консоль следующую ошибку:
 * "Все аргументы в вызове функции должны быть числами!"
 *
 * ПОДСКАЗКА: В этом задании вы должны использовать как оператор "rest",
 * так и оператор "spread".
 */

const meanScore = (...args) => {
  if(args.some((value) => typeof value !== "number")){
     console.error('Все аргументы в вызове функции должны быть числами');
     return
  }
  return args.reduce((average, element) => average + element / args.length , 0).toFixed(2);

};
const scores1 = [0, 1.5, 2.5, 3.7]
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2]
const scores3 = [1.3, 2.5, 1.9]
const scores4 = ['abc', 1.3, true, 2.5, 1.9]

console.log(meanScore(...scores1))
// 1.93

console.log(meanScore(...scores1, ...scores2))
// 2.8

console.log(
  meanScore(...scores1, ...scores2, ...scores3)
)
// 2.59

console.log(meanScore(...scores4))
// Все аргументы в вызове функции должны быть числами!
