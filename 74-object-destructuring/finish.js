/** TASK 74 - Object Destructuring
 *
 * Create a function "shortPerson" that destructures an object
 * and returns a short version of it
 *
 * Example result:
 * { n: "Mike", c: "Spain", a: 23, p: 100 }
 *
 * If the input object does not have a postsQuantity field,
 * it should get a default value of 0
 */


/** ЗАДАЧА 74 - Деструктуризация объектов
 *
 * Создайте функцию "shortPerson", которая деструктуризирует объект
 * и возвращает его короткую версию
 *
 * Пример результата:
 * { n: "Mike", c: "Spain", a: 23, p: 100 }
 *
 * Если входной объект не имеет поля postsQuantity,
 * он должен получить значение по умолчанию 0
 */


const person1 = {
  name: 'Mike',
  info: {
    country: 'Spain',
    age: 23,
  },
  postsQuantity: 100,
}

const person2 = {
  name: 'Alice',
  info: {
    country: 'Italy',
    age: 25,
  },
}
//OPTION 1
// const shortPerson = (person) => {
//   const {
//     name:n,
//     info: {country: c, age: a},
//     postsQuantity: p = 0,
//   } = person;


//   return {
//     n,
//     c,
//     a,
//     p,
//   }
// }

//OPTION 2
const shortPerson = ({
  name:n,
  info: {country: c, age: a},
  postsQuantity: p = 0,
}) => ({
    n,
    c,
    a,
    p,
  })

console.log(shortPerson(person1))
// { n: "Mike", c: "Spain", a: 23, p: 100 }

console.log(shortPerson(person2))
// { n: "Alice", c: "Italy", a: 25, p: 0 }
