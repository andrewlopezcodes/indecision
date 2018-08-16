

class Person {
  constructor(name, location, age=0){
    this.name = name,
    this.location = location,
    this.age = age
  }
  getGreeting(){
    return `Hi, ${this.name}! Your age is ${this.age}.`;
  }
}

class Student extends Person{
  constructor(name, location, age, major){
    super(name, location, age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major
  }
  getGreeting(){
   let description = super.getGreeting();

   if(this.hasMajor()){
    description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person{
  constructor(name, location, age, destination){
    super(name, location, age)
    this.destination = destination;
  }
  hasDestin(){
    return !!this.destination
  }
  getGreeting(){
    let description = super.getGreeting();

    if(this.hasDestin()){
      description += ` And ${this.name} is traveling to ${this.destination}`;
    }
    return description;
  }
}

const yanilda = new Traveler('Yanilda Gonzales', 'Brooklyn', 25, 'London');
console.log(yanilda.getGreeting());
