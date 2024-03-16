/** TASK 59 - Array Expansion
 *
 * 1. Create a new class "ExtendedArray", which should extend the built-in "Array"
 *
 * 2. Add two custom methods to the new class:
 * - "sum" - it should return the sum of all elements of the array
 * - "onlyNumbers" - it should return a new array,
 * which will contain only numbers from the original array
 *
 * 3. Create several instances of the new "ExtendedArray" class
 * and test both "sum" and "onlyNumbers" methods.
 *
 * * 4. Verify that the other array methods such,
 * such as "forEach", "map" are also available.
 */

/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
    sum(){
        return this.reduce((sum, element) => sum + element, 0) 
    };
    onlyNumbers(){
        return this.filter((el) => typeof el === 'number')
    };

}
const extendedArray = new ExtendedArray(5, 5, 5)
console.log(extendedArray)
console.log(extendedArray.sum())
console.log(extendedArray.onlyNumbers())

const extendedArrayTwo = new ExtendedArray(5, 5, true, 10, false)
console.log(extendedArrayTwo)
console.log(extendedArrayTwo.onlyNumbers().sum())

extendedArrayTwo.forEach(el => console.log(el))