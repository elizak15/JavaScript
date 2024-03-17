/** TASK 73 - Template Strings
 *
 * Create a function "carInfo" that returns information about a car:
 * - A car is considered cheap if its price <= 20000
 * - A car is considered expensive if its price > 20000
 *
 * The output in the console must match the one at the end of the task
 */

/** ЗАДАЧА 73 - Шаблонные строки
 *
 * Создайте функцию "carInfo", которая возвращает информацию о машине:
 *  - Автомобиль считается дешевым, если его цена <= 20000
 *  - Автомобиль считается дорогим, если его цена > 20000
 *
 * Выводы в консоли должны совпадать с теми, которые в конце задачи
 */

const cars = [
  { brand: 'Honda', price: 13000 },
  { brand: 'Rolls-Royce', price: 120000 },
]

//OPTION 1
// const carInfo = (car) => car.price <= 20000 ? `${car.brand} - ${car.price}$ и это дешёвая машина` : `${car.brand} - ${car.price}$ и это дорогая машина`

//OPTION 2  
// const carInfo = (car) => `${car.brand} - ${car.price}$ и это ${car.price <= 20000 ? `дешёвая` : `дорогая`} машина`

//OPTION 3 
const carInfo = ({brand, price}) => `${brand} - ${price}$ и это ${price <= 20000 ? `дешёвая` : `дорогая`} машина`


cars.forEach((car) => console.log(carInfo(car)))
// Цена автомобиля Honda - 13000$ и это дешёвая машина
// Цена автомобиля Rolls-Royce - 120000$ и это дорогая машина
