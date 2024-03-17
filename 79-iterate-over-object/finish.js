/** TASK 79 - Searching Object Properties
 *
 * 1. Create a function "sumObjectValues", which will sum up
 * all property values that are numbers.
 *
 * 2. Return the sum of the numbers from the function
 *
 * 3. Make sure to iterate only
 * on the intrinsic properties of the object
 */


/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}
//OPTION 1 
// function sumObjectValues(nums) {
//   let sum = 0

//   Object.keys(nums).forEach((key) => {
//     if (typeof nums[key] === 'number') {
//       sum += nums[key]
//     }
//   })

//   return sum
// }

//OPTION 2
const sumObjectValues = (object) => 
Object.values(object)
.reduce((sum, val) => 
(typeof val === 'number' ?  sum + val : sum), 0)

console.log(Object.entries(objectWithNumbers))
const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42
