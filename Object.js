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

// 2.computed properties
// 키값은 무조건 Stirng 타입으로 가지고 와야한다. 
console.log(userInfo.name);
console.log(userInfo['name']);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(userInfo, 'name');
printValue(userInfo, 'age');

// 3. property value shorthand

const userInfo1 = {name: 'bob', age:10};
const userInfo2 = {name: 'steve', age:20};
const userInfo3 = {name: 'deep', age:30};
const userInfo4 = makeUser('chacha', 40);

console.log(userInfo4);

function makeUser(name, age){
    return {name:name,
            age:age
    }
}

// 4. Constructor function
const userInfo5 = new makeUser('chacha1', 33);
console.log(userInfo5);
function makeUser(name, age){
    // this = {} 생략하고
    this.name = name;
    this.age = age;
    // return this; 를 생략한 것이다.
}

// 5. for..in vs for..of
// for (key in obj)
console.clear();    // 콘솔창에 이전에 있던 값을 지워주는 것 
for (key in userInfo){
    console.log(key);
}

// for(value of iterable) 배열이나 리스트
const arr = [1,2,3,4];
for(let i =0; i<arr.length;i++){
    console.log(arr[i]);
}
for (value of array){
    console.log(value)
}

