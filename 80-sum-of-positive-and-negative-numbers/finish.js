/** CHALLENGE 80 - Sum of positive and negative numbers
 *
 * 1. Create a function "sumPositiveNegative" that takes an array
 * and sums positive and negative numbers separately.
 *
 * 2. The function should return an object like this:
 * {
 * positive: 74, // sum of all positive numbers
 * negative: -54 // sum of all negative numbers
 * }
 */

/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

//OPTION 1
function sumPositiveNegative(arr){
    return arr.reduce((sums, num) => {
        if(num > 0){
            return {
                ...sums,
                positive: sums.positive + num,
            }
        }

        return {
            ...sums,
            negative: sums.negative + num
        }
    }, {positive: 0, negative: 0})
}

//OPTION 2
// const sumPositiveNegative = (num) => {
//     let positive = 0;
//     let negative = 0;
//     num.forEach(el => el > 0  ? positive += el : negative += el);
//     return `positive: ${positive} negative: ${negative}`
// }

const result = sumPositiveNegative(nums)

console.log(result)
// { positive: 74, negative: -54 }
