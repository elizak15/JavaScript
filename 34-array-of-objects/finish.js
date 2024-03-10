/** TASK 34 - Array of Objects
 *
 * 1. Create an array with 3 objects "cars"
 *
 * 2. Each object must have three properties
 * - carBrand (string)
 * - price (number)
 * - isAvailableForSale (logical value)
 *
 * 3. Add another object to the array
 *
 * 4. Print the resulting array to the console.
 */


/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const car = {
    carBrand: "Skoda",
    price: 2000000,
    isAvailableForSale: true
}
const cars = [
    {
        carBrand: "BMV",
        price: 5000000,
        isAvailableForSale: true
    }, 
    {
        carBrand: "Mercedes",
        price: 4000000,
        isAvailableForSale: true 
    },
    {
        carBrand: "Kia",
        price: 3000000,
        isAvailableForSale: true
    }];

cars.push(car);
console.log(cars)