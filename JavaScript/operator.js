// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`); // $ => 변수값 계산해서 포함

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(2 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // counter = counter+1; preIncrement = counter;

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// 4. Asignment operators
let x = 3;
let y = 6;
x += y; // x = x+y ( 다 알쥐?)
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 > 6);
console.log(6 >= 6);
console.log(3 < 6);
console.log(3 <= 3);

// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`); //함수 같은 거는 뒤에 배치하렴

// && (and)
console.log(`and: ${value1 && value2 && check()}`);

// ! (not)
console.log(!value1);

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('흐엉');
    }
    return true;
}

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // 타입은 다르지만 보니까 똑같네 너네

// === strict equality, no type conversion
console.log(stringFive === numberFive); // 너네 다른 타입이잖아 달라

// Quiz
console.log(0 == false); // t
console.log(0 === false); // f
console.log('' == false); // t
console.log('' === false); // f
console.log(null == undefined); // t
console.log(null === undefined); //f

// 8. Conditional operators: if
const name = 'coder';
if (name === 'dahye') {
    console('Welcome, Everyone');
} else if (name === 'coder') {
    console.log('You are amaizing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2 ;
console.log(name === 'dahye' ? 'yes' : 'no'); // true면 yes, false면 no

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

const browser='Chrome';
switch (browser){
    case 'IE':
        console.log('go away');
        break;
    case "Chrome":
        console.log('love you~');
        break;
    default:
        console.log('um..');
        break;
}

// 11. Loops
// while loop, while the condition is truthy, body code is executed
let i = 3;
while(i>0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first, then check the condiion
do{
    console.log(`do while: ${i}`);
    i--;
}while (i>0)

// for loop (begin; condition; step)
for(i=3; i>0; i--){
    console.log(`for: ${i}`);
}

// nested loops
for(;;){
    for(;;){

    }
}

// break, continue ~~