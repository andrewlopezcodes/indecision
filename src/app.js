console.log("App.js is running!");

const app ={
  title: 'Get the dog',
  subtitle: "The dog is located at moms",
  options: []
}

const onFormSubmit = (e)=>{
  e.preventDefault();

  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
    console.log(app.options);
  }
};

const reset = ()=> {
  app.options = [];
  renderApp();
}

const onMakeDecision =() =>{
  const randomNum = Math.floor(Math.random()*app.options.length);
  const option = app.options[randomNum];
  console.log(randomNum)
}

const appRoot = document.getElementById('app')

const numbers = [55, 101, 1000];

const renderApp=()=>{
  const template =(
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
      <button onClick={reset}>reset</button>

      { numbers.map((number)=>{
        return <p>Number: {number}</p>
      })
      }

      <ol>
        { app.options.map((x)=><li>Option: {x}</li>
        )}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
