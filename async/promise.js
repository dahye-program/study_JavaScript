'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically!!
const promise = new Promise((resolve, reject)=>{
    // doing some heavy work(network, read files)
    console.log('doing something...');
    setTimeout(()=>{
        resolve('dahye'); //성공했다면
        // reject(new Error('no network')); //실패했다면
    },2000);


}); // 시간이 좀 걸리는 작업들은 promise를 만들어서 비동기적으로 처리하는 것이 좋음

// 2. Consumers: then, catch, finally
promise
.then((value)=>{ // promise 값이 정상적으로 수행이 잘 된다면 value를 받아올거야
    console.log(value);
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{ // 성공이든 실패이든 상관없어 무조건!
    console.log('finally');
})

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(1),1000);
});

fetchNumber
.then(num=>num*2) // 잘 성공하면 num에 2를 곱하고
.then(num=>num*3) // num에 3을 곱하고
.then(num=>{ // 다른 서버로 보내서 새로운 promise를 받을겨
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(num-1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('닭'),1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(`${hen}=>계란`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(`${egg}=>후라이`), 1000);
    });

getHen()
.then(getEgg) //hen=>getEgg(hen)
.then(cook) //egg=>cook(egg)
.then(console.log) //meal=>console.log(meal)
.catch(console.log);