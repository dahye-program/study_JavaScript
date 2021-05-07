// Function
// - fundamental building block in the program
// - subprogram can be used multiple items
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body ... return; }
// one function === one thing (하나의 함수는 한 가지의 일만 하도록..)
// naming: doSomething, command, verb (이름은 동사형태로,,)
// e.g. createCardAndPoint => createCard, createPoint
// function is object in JavaScript

function printHello() {
    console.log('Hello');
}

printHello();

function log(message) {
    console.log(message);
}

log('Hello~~');

// + TypeScript는 param, return 타입의 type 명시하도록 되어있음
// function log(message: string): number{
//     console.log(message);
//     return 0;
// }

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

const dahye = {name: 'dahye'};
changeName(dahye);
console.log(dahye);

// 3. Default parameters
function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}

showMessage('hello~'); // 메시지만 전달 => 출력 : hello~ undefined

// 4. Rest parameters
function printAll(...args) { // ... => 배열 형태
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'dahye');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable (지역 변수)
    console.log(globalMessage);
    // return undefined; (생략)
}

printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}

const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
// function upgradeUser(user){
//     if(user.point>10){
//         // long upgrade logic...
//     }
// }

// good ( 조건이 맞지 않을 때 return => 빨리 함수 종료 / 조건이 맞을 때 실행)
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic ...
}

// First-class function ( function은 변수에 할당, 파라미터 전달, return 전달 가능)
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function (이름없는 함수 변수에 바로 할당)
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) { // 함수 호출해서 사용해 => 콜백함수
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes~');
}
// named function
// better debugging in debugger's stack traces => 디버깅할 때 stack trace에 나오게 하려고...
const printNo = function noprint() {
    console.log('nope!');
    // noprint(); // recursions 함수.. 계속 호출,,
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})(); // 선언과 동시에 바로 함수 실행
