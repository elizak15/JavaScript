/** TASK 41 - Search for objects in an array
 *
 * 1. Create a function "findPostById" with two parameters:
 * - post ID
 * - array of posts
 *
 * 2. The function should return a post with a certain ID
 *
 * 3. If there is no post with a certain ID in the post array,
 * the function must return "undefined"
 *
 * 4. Also inside the function, print the post ID to the console
 */

/** ЗАДАЧА 41 - Поиск объектов в массиве
 *
 * 1. Создайте функцию "findPostById" с двумя параметрами:
 *  - ID поста
 *  - массив постов
 *
 * 2. Функция должна вернуть пост с определенным ID
 *
 * 3. Если поста с определенным ID в массиве постов нет,
 * функция должна вернуть "undefined"
 *
 * 4. Также внутри функции выведите в консоль ID поста
 */

const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
]

function findPostById(id, posts){
  return posts.find((post) => {post.postId === id})
}
console.log(findPostById(6134, posts)) // { postId: 6134, commentsQuantity: 2 }

console.log(findPostById(4511, posts)) // undefined

console.log(findPostById(5131, posts)) // undefined
