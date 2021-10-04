const cars = [
    {name:'쏘나타', size:'중형', money:3000}
    , {name:'K5', size:'중형', money:3000}
    , {name:'말리부', size:'중형', money:3000}
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

