/** TASK 52 - Default function parameters
 *
 * 1. Create a function "weatherForecast" with two parameters "city" and "weather"
 *
 * 2. If the second argument is missing,
 * the "weather" parameter should be set to "Great weather!"
 *
 * IMPORTANT:
 * - Solve this WITHOUT the default function parameter first
 * - Comment out the previous solution
 * and solve the same problem with the default function parameter.
 *
 * NOTE:
 * Compare your results carefully with the results of the test calls
 */

/** ЗАДАЧА 52 - Параметры функции по умолчанию
 *
 * 1. Создайте функцию "weatherForecast" с двумя параметрами "city" и "weather"
 *
 * 2. Если второй аргумент отсутствует,
 * параметр "weather" должен получить значение "Отличная погода!"
 *
 * ВАЖНО:
 *  - Сначала решите это БЕЗ параметра функции по умолчанию
 *  - Закомментируйте предыдущее решение
 * и решите ту же задачу с параметром функции по умолчанию
 *
 * ПРИМЕЧАНИЕ:
 * Внимательно сравните свои результаты с результатами тестовых вызовов
 */


//Option 1
// const weatherForecast = (city, weather) => {
//     if(!weather){
//         weather = `${city}: Nice weather!`
//         return weather
//     }
//     return `${city}: ${weather}`
// }

// const weatherForecast = (city, weather = 'Nice weather!') => {
//     return `${city}: ${weather}`
// }

//Option 2
// const weatherForecast = (city, weather) => {
//     weather = weather !== undefined ? weather : 'Nice weather!'
//     return `Прогноз погоды для города ${city}: ${weather}`
// }

const weatherForecast = (city, weather = 'Nice weather!') => {
    return `Прогноз погоды для города ${city}: ${weather}`

}


console.log(weatherForecast('Dubai', 'Солнечно'))
// Прогноз погоды для города Dubai: Солнечно

console.log(weatherForecast('London', 'Небольшой дождь'))
// Прогноз погоды для города London: Небольшой дождь

console.log(weatherForecast('Paris'))
// Прогноз погоды для города Paris: Отличная погода!

console.log(weatherForecast('Miami', ''))
// Прогноз погоды для города Miami:

console.log(weatherForecast('Las Vegas', undefined))
// Прогноз погоды для города Las Vegas: Отличная погода!
