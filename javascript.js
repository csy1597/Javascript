// 자바스크립트 연산자

const num1 = 15;
const num2 = 2;

const result1 = num1 + num2;    // 17
const result2 = num1 - num2;    // 13 
const result3 = num1 * num2;    // 30
const result4 = num1 / num2;    // 7.5
const result5 = num1 % num2;    // 1

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

// 제어문
// if, else if, else

const name = 'cha';
if(name === 'cha'){
    console.log('Welcome chacha!!');
}else if(name='seung'){
    console.log('Welcome seung !!');
} else{
    console.log("i don't no");
}

// 삼항연산자
console.log(name==='cha' ? 'yes' : 'no');

// switch

const a = 'KOR';

switch(a){
    case 'KOR':
        console.log('대한민국');
        break;
    case 'USA':
        console.log('미국');
        break;
    case 'JPA':
        console.log('일본');
        break;

}

// while, do while
let i = 3;
while ( i > 0 ){
    console.log(`while: ${i}`)
    break;
    i--;
}

do{
    console.log(`do while: ${i}`)
    i--;
} while ( i > 0 );

// for 

for(i=3; i>0; i--){
    console.log(`for: ${i}`)
}

for (let i =0; i<10;i++){
    for(let j =0; j<10; j++){
        console.log(`a:${i}, b:${j}`)
    }
}

// test
// 1
let z = 0;
for(z=0 ; z <= 10 ; z++){
    if(z%2===0){
        console.log(`z1:${z}`);   
    }
}
for(z=0 ; z <= 10 ; z++){
    if(z>8){
        break;
    }
    console.log(`z2:${z}`);    
}
