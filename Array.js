// 배열

// 1. 배열 선언
const arr1 = new Array();
const arr2 = [1,2];

//2. index position
const fruits = ['apple', 'banana'];
console.log(fruits);            // ['apple', 'banana']
console.log(fruits.length);     // 2
console.log(fruits[0]);         // apple
console.log(fruits[1]);         // banana
console.log(fruits[2]);         // undefined

console.log(fruits[fruits.length - 1]);     // 배열에서 제일 마지막에 값이 궁금할 때 사용    

// 3. looping over an array
// for 
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// for of 
for (let fruit of fruits){
    console.log(fruit);
}

//forEach
fruits.forEach(function (fruit, indexm, array){
    console.log(fruit);
});
// 화살표함수
fruits.forEach( (fruit) => console.log(fruit)  );

// 4. 더하기, 빼기, 복사하기
//push: 기존 데이터 다음에 추가된다.
fruits.push('strawberry', 'peach');

console.log(fruits);

// pop: 배열로 저장된 데이터 중에 맨 마지막에 있는 것을 삭제하기
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the benigging
fruits.unshift('strawberry', 'peach');
console.log(fruits);

//shift: remove an item from the benigging
fruits.unshift();
console.log(fruits);

// shift, unshift는 pop, push 보다 느리다.
// splice: remove an item by index position
// fruits.splice(지울 인덱스 시작번호, 지울개수, '추가할 데이터', .....);

fruits.push('strawberry', 'peach');

fruits.splice(1,3);

// combine teo arrays
// concat -> 새로운 데이터 값을 추가하는것 
const fruits2 = ['a', 'b'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. searching
// find the index
// console.clear(); 콘솔에 있는 데이터 삭제
// indexOf -> 데이터의 인덱스번호를 찾아준다.
//            데이터가 없으면 -1로 출력된다.
console.log(fruits);
console.log(fruits.indexOf('a'));

// includes -> 데이터의 유무를 확인하는 것  
console.log(fruits.includes('a'));

// lastIndexOf
// 만약에 같은 데이터가 있으면 인덱스번호는 맨 나중에 있는 데이터의 인덱스번호가 출력된다.

const car = [
    {name:'쏘나타', size:'중형', money:3000}
    , {name:'K5', size:'중형', money:3000}
    , {name:'말리부', size:'중형', money:3000}
]








