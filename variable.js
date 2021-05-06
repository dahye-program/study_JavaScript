// JavaScript is very flexible
// flexible === dangerous 유연함은 즉 위험한 것
'use strict'; // 비상식적인 것을 사용하지 못하게 함

// 2. Variable rw(read/write)
// let (added in ES6)
// mutable type
let globalName = 'global name';
{
    let name = 'dahye';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!) --> 아직 쓰는 친구가 있다면 등짝을 때려라
// var는 변수를 선언하기도 전에 사용할 수 있음
// var hoisting (move declaration from bottom to top)
// NO block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constant (선언하고 값을 변경하지 않는 경우) r(read only)
// use const whenever possible
// only use let if variable needs to change
// favor immutable data type always for a few reasons
// security, thread safety, reduce human mistakes
// immutable type
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container

// 숫자는 number로 자동 정의, 최근에 bigInt 추가됨

