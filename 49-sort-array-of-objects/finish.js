/** TASK 49 - Sorting objects in an array
 *
 * 1. Create a function "sortProductsByPrice" with one parameter "products"
 *
 * 2. This function should sort the input array of products
 * by the price of each product in ascending order
 * and return the sorted array
 *
 * 3. The original array should remain unchanged.
 */


/** ЗАДАЧА 49 - Сортировка объектов в массиве
 *
 * 1. Создайте функцию "sortProductsByPrice" с одним параметром "products"
 *
 * 2. Эта функция должна отсортировать входной массив товаров
 * по цене каждого товара в порядке возрастания
 * и вернуть отсортированный массив
 *
 * 3. Оригинальный массив должен остаться без изменений
 */


const sortProductsByPrice = (products) => {
  return [...products].sort((a, b) => a.price - b.price); }


const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
]

const sortedProducts = sortProductsByPrice(inputProducts)

console.log(sortedProducts) // Массив отсортированных товаров

console.log(inputProducts) // Оригинальный массив не должен измениться
