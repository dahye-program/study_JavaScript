// 함수 선언과 함수 호출의 이해

// 함수 선언
function doSomething(add) {
    console.log(add); // add 함수 내용이 출력됨
    const result = add(2, 3);
    console.log(result);
}

function add(a, b) { // 타입.. 정해주지 않아
    const sum = a + b;
    return sum;
}

// 함수 호출
doSomething(add);

const addFun = add;
console.log(add);
addFun(1, 2); // == add함수

// 괄호쓰면 함수 호출..
// 이름쓰면 함수 자체 전달