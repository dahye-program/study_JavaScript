'use strict';

// Array

// 1. Declaration
// const arr1 = new Array();
// const arr2 = [1, 2, 3, 4, 5];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
// performs the specified action for each element in an array. ( 배열 안의 element마다 특정한 동작이 수행됨 )
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push => add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop => remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift => add an item to the biginning
fruits.unshift('lemon'); // 앞의 것부터 추가하기
console.log(fruits);

// shift => remove an item to the biginning
fruits.shift(); // 앞에 것부터 삭제하기
console.log(fruits);

// shift, unshift are slower than pop, push !!!!
// splice => remove an item by index position
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1, 1); // 시작 index, 몇개 지울건지(몇개지울건지 입력 안하면 선택한 index부터 끝까지 다 지움)
console.log(fruits);
fruits.splice(1, 1, 'banana'); // 1 index에 바나나 추가

// combine to arrays
const fruits2 = ['coconut', 'watermelon'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);

// indexOf
console.log(fruits.indexOf('apple')); // apple 있는 index number 출력
console.log(fruits.indexOf('banana'));

// includes
console.log(fruits.includes('coconut')); // true/false 출력
console.log(fruits.includes('peach'));

// lastIndexOf
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple')); // 처음의 apple index number 출력
console.log(fruits.lastIndexOf('apple')); // 마지막의 apple index number 출력
