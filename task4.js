

/* Задание 4.

Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех включенных приборов (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создайте экземпляры каждого прибора.
Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)



//Родительская функция
// Функция конструктор для устройств
function Device(year){
    this.company = 'apple',
    this.year = year
}

// Функция конструктор для компьютеров
function Computer(type, name, model, year){
    this.type = type,
    this.name = name,
    this.model = model,
    this.year = year
}

// Функция конструктор для аксессуаров
function Accessories(type, model, name){
    this.type = type,
    this.model = model
    this.name = name  
}

// Функция конструктор для телефонов
function Phone(type, model, name, year){
    this.type = type,
    this.model = model,
    this.name = name, 
    this.year = year 
}

//Делегирующая связь
Accessories.prototype = new Device();
Phone.prototype = new Device();
Computer.prototype = new Device();



Device.prototype.getName = function(){
    console.log(`The name of this ${this.type} is ${this.name}`)
}

Device.prototype.putTheDeviceOnCharging = function(){
    console.log(`${this.name} is on charging now`)
}

Accessories.prototype.putTheDeviceOnCharging = function(){
    console.log(`${this.name} is on charging, please wait few minutes`)
}

Device.prototype.turnOn = function(){
    console.log(`${this.name} is turned on`)
}

Device.prototype.turnOff = function(){
    console.log(`${this.name} is turned off`)
}

// Создание устройств
const macBook = new Computer('laptop', 'MacBook', 'Pro', 2015);
const iphone = new Phone('phone', 'IPhone', 'XR', 2018);
const airPods = new Accessories('Accessor', '2nd generation', 'Airpods');


// Добавление собственных свойств
macBook.memory = 128;
macBook.display = 13;

iphone.color = 'coral';
iphone.memory = 128;
iphone.case = 'seagreen';
iphone.color = 'coral';

// Добавление собственных методов
iphone.callThePolice = function(){
    console.log(`Do you want to call the police through your ${this.name} or ${airPods.name}`)
};

airPods.createThePair = function(){
    console.log(`Your ${this.name} are created the pair with your ${iphone.name}`)
}

// Проверка собственных методов, записанных в prototype
macBook.putTheDeviceOnCharging()
airPods.putTheDeviceOnCharging()


// Проверка собственных методов
airPods.getName()
airPods.turnOff()
iphone.getName()

console.log(macBook);
console.log(iphone);
console.log(airPods);
 */