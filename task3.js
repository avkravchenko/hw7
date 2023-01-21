/* Задание 3.

Написать функцию, которая создает пустой объект, но без прототипа.

function myFunc(){
    let newEmptyObject = Object.create(null, {});
    return console.log(newEmptyObject)
}

myFunc()
 */