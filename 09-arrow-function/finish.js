/** TASK 9 - Arrow Function
 *
 * 1. Declare a variable and assign an arrow function to it
 *
 * 2. The function must have no parameters
 *
 * 3. Explicitly return the string "Hello, world!" from the function.
 *
 * 4. Call the function and print the result to the console
 *
 * 5. Rewrite the function so that the result is returned implicitly
 */

/** ЗАДАЧА 9 - Стрелочная функция
 *
 * 1. Объявите переменную и присвойте ей стрелочную функцию
 *
 * 2. У функции не должно быть параметров
 *
 * 3. Явно верните из функции строку "Привет, мир!"
 *
 * 4. Вызовите функцию и выведите результат в консоль
 *
 * 5. Перепишите функцию так, чтобы результат возвращался неявно
 */

const arrowFn = () => {
    const greeting = "Hello world";
    return greeting;
}

console.log(arrowFn())

const arrowFn2 = () => "Hello world"

console.log(arrowFn2())