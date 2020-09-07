import React, { Component } from "react";
import Title from "../../components/title/Title";
import Button from "../../components/buttons/Buttons";
import Caracters from "../Caraters/Caracters";

class CaratersCreator extends Component {
  state = {
    caracter: { image: 1, force: 0, agility: 0, intelligence: 0 },
    points: 7,
  };
  previousImageHandler = () => {
    this.setState((oldState) => {
      const newCaracter = { ...this.state.caracter };
      if (oldState.caracter.image <= 1) newCaracter.image = 3;
      else newCaracter.image--;
      return { caracter: newCaracter };
    });
  };

  nextImageHandler = () => {
    this.setState((oldState) => {
      const newCaracter = { ...this.state.caracter };
      if (oldState.caracter.image >= 3) newCaracter.image = 1;
      else newCaracter.image++;
      return { caracter: newCaracter };
    });
  };

  addPointsHandler = (carac) => {
    this.setState((oldState, props) => {
      if (oldState.caracter[carac] >= 5 || oldState.points <= 0) return null;
      const nbrPtsCrctrstc = oldState.caracter[carac] + 1;
      const newCaracter = { ...oldState.caracter };
      const newPoints = oldState.points - 1;
      newCaracter[carac] = nbrPtsCrctrstc;
      return {
        caracter: newCaracter,
        points: newPoints,
      };
    });
  };

  removePointsHandler = (carac) => {
    this.setState((oldState, props) => {
      if (oldState.caracter[carac] <= 0 || oldState.points >= 7) return null;
      const nbrPtsCrctrstc = oldState.caracter[carac] - 1;
      const newCaracter = { ...oldState.caracter };
      const newPoints = oldState.points + 1;
      newCaracter[carac] = nbrPtsCrctrstc;
      return {
        caracter: newCaracter,
        points: newPoints,
      };
    });
  };

  render() {
    return (
      <div className="container">
        <Title>Générateur de personnages</Title>
        <Caracters
          {...this.state.caracter}
          previous={this.previousImageHandler}
          next={this.nextImageHandler}
          points={this.state.points}
          addPoints={this.addPointsHandler}
          removePoints={this.removePointsHandler}
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
