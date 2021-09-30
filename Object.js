// object 선언
// 2가지 방법이 있다.
// object 키와 값의 집합체이다.
// object = {key:value};

// 1. Literals and properties
const obj1 = {};                // object literal
const obj2 = new Object();      // object constructor

// bed 방법
const name = 'chacha';
const age = 30;

print(name, age);

function print(name, age){
    console.log(name);
    console.log(age);
}

// 간단한 방법
function print2(user){
    console.log(user.name);
    console.log(user.age);
}

const userInfo = {name: 'dom', age:40};
print2(userInfo);