/** CHALLENGE 37 - Cycle "for . in"
 *
 * Inside the "for ... in" loop before outputting the property value to the console
 * check that the property is a
 * an object's own property
 */


/** ЗАДАЧА 37 - Цикл "for .. in"
 *
 * Внутри цикла "for .. in" перед выводом значения свойства в консоль
 * выполните проверку того, что свойство является
 * собственным свойством объекта
 */

const myObject = {
  name: 'Mike',
  age: 30,
  city: 'London',
}

Object.prototype.country = 'England'

for (let key in myObject) {
  if(myObject.hasOwnProperty(key)){
    console.log(myObject[key])
  }
}
