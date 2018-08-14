function squared(num){
  return num * num;
}

const squareArrow = (num) => {return num * num};

const squareNum = (x) => x*x;
console.log(squareNum(4));


const fullName = "Rodger doger";
let firstName;
const getFirstName = (x) => firstName = x.split(' ')[0];
console.log(getFirstName(fullName));
