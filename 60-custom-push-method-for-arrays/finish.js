/** TASK 60 - Modified push method for arrays
 *
 * 1. Create a new class "CustomArray" which should extend the built-in "Array" class
 *
 * 2. Add one custom method "customPush" to the new class.
 * This method will have one parameter "newElement".
 *
 * When this method is called, the following steps must be performed:
 * - Add a new element to an existing array
 * (do not use the "push" method)
 * - Change the "length" property of the array (increase it by 1)
 * - Print the following line to the console:
 * "A new <newElement> element was just added to the array"
 *
 * 3. Create an instance of the new class "CustomArray"
 * and test the new method "customPush" and compare it with "push"
 *
 * 4. What happens if the name of a custom method
 * in the "CustomArray" class is also "push" instead of "customPush"?
 * Try this.
 */


/** ЗАДАЧА 60 - Модифицированный метод push для массивов
 *
 * 1. Создайте новый класс "CustomArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте один пользовательский метод "customPush" в новый класс.
 * Этот метод будет иметь один параметр "newElement".
 *
 * При вызове этого метода необходимо выполнить следующие действия:
 *  - Добавить новый элемент в существующий массив
 *  (не используйте для этого метод "push")
 *  - Изменить свойство "length" массива (увеличить его на 1)
 *  - Вывести в консоль следующую строку:
 * "Новый элемент <newElement> был только что добавлен в массив"
 *
 * 3. Создайте экземпляр нового класса "CustomArray"
 * и протестируйте новый метод "customPush" и сравните его с "push"
 *
 * 4. Что произойдет, если имя пользовательского метода
 * в классе "CustomArray" также будет "push" вместо "customPush"?
 * Попробуйте это.
 */


class CustomArray extends Array{
    customPush(newElement) {
        console.log(this.length);
       this[this.length] = newElement;
       console.log(this.length);
       console.log(`Новый элемент ${newElement} был только что добавлен в массив`)
    }
}

const newArray = new CustomArray(1, 2, 3, 10, 15, 18);
newArray.customPush(5)
console.log(newArray)


newArray.push(15)
console.log(newArray)

