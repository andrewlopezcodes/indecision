class Person {
  constructor(name, location, age=0){
    this.name = name,
    this.location = location,
    this.age = age
  }
  getGreeting(){
    return `Hi, ${this.name}! Your age is ${this.age}`;
  }
}
const me = new Person('Andrew Lopez', 'Brooklyn', 39);
console.log(me.getGreeting())
const brother1 = new Person('Dierre Lopez', 'Seattle', 41);
console.log(brother1.getGreeting())
const brother2 = new Person('Chad Lopez', 'Brooklyn', 30);
console.log(brother2.getGreeting())
const father = new Person('Andrew Lopez Sr.', 'Brooklyn');
console.log(father.getGreeting())
