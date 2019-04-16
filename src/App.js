import React, { Component } from 'react';
import './App.css';
import Animal from './Animal'

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      message: ""
    };
  }

  updateMessage(name){
    
    this.setState({message: `Whoa... You just pet the ${name}!!` })

    console.log(`Whoa... You just pet the ${name}!!`)
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to the Petting Farm</h1>
        <h3 className='message'>{this.state.message}</h3>
        <div className="animals">
          <Animal name="Horse" onPetAnimal={ (name)=> this.updateMessage(name)} />
          <Animal name="Goat"  onPetAnimal={ (name)=> this.updateMessage(name)} />
          <Animal name="Sheep" onPetAnimal={ (name)=> this.updateMessage(name)} />
        </div>
      </div>
    );
  }
}

export default App;
