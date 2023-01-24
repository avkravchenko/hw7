
//Родительская функция
// Функция конструктор для устройств
/* function Device(year){
    this.company = 'apple',
    this.year = year
} */

class Device {
    constructor(year){
        this.company = 'apple',
        this.year = year
    }

    getName = function(){
        console.log(`The name of this ${this.type} is ${this.name}`)
    }
    
    putTheDeviceOnCharging = function(){
        console.log(`${this.name} is on charging now`)
    }
    
    putTheDeviceOnCharging = function(){
        console.log(`${this.name} is on charging, please wait few minutes`)
    }
    
    turnOn = function(){
        console.log(`${this.name} is turned on`)
    }
    
    turnOff = function(){
        console.log(`${this.name} is turned off`)
    }
}

//Делегирующая связь

// Функция конструктор для компьютеров
class Computer extends Device {
    constructor (type, name, model, year) {
        this.type = type,
        this.name = name,
        this.model = model,
        this.year = year
    }
}

// Функция конструктор для телефонов
class Phone extends Device {
    constructor(type, model, name, year){
        this.type = type,
        this.model = model,
        this.name = name, 
        this.year = year 
    }
}

// Функция конструктор для аксессуаров
class Accessories extends Device {
    constructor(type, model, name, year){
        this.type = type,
        this.model = model
        this.name = name,
        this.year = year  
    }
}

// Создание устройств
const macBook = new Computer('laptop', 'MacBook', 'Pro', 2015);
const iphone = new Phone('phone', 'IPhone', 'XR', 2018);
const airPods = new Accessories('Accessor', '2nd generation', 'Airpods', 2023);

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

// Проверка собственных методов
/* macBook.putTheDeviceOnCharging()
airPods.putTheDeviceOnCharging()
airPods.getName()
airPods.turnOff()
iphone.getName() */





iphone.putTheDeviceOnCharging()