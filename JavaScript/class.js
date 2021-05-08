'use strict';
// Object-oriented programming
// class: template (클래스는 틀!)
// object: instance of a class (틀에 실제로 데이터를 넣어 생성하는 것이 오브젝트!)
// JavaScript classes ( JS == 클래스 도입된지 별로 안됐어!)
//   - introduced in ES6
//   - syntactical sugar over prototype-based inheritance

// 1. Class declartions
class Person {
    // constructor (생성자)
    constructor(name, age) {
        // fields(속성)
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const dahye = new Person('dahye', 23);
console.log(dahye.name, dahye.age);
dahye.speak();

// 2. Getter and setters
class User {
    constructor(firstName, LastName, age) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            throw Error('age can not be negative');
        }
        this._age = value;
    }
}

const user1 = new User('Steve', 'Job', 10);

// 3. Fields(public, private)
// Too soon!
class Experiment {
    publicField = 2; // public 필드
    #privateField = 0; // private 필드, 클래스 내부에서만 값이 보여지고, 접근, 변경 가능
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined 출력

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'dream coding';

    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}

class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('세모');
    }

    getArea() { // 삼각형 넓이 => 함수 재정의(오버라이딩)
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceof
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); // true

