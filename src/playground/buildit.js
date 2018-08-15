console.log("App.js is running!");

const app = {
  title: 'Visibility Toggle',
  buttonTitle: ['Hide Message', 'Show Message'],
  message: 'This is a message to you!'
}
let buttonMessage = false;
const messageOption =()=>{
  buttonMessage = !buttonMessage
  renderApp();
}
const appRoot = document.getElementById('app')

const renderApp=()=>{
  const template =(
    <div>
      <h1>{app.title}</h1>
      <button onClick={messageOption}>{buttonMessage ? 'Hide Message' : 'Show Message'}</button>
      {buttonMessage && (
        <div>
          <p>{app.message}</p>
        </div>
      )}
    </div>

  );
  ReactDOM.render(template, appRoot);
};
renderApp();
