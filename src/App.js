import React from "react";
import Title from "./components/title/Title";
import Button from "./components/buttons/Buttons";

function App() {
  return (
    <div className="container">
      <Title>Générateur de personnages</Title>
      <div>Personnage</div>
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

export default App;
