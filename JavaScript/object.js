// Objects
// one of the JavaScript's data types
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of object
// Object = { key : value }

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const dahye = {name: 'dahye', age: 23};
print(dahye);

// with JavaScript magic (dynamically typed language)
// can add properties later
dahye.hasJob = false; // 동적으로 나중에 생성할 수 있지만 하지마 ,,,

delete dahye.hasJob;

// 2. Computed properties
// key should be always string
console.log(dahye.name);
console.log(dahye['name']);
dahye['hasJob'] = true;

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(dahye, 'name');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 20};
const person2 = {name: 'steve', age: 21};
const person3 = {name: 'dave', age: 22};
// const person4 = makePerson('dahye', 30);
const person4 = new Person('dahye', 20);

// function makePerson(name, age){ // object 만드는 함수
//     return{
//         name,
//         age,
//     };
// }

// 4. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 5. in operator: property existence check(key in obj) => 해당하는 key가 obj 안에 있는지 확인!
console.log('name' in dahye); // true
console.log('age' in dahye); // true
console.log('random' in dahye); // false
console.log(dahye.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in dahye) {
    console.log(key);
}

// for(value of iterable)
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// object.assign(dest, [obj1, obj2, ojb3, ... ])
const user = {name: 'dahye', age: '23'};
const user2 = user;
user.name = 'coder';
console.log(user); // name: coder, age: 23 출력

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key]; // 첫번째 key: name, 두번째 key: age
}
console.log(user3);

const user4 = Object.assign({}, user);
// Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에있는애가 덮어씌움 red => blue
console.log(mixed.color); // blue 출력
console.log(mixed.size); // big 출력