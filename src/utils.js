console.log('utils.js is running');


const squares =(x)=> x*x;
const add =(a, b)=> a + b;

const isAdult =(x)=>{
  return x > 21? 'over 21' : 'still a minor'
}

const canDrink =(x)=>{
  return x > 21? "give'em a beer" : " we about to loose our liquor license"
}

const subtract = (a, b) => a - b;

export{subtract as default, squares, add, canDrink, isAdult};
