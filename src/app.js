class IndecisionApp extends React.Component{
  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['happy', 'thursday', 'shoeshine']
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}


class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component{
  render(){
    return(
      <div>
        <button>What Should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component{
  render(){
    return (
      <div>
        {
          this.props.options.map((index)=> <Option key={index} optionText={index} />)
        }
      </div>
    )
  }
}

class Option extends React.Component{
  render(){
    return(
      <div>
        {this.props.optionText}
      </div>
    )
  }
}


class AddOption extends React.Component{
  render(){
    return (
      <div>
        <p>AddOption component here</p>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
