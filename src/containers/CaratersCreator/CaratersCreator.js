import React, { Component } from "react";
import Title from "../../components/title/Title";
import Button from "../../components/buttons/Buttons";
import Caracters from "../Caraters/Caracters"

class CaratersCreator extends Component {
  render() {
    return (
      <div className="container">
      <Title>Générateur de personnages</Title>
        <Caracters/>
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
