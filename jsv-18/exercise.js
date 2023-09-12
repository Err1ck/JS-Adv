/*
# Template Strings

Perform a code refactoring by using the Template Literals.

`class Person {
constructor(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;
}
}

const developer = new Person("Mario", "Rossi");
console.log(developer.firstName + " " + developer.lastName);
`
*/

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName(){
    return `The full name is ${this.firstName} ${this.lastName}`
  }
}

const developer = new Person("Mario", "Rossi");
console.log(developer.fullName());
