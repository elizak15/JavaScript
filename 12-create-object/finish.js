/** TASK 12 - Creating an object
 *
 * 1. Create an object with three properties:
 * - name
 * - surname
 * - favoriteNumber
 *
 * 2. Print the following line to the console
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const aboutMe = {
    name: "Liza",
    surname: "Kurinna",
    favoriteNumber: 15
}
/**const {name, surname, favoriteNumber} = aboutMe;
 * 
 * const aboutMeInfo = `My name is ${name} ${surname} and my favorite number is ${favoriteNumber}`;*/

const aboutMeInfo = `My name is ${aboutMe.name} ${aboutMe.surname} and my favorite number is ${aboutMe.favoriteNumber}`;
console.log(aboutMeInfo);