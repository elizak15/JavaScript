/** TASK 42 - Check array sorting
 *
 * 1. Create a function "arraySortInfo" with one parameter - "inputArray"
 *
 * 2. If at least one element in the array is not a number - return "Some elements are not numbers".
 *
 * 3. If the numbers in the array are sorted in ascending order - return "The array is sorted in ascending order".
 *
 * 4. If the numbers in the array are sorted descending - return "The array is sorted descending".
 *
 * 5. If the array is not sorted - return "The array is not sorted".
 */

/** ЗАДАЧА 42 - Проверка сортировки массива
 *
 * 1. Создайте функцию "arraySortInfo" с одним параметром - "inputArray"
 *
 * 2. Если хотя бы один элемент в массиве не является числом - вернуть "Некоторые элементы не являются числами"
 *
 * 3. Если числа в массиве отсортированы по возрастанию - вернуть "Массив отсортирован по возрастанию"
 *
 * 4. Если числа в массиве отсортированы по убыванию - вернуть "Массив отсортирован по убыванию".
 *
 * 5. Если массив не отсортирован - вернуть "Массив не отсортирован"
 */

const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]


const isNumber = element => typeof element === "number";
const isSortedIn = (element, index, arr) => (index === 0 || element >= arr[index - 1]);
const isSortedD = (element, index, arr) => (index === 0 || element <= arr[index - 1]);

function arraySortInfo(inputArray){
    
    if(!inputArray.every(isNumber)){
        return "Some elements are not numbers";
    }
    if(inputArray.every(isSortedIn)){
        return "The array is sorted in ascending order"
    }
    if(inputArray.every(isSortedD)){
       return "The array is sorted descending"
    }
    return "The array is not sorted"
}


console.log(arraySortInfo(a)) // Некоторые элементы не являются числами
console.log(arraySortInfo(b)) // Массив отсортирован по возрастанию
console.log(arraySortInfo(c)) // Массив отсортирован по убыванию
console.log(arraySortInfo(d)) // Массив не отсортирован

/**
 * ПОДСКАЗКИ
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Подсказка 1: Используйте метод массивов "every"
 * Подсказка 2: Вы должны использовать два параметра в колбэк функции "element", "index"
 * Подсказка 3: Каждый элемент массива, кроме первого, следует сравнивать с предыдущим
 */
