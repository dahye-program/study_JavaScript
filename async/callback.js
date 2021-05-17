'use strict';

// JavaScript is synchronous(동기적)
// Execute the code block by orger after hoisting. (호이스팅이 된 이후부터 작성한 순서에 맞춰서 실행)
// hoisting : var, function declaration (var변수와 함수 선언이 제일 위로 올라감)

// 콜백함수 : 이 함수를 나중에 다시 불러줘!!
console.log('1'); // 동기
setTimeout(function(){ // 브라우저에게 요청 
    console.log('2'); // 비동기
}, 1000); //1초 지나면 실행해조
// setTimeout(()=>console.log('2'), 1000);
console.log('3'); // 동기

// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello')); // 동기

// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'),2000); // 비동기

// 출력:
// 1
// 3
// hello
// 2
// async callback

// Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id=='dahye'&&password=='dream')||(id==='coding'&&password=='cheer')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        },2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user==='dahye'){
                onSuccess({name: 'dahye', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);

    }
}
