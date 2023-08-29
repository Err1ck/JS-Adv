/*
# Classes

Define a class called `Person` that takes in three parameters in the constructor 
(`firstName`, `lastName` and `age`). 
Create the getters and setters methods for each property and a getter method called `fullName` that returns the full name.

class Person {
// ...
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
*/

class Person {
  constructor(firstName,lastName,age){
    this._firstName=firstName;
    this._lastName=lastName;
    this._age=age;
  }
  get firstName(){
    return this._firstName;
  }
  set firstName(x){
    this._firstName=x;
  }
  get lastName(){
    return this._lastName;
  }
  set lastName(y){
    this._lastName=y;
  }
  get age(){
    return this._age;
  }
  set age(z){
    this._age=z;
  }
  get fullName(){
    return `${this._firstName} ${this._lastName}` 
  }

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person._firstName = 'Maria';
person._lastName = 'Verdi';
console.log(person.fullName);