// 클래스
class Person{
    // constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    // methods
    sprak(){
        console.log(`${this.name}: hello`);
    }
}

const cha = new Person('chacha', 30);
console.log(cha.name);
console.log(cha.age);
cha.sprak();

// getter and setter

class user {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
}