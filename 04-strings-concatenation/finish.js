/** TASK 4 - String Merge
 *
 * 1. Declare three variables with values:
 * - your first name
 * - your last name
 * - your profession
 *
 * 2. Create another variable. Its value should be, for example
 * "My name is <Name> <First name> and I am <Profession>"
 *
 * 3. Print the value of the last variable to the console.
 */


/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = "Liza";
const mySurname = "Kurinna";
const myProfession = "Front-End Developer"

const aboutMe = `My name is ` + myName + ` ` + mySurname + ` and I am ` + myProfession;
const aboutMe2 = `My name is ${myName} ${mySurname} and I am ${myProfession}`;


console.log(aboutMe);
console.log(aboutMe2);
