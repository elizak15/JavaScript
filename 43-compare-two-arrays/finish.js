
/** TASK 43 - Comparing Two Arrays
 *
 * 1. Create a function "areArraysEqual" with two parameters "firstArray" and "secondArray"
 *
 * 2. Return "true" if the two arrays are equal, namely:
 * - have the same number of elements
 * - all elements are the same, e.g. firstArray[0] === secondArray[0], etc.)
 *
 * 3. Otherwise return "false"
 *
 * IMPORTANT: Assume that arrays contain elements of primitive types
 */

/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

const a = [1, 2, 3]
const b = [1, 2, 3]

console.log(a === b) // false (Why?) // different reference 

const c = [2, 1, 3]
const d = [1, 2, 3, 4]


const areArraysEqual = (firstArray, secondArray) => {
    if(firstArray.length === secondArray.length && firstArray.every((element, index) => element === secondArray[index])){
        return true;
    }
    return false;
}
console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false

// const areArraysEqual = (firstArray, secondArray) => {
//     let result;
//     if(firstArray.length === secondArray.length){
//         length = firstArray.length;

//         for(let i = 0; i < length; i++){
//             if(firstArray[i] != secondArray[i]){
//                 return false
//             } else {
//                 result = true
//             }
//         }
//         return result;
//     }
//     return false;
// }
// console.log(areArraysEqual(a, b)) // true
// console.log(areArraysEqual(a, c)) // false
// console.log(areArraysEqual(a, d)) // false
