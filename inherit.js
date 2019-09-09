//Prototype
function Mouse(name) {
    this.name = name;
}
Mouse.prototype.run = function () {
    console.log(`${this.name} is running`); // Jerry is running
}
const mouse = new Mouse('Jerry');
mouse.run();

//class
class Cat {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name} is running`); // Tom is running
    }
}
const cat = new Cat('Tom');
cat.run();

///////////////////////////////////////////////////////////////////
// Prototype
function Animal(name) {
    this.name = name;
}
Animal.prototype.eat = function () {
    console.log('Eat...');
}
function Bird(name) {
    Animal.apply(this, arguments);
}
Bird.prototype = new Animal('Hoa Mi');
console.log(Bird);

// class
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat = () => console.log('Eating...')
}
class Bird extends Animal {
    fly = () => console('Flying...');
}
class Parrot extends Bird {
    speak = () => console.log('Speaking...')
}
const parrot = new Parrot('Par');
parrot.speak() //Speaking...