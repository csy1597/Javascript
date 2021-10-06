// 함수 
function add(num1,num2){
    return num1 + num2;
}

// console.log(add(3,4));

const sum = add(1,2);
console.log(sum);

console.log('-------------------------------------------');

function surprise(operator){
    const result = operator(3,4);
    console.log(result);
}
surprise(add);