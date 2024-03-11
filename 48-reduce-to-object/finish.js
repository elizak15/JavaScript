/** TASK 48 - Using the "reduce" method to create an object
 *
 * 1. Create a function "quantitiesByCategories" with one parameter "products"
 *
 * 2. This function should return an object with keys,
 * equal to the categories, and values,
 * equal to the sum of all the quantities in each category
 */


/** ЗАДАЧА 48 - Использование метода "reduce" для создания объекта
 *
 * 1. Создайте функцию "quantitiesByCategories" с одним параметром "products"
 *
 * 2. Эта функция должна возвращать объект с ключами,
 * равными категориям, и значениями,
 * равными сумме всех количеств в каждой категории
 */

//OPTION 1 

const quantitiesByCategories = (products => { 
  return products.reduce((productQnt, product) => {
    const {category, quantity} = product;
    productQnt[category] = (productQnt[category] || 0) + quantity
    return productQnt
}, {})
})



// OPTION 2
// const quantitiesByCategories = (products => { 
//   return products.reduce
//   ((productQnt, product) => {
//     let key = product.category;
//     productQnt.hasOwnProperty(key) ? productQnt[key] += product.quantity : productQnt[key] = product.quantity;
//     return productQnt
// }, {})
// })

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

console.log(quantitiesByCategories(inputProducts))
/* {
  Accessories: 3,
  Phones: 1,
  Watches: 2
} */
