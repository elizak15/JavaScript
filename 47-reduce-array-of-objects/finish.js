/** TASK 47 - Using the "reduce" method to create an array
 *
 * 1. Create a function "popularPostsIds" with two parameters "posts" and "minimalComentsQty"
 *
 * * 2. This "popularPostsIds" function should return an array of post IDs of posts,
 * which have at least "minimalComentsQty" number of comments
 */

/** ЗАДАЧА 47 - Использование метода "reduce" для создания массива
 *
 * 1. Создайте функцию "popularPostsIds" с двумя параметрами "posts" и "minimalComentsQty"
 *
 * 2. Эта функция "popularPostsIds" должна возвращать массив идентификаторов постов сообщений,
 * у которых количество комментариев не меньше "minimalComentsQty"
 */

const popularPostsIds = ((posts, minimalComentsQty) => {
   return posts.reduce
   ((postIDs, post) =>
    post.comments >= minimalComentsQty ? postIDs.concat([post.postId]) : postIDs
    , [])
})

const inputPosts = [
  {
    title: 'Как быстро выучить JavaScript?',
    postId: 3421,
    comments: 25,
  },
  {
    title: 'Где используется JavaScript?',
    postId: 5216,
    comments: 3,
  },
  {
    title: 'Какая разница между React и Angular?',
    postId: 8135,
    comments: 12,
  },
]

console.log(popularPostsIds(inputPosts, 10)) // [3421, 8135]

console.log(popularPostsIds(inputPosts, 15)) // [3421]

console.log(popularPostsIds(inputPosts, 50)) // []
