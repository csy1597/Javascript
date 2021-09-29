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

    get age(){
        return this._age;
    }
    set age(value){
        if(value<0){
            throw Error('nononononono!!!!!')
        }
        this._age = value;
    }

}

const user1 = new user('Steve','Job', -1);
console.log(user1.age);