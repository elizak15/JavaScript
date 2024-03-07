/** TASK 8 - Assigning a function to a variable
 *
 * 1. Declare a variable and assign a function expression to it
 *
 * 2. The function must have one parameter "name"
 *
 * 3. Return the string "Hi, <name>" from the function.
 *
 * 4. Call the function twice with different arguments
 *
 * 5. Print the result of the function calls to the console
 */

/** ЗАДАЧА 8 - Присваивание функции переменной
 *
 * 1. Объявите переменную и присвойте ей функциональное выражение
 *
 * 2. У функции должен быть один параметр "name"
 *
 * 3. Верните из функции строку "Привет, <name>"
 *
 * 4. Вызовите функцию дважды с разными аргументами
 *
 * 5. Результат вызовов функции выведите в консоль
 */

const greeting = function(name) {
    return "Hi, " + name
}

console.log(greeting("Liza"))
console.log(greeting("Yegor"))