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



