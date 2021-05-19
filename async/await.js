// promise를 간결하고 간편하게 사용할 수 있게

// async&await
// Clear style of using promise

// 1. async
// function fetchUser(){
//     // do network request in 10 secs....
//     return 'dahye';
// }
//
// const user = fetchUser();     // 10 초 기다리게됨
// console.log(user);

// promise 사용해서 비동기 처리
// function fetchUser(){
//     return new Promise((resolve, reject)=>{
//         // do network request in 10 secs....
//         resolve 'dahye';
//     });
// }

async function fetchUser(){
    // do network request in 10 secs....
    return 'dahye';
} // 앞에 async 써주면 비동기 처리 됨

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(2000);
    return 'banana';
}

async function getBanana(){
    return delay(1000)
        .then(()=>'banana');
}

async function pickFruits(){
    // const apple = await getApple(); // 1초 기다려
    // const banana = await getBanana(); // 1초 기다려
    // 서로 연관이 없는 경우에 병렬 처리 가능
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple}+${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]); // race는 먼저 처리되는거
}

pickOnlyOne().then(console.log);