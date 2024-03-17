/** CHALLENGE 77 - Closures
 *
 * 1. Create a function "createGreeting", inside which create:
 * - a variable "greetingString" with the value "Hey, this is"
 * (declare it using "let")
 * - a "greeting" function with one parameter, which should return
 * a greeting string based on "greetingString" and a parameter,
 * for example, "Hey, this is Bob".
 * - a "changeGreeting" function with one parameter that should
 * change the value of the "greetingString" variable
 *
 * 2. The "createGreeting" function should return an object with two methods:
 * - greet
 * - changeGreeting
 */

/** ЗАДАЧА 77 - Замыкания
 *
 * 1. Создайте функцию "createGreeting", внутри которой создайте:
 *  - переменную "greetingString" с значением "Hey, this is"
 *    (объявите ее используя "let")
 *  - функцию "greet" с одним параметром, которая должна возвращать
 *    строку-приветствие на основании "greetingString" и параметра,
 *    например, "Hey, this is Bob"
 *  - функцию "changeGreeting" с одним параметром, которая должна
 *    изменять значение переменной "greetingString"
 *
 * 2. Функция "createGreeting" должа вернуть объект с двумя методами:
 *  - greet
 *  - changeGreeting
 */


function createGreeting() {
    let greetingString = 'Hey, this is';

    function greet(name){
        return greetingString = `${greetingString} ${name}`;
    }

    function changeGreeting(newGreeting){
        return greetingString = newGreeting;
    }
    return {
        greet,
        changeGreeting,
    }
}
const greeting1 = createGreeting()

console.log(greeting1.greet('Bob'))
// Hey, this is Bob

greeting1.changeGreeting('Good Morning from')

console.log(greeting1.greet('Emily'))
// Good Morning from Emily

/* ____________  */

const greeting2 = createGreeting()

console.log(greeting2.greet('Emily'))
// Hey, this is Emily
