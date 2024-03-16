/** TASK 57 - Transforming an array of objects
 *
 * 1. Create a function "processPosts", which will return a new array of posts
 *
 * 2. Note that.
 * - some property names in each post have been changed
 * - the ID of each post has been increased by 1000
 *
 * 3. The original post array should remain unchanged.
 */

/** ЗАДАЧА 57 - Трансформация массива объектов
 *
 * 1. Создайте функцию "processPosts", которая будет возвращать новый массив сообщений
 *
 * 2. Обратите внимание, что
 *  - некоторые имена свойств в каждом сообщении изменены
 *  - ID каждого сообщения увеличен на 1000
 *
 * 3. Исходный массив постов должен остаться без изменений
 */

const processPosts = (posts) => {
  return posts.map((post) => {
    const {
      postId,
      author: postAuthor,
      commentsQty: postCommentsQty = 0,
    } = post;
    return {
      postId: postId + 1000,
      postAuthor,
      postCommentsQty,
    }
  })
}
const testPosts = [
  {
    postId: 234,
    author: 'robd',
    commentsQty: 5,
  },
  {
    postId: 823,
    author: 'sady',
  },
  {
    postId: 161,
    author: 'merryl',
    commentsQty: 8,
  },
]

const processedPosts = processPosts(testPosts)
console.log(processedPosts)
/*
[
  {
    postId: 1234,
    postAuthor: 'robd',
    postCommentsQty: 5
  },
  {
    postId: 1823,
    postAuthor: 'sady',
    postCommentsQty: 0
  },
  {
    postId: 1161,
    postAuthor: 'merryl',
    postCommentsQty: 8
  }
]
*/

console.log(testPosts)
// оригинальный массив должен остаться без изменений
