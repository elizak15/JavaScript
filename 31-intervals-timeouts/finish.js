/** TASK 31 - Intervals and Timeouts
 *
 * Use the following built-in functions:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * You need to output ONLY 5 messages at 2 second intervals to the console:
 * "Message number 1"
 * "Message number 2"
 * "Message number 3"
 * "Message Number 4"
 * "Message number 5"
 * 
 */

/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 * 
 */


let i = 1;
const intervalId = setInterval(() => {
    console.log(`Message number ${i}`)
    i += 1;
}, 2000);

setTimeout(() => clearInterval(intervalId), 12000)



// const gltMes = 5;
// let i = 1;
// const intervalId = setInterval(() => {
//     console.log(`Message number ${i}`)
//     i += 1;
//     if(i > gltMes) {
//         clearInterval(intervalId)
//     }
// }, 2000);


