import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

class IndecisionApp extends React.Component{
  state ={
    options: []
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


  handleDeleteOptions =()=>{
    this.setState(()=>( { options: [] } ));
  }

  handleDeleteOption = (optionToRemove)=>{
    this.setState((prevState)=>({ options: prevState.options.filter((option)=> optionToRemove !== option)
    }));
  }

  handlePick =()=>{
    const numberRandom = Math.floor(Math.random()*this.state.options.length);
    alert(this.state.options[numberRandom]);
  }

  handleAddOption =(option)=>{
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



export default IndecisionApp;
