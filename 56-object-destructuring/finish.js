/** TASK 56 - Object Destructuring
 *
 * 1. Modify the "personInfo" function to get the same output in the console
 *
 * 2. The object returned by the "personInfo" function should contain only abbreviated property names
 */


/** ЗАДАЧА 56 - Деструктуризация объектов
 *
 * 1. Измените функцию "personInfo" так, чтобы получить в консоли такой же вывод
 *
 * 2. Объект, возвращаемый функцией "personInfo", должен содержать только сокращенные имена свойств
 */

const personInfo = (person) => {
   const {
    name,
    age: personAge,
    location: {country : origin, country: homeCity},
    friendsQty = 0,
    createdAtYear = new Date().getFullYear(),
   } = person;


   return {
    name,
    personAge,
    origin,
    homeCity,
    friendsQty,
    createdAtYear
   }
}

const person = {
  name: 'Alice',
  age: 19,
  location: {
    country: 'England',
    city: 'London',
  },
}

const result = personInfo(person)

console.log(result)
/*
{
  name: "Alice",
  personAge: 19,
  origin: "England",
  homeCity: "London",
  friendsQty: 0,
  createdAtYear: *current year*
}
*/
