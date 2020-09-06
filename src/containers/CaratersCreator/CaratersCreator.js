import React, { Component } from "react";
import Title from "../../components/title/Title";
import Button from "../../components/buttons/Buttons";
import Caracters from "../Caraters/Caracters"

class CaratersCreator extends Component {
  state={
    caracter:{image:1, force:2, agilite:3, intelligence:1},
    points:7,
  };
  previousImageHandler=()=>{
    this.setState(oldState=>{
      const newCaracter= {...this.state.caracter};
      if(oldState.caracter.image<=1) newCaracter.image=3;
      else newCaracter.image --;
      return {caracter:newCaracter}
    })
  }

  nextImageHandler=()=>{
    this.setState(oldState=>{
      const newCaracter= {...this.state.caracter};
      if(oldState.caracter.image>=3) newCaracter.image=1;
      else newCaracter.image ++;
      return {caracter:newCaracter}
    })
  }
  render() {
    return (
      <div className="container">
      <Title>Générateur de personnages</Title>
        <Caracters {...this.state.caracter}
          previous={this.previousImageHandler}
          next={this.nextImageHandler}
          points= {this.state.points}
        />
      <div>Armes</div>
      <div className="row no-gutters">
        <Button
          css="col-6"
          btnType="btn-danger"
          clic={() => {
            return console.log("réinitialiser");
          }}
        >
          Réinitialiser
        </Button>
        <Button
          css="col-6"
          btnType="btn-success"
          clic={() => {
            return console.log("créer");
          }}
        >
          Créer
        </Button>
      </div>
    </div>
    );
  }
}
export default CaratersCreator;
