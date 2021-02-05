// --creating multiple object with class & new keyword--//

class Person {
    constructor(firstName,lastName,phone){
        this.firstName =firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
}

const person1 = new Person('Nishat','hasan','01753091999');
const person2 = new Person('Sajib','Ahmed','01601091999');
const person3 = new Person('Nishat','hasan','01753091999');
const person4 = new Person('Sajib','Ahmed','01601091999');
console.log(person1,person2,person3,person4);