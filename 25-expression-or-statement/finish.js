/** TASK 25 - Expression or Instruction
 *
 * Identify the type of each JavaScript construct:
 * - expression
 * - instruction (statement)
 * - expression-instruction (expression statement)
 */

/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */


// expression statement
15 

//statement
const myObject = { // <== expression
  x: 10,
  y: true,
} 

// expression statement
myObject.z = 'abc' // <== expression

// expression statement
delete myObject.x 

// statement
let newVariable

// expression statement
newVariable = 30 + 5 // <== expression

console.log(newVariable) //expression statement 

if (newVariable > 10) {
  console.log(`${newVariable} больше 10`)
} // statement
