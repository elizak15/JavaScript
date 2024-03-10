/** CHALLENGE 36 - Random Numbers
 *
 * 1. Generate a new 4-digit random number.
 * The range for the random number is 1000 - 9999.
 *
 * 2. Make sure that this new random number does not match any of the numbers in the myNumbers array.
 *
 * 3. If it does, you need to generate a new 4-digit number.
 *
 * 4. If there is no match (the new number is unique), add it to the myNumbers array.
 *
 * IMPORTANT: In solving the problem, use the functions:
 * - to generate a random number in a given range
 * - to add a random number to the array and return the modified array
 */

/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */


const MIN = 1000;
const MAX = 9999;

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];
let randomNumber;
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function pushInArray(arr, min, max){
    const newArray = [...arr];
    
    do {
        randomNumber = getRandomArbitrary(min, max)
        console.log(randomNumber)
    } while(newArray.includes(randomNumber))
    newArray.push(randomNumber)
    
    return newArray;
}

   const updatedArray =  pushInArray(myNumbers, MIN, MAX)

    console.log(myNumbers);
    console.log(updatedArray)





