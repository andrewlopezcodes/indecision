import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Option from './components/Option';
import Header from './components/Header';


class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state={
        options: []
      };
  }

  componentDidMount(){

    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options){
        this.setState(()=>({ options }));
      }
    } catch (e){
        //Do nothing at all
      }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }


  handleDeleteOptions(){
    this.setState(()=>( { options: [] } ));
  }

  handleDeleteOption(optionToRemove){
    this.setState((prevState)=>({ options: prevState.options.filter((option)=> optionToRemove !== option)
    }));
  }

  handlePick(){
    const numberRandom = Math.floor(Math.random()*this.state.options.length);
    alert(this.state.options[numberRandom]);
  }

  handleAddOption(option){
    if(!option){
      return 'Enter Valid Value To Add Item';
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists'
    }
    this.setState((prevState)=>({ options: prevState.options.concat(option) }));

  }

  render(){

    const subtitle = 'Put your life in the hands of a computer';
    return(
      <div>
        <Header subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length >0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
        handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}




const Action =(props)=>{
  return(
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
          What Should I do?</button>
    </div>
  );
};

const Options =(props) =>{
  return (
    <div>
      <button
        onClick={props.handleDeleteOptions}>
          Remove All</button>
          {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
        props.options.map((index)=> (
          <Option
            key={index}
            optionText={index}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }

    </div>
  );
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
