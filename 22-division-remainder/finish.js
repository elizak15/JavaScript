/** TASK 22 - The remainder of division
 *
 * 1. Print to the console the remainder of the division of "myNumber1" by "myNumber2".
 *
 * 2. What priority and associativity
 * has on the remainder of division operator?
 *
 * 3. Check the associativity yourself
 */

/** ЗАДАЧА 22 - Остаток от деления
 *
 * 1. Выведите в консоль остаток от деления "myNumber1" на "myNumber2".
 *
 * 2. Какой приоритет и ассоциативность
 * имеет оператор остаток от деления?
 *
 * 3. Проверьте ассоциативность самостоятельно
 */

const myNumber1 = 10; // 10 = 3 + 3 + 3 + 1
const myNumber2 = 3;

const devision = myNumber1 % myNumber2;

//13 - priority
console.log(devision); // left-to-right

console.log(((100 % 2) % 3) % 3);
