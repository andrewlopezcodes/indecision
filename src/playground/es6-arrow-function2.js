const add = function(a, b){
  return a + b;
}
console.log(add(55, 1));



const user ={
  name: 'Andrew',
  cities: ['Brooklyn', 'Jacksonville', 'North Chicago'],
  printPlacesLived(){
    return this.cities.map((city)=> this.name + ' has lived in ' + city +'!');
  }
};

console.log(user.printPlacesLived());

const multiplier ={
  multiplyBy: 5,
  numbers: [2, 4, 6, 8, 10],
  multiply(){
    return this.numbers.map((x)=> x * this.multiplyBy )
  }
};
console.log(multiplier.multiply());
