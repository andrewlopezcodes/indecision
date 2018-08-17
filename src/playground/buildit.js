class Visibility extends React.Component{
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false,

    }
  }
  handleToggleVisibility(){
    this.setState((prevState)=>{
      return{
          visibility: !prevState.visibility,

      };
    });
    console.log(this.state);
  }

  render(){
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide' : 'Show'}
        </button>
        {this.state.visibility && (
          <div>
            <p>here are some details</p>
          </div>
        )}
      </div>
    );
  };
}

ReactDOM.render(<Visibility />, document.getElementById('app'))





// console.log("App.js is running!");
//
// const app = {
//   title: 'Visibility Toggle',
//   buttonTitle: ['Hide Message', 'Show Message'],
//   message: 'This is a message to you!'
// }
// let buttonMessage = false;
// const messageOption =()=>{
//   buttonMessage = !buttonMessage
//   renderApp();
// }
// const appRoot = document.getElementById('app')
//
// const renderApp=()=>{
//   const template =(
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={messageOption}>{buttonMessage ? 'Hide Message' : 'Show Message'}</button>
//       {buttonMessage && (
//         <div>
//           <p>{app.message}</p>
//         </div>
//       )}
//     </div>
//
//   );
//   ReactDOM.render(template, appRoot);
// };
// renderApp();
