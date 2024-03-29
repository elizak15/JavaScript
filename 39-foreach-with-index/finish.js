/** TASK 39 - Array element search
 *
 * 1. Create a function "cityInfo" with two parameters,
 * which returns the string
 * "London is at the index 0 in the myCities array"
 *
 * 2. Search all the elements of the "myCities" array,
 * for each element call the function "cityInfo"
 * and print the result of the function call to the console
 */

/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore']

const cityInfo = (index, city) => `${city} is at the index ${index} in the myCities array`;
    
myCities.forEach((city, index) => console.log(cityInfo(index, city)));


// const myCities = ['London', 'New York', 'Singapore']

// const cityInfo = (city, index) => console.log(`${city} is at the index ${index} in the myCities array`);
    
// myCities.forEach(cityInfo);


