import React, { Component } from 'react';
import './Animal.css';



class Animal extends Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
            <div>
                <h3>{this.props.name}</h3>
                <button onClick={ ()=> this.props.onPetAnimal(this.props.name) }>{`Pet the ${this.props.name}`}</button>
            </div>
      );
    }
  }
  
  export default Animal;