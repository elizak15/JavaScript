/** CHALLENGE 61 - Sum of Numbers
 *
 * 1. Create a function "sumNumbers" that will sum all arguments passed to it.
 * The number of arguments is unknown
 *
 * 2. Use console.log inside the function to output the result
 *
 * 3. Also return this sum as the result of the function
 */


/** ЗАДАЧА 61 - Сумма чисел
 *
 * 1. Создайте функцию "sumNumbers", которая будет суммировать все переданные ей аргументы.
 * Количество аргументов неизвестно
 *
 * 2. Используйте console.log внутри функции для вывода результата
 *
 * 3. Также верните эту сумму как результат функции
 */

//OPTION 1
// const sumNumbers = (...args) => {
//     return console.log(args.reduce((sum, element) => sum + element))
// }

//OPTION 2
function sumNumbers() {
    console.log(arguments);
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return console.log(sum)
}
sumNumbers(1, 3)
// 4

sumNumbers(10, 20, 5)
// 35

sumNumbers(2, 5, 80, 1, 10, 12)
// 110
