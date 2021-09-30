const walkCount = function(count){

    if(count>10000){
        console.log('good');
    } else{
        console.log('no');
    }

}
walkCount(100);

let num = 0;
for(num = 0; num<=10 ; num++){
    if(num%2===1){
        console.log(`num: ${num}`)
    }
}

class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`${this.color}`);
    }
    getArea(){
        return width * this.height;
    }
}
class Rectangle extends Shape{}
const rectangle = new Rectangle(20, 20, 'green');
rectangle.draw();
