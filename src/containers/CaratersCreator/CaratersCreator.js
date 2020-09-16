import React, { Component } from "react";
import Title from "../../components/title/Title";
import Button from "../../components/buttons/Buttons";
import Caracters from "../Caraters/Caracters";
import Weapons from "../Weapons/Weapons";
import axios from "axios";

class CaratersCreator extends Component {
  state = {
    caracter: { image: 1, force: 0, agility: 0, intelligence: 0, weapon: null },
    points: 7,
    weapons: null,
    loading: false
  };

  componentDidMount=()=>{
    // Afficher le message pour le chargement
    this.setState({loading:true});
    // Aller chercher les infos dans la DB et modifier le state:
    axios.get("https://caractergeneratorreact.firebaseio.com/weapons.json")
        .then(response =>{
          //Object.values: Récupérer uniquement les valeurs d'un objet et transformer les valeurs en Array
          const weaponsArray= Object.values(response.data);
          this.setState({
            weapons: weaponsArray,
            loading: false
          })
        })
        .catch(error=>{
          console.log(error);
          this.setState({
            loading:false
          })
        })
  }
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

  changeWeaponCaracterHandler = (weapon) => {
    const newCaracter = { ...this.state.caracter };
    newCaracter.weapon = weapon;
    this.setState({ caracter: newCaracter });
  };

  createCaracterHandler= ()=>{
    alert ("Personnage créé!")
  }

  reinstateCaracter= ()=>{
    this.setState({
      caracter: { image: 1, force: 0, agility: 0, intelligence: 0, weapon: null },
      points: 7,
      weapons: ["epee", "fleau", "arc", "hache"],
    })
  }
  
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
        {
          this.state.loading && <div className="text-center alert alert-info">Chargement en cours...</div>
        }
        {
          this.state.weapons &&
          <Weapons weaponsList={this.state.weapons}
        changeWeaponCaracter={this.changeWeaponCaracterHandler}
        currentCaracterWeapon= {this.state.caracter.weapon}
        />
        }
        <div className="row no-gutters">
          <Button
            css="col-6"
            btnType="btn-danger"
            clic={this.reinstateCaracter}
          >
            Réinitialiser
          </Button>
          <Button
            css="col-6"
            btnType="btn-success"
            clic={this.createCaracterHandler}
          >
            Créer
          </Button>
        </div>
      </div>
    );
  }
}
export default CaratersCreator;
