// JSON
// JavaScript Object Notation

// - simplest data interchange format
// - lightweight text-based structure
// - easy to read
// - key-value pairs
// - used for serialization and transmission of data between the network the network connection
// - independent programming language and platform

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => { // 함수는 JSON 변환X
        console.log(`${name} can jump~`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']); // name만 출력
console.log(json);

json = JSON.stringify(rabbit, (key, value) =>{
    console.log(`key: ${key}, value: ${value}`);
    //return value;
    return key === 'name'?'dahye':value;
});

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate);
