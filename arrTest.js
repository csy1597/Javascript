const cars = [
    {name:'쏘나타', size:'중형', money:3000}
    , {name:'K5', size:'중형', money:3000}
    , {name:'말리부', size:'중형', money:3000}
    , {name:'모닝', size:'소형', money:3000}
    , {name:'스파크', size:'소형', money:3000}
    , {name:'텔루라이드', size:'대형', money:3000}
]

for (let i =0; i< cars.length ; i++){
    console.log(cars[i]);
}
console.log("-----------------------------")
// for of
for (let car of cars){
    console.log(car.name);
}
console.log("-----------------------------")

// forEach, map, filter, reduce

// 1. forEach
cars.forEach(function(car1){
    console.log(car1);
});

console.log("-----------------------------")
// 2. map -> 새로운 배열을 재생성할 수 있다.
const carsNames = cars.map(function(car){
    //return car.name;
    return `내가 사고싶은 세단은 ${car.name} 이다.`
});
console.log(carsNames);

console.log("-----------------------------")
// 3. filter -> 배열 안에서 특정조건을 가지고 잇는 데이터를 출력하는놈
const carSize = cars.filter(function(car){
    return car.size === '대형';
})
console.log(carSize);

console.log("-----------------------------")
// 4. reduce -> 배열 안의 값을 합하는 것이다.

// 기본적인 사용법
const number = [1,2,3,4];
const total = number.reduce(function(a, b){
    console.log(a,b);
    return a+b;
})
console.log(total);

console.log("-----------------------------")
// 데이터가 object 일때 
const scores = [
    {name:'영어', score:50}
    , {name:'수학', score:45}
    , {name:'국어', score:80}
    , {name:'역사', score:100}
];

const scoreTotal = scores.reduce(function(a,b){
    return a + b.score;
}, 0);

console.log(scoreTotal);

