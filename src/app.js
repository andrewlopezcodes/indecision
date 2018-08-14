console.log("App.js is running!");

let app ={
  title: 'Get the dog',
  subtitle: "The dog is located at moms",
  options: ['pick-up', "can't do it"]
}

let count = 0;

const addOne = ()=> {
  console.log('heller')
  count++
  renderCounterApp();
}
const minusOne = ()=> {
  console.log('minusOne')
  count--
  renderCounterApp();
}
const change = ()=> {
    console.log('reset')
    count=0;
    renderCounterApp();
}

const templateTwo = (
<div>
  <h1>Count:{count}</h1>
  <button onClick={addOne}>+1</button>
  <button onClick={minusOne}>-1</button>
  <button onClick={change}>reset</button>

</div>
);



const appRoot = document.getElementById('app')



const renderCounterApp = () =>{
  const templateTwo = (
  <div>
    <h1>Count:{count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={change}>reset</button>

  </div>
  );

  ReactDOM.render(templateTwo, appRoot);

};

renderCounterApp();
