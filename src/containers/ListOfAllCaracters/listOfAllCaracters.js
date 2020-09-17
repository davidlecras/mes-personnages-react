import React, { Component } from "react";
import axios from "axios";
import Title from "../../components/title/Title";
import SingleCaracter from "./SingleCaracter/singleCaracter";

class ListOfAllCaracters extends Component {
  state = {
    caracters: null,
    loading: false,
  };

  loadData = () => {
    this.setState({ loading: true });
    axios
      .get("https://caractergeneratorreact.firebaseio.com/caracters.json")
      .then((response) => {
        const caracters = Object.values(response.data);
        this.setState({ caracters: caracters, loading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
  };

  componentDidMount = () => {
    this.loadData();
  };

  componentDidUpdate = (oldProps, oldState) => {
    if (oldProps.refresh !== this.props.refresh) {
      this.loadData();
    }
  };
  render() {
    return (
      <>
        {this.state.loading && <div>Chargement en cours ...</div>}
        {!this.state.loading && this.state.caracters && (
          <div className=" container row no-gutters align-items-center">
            {this.state.caracters.map((caracter, index) => {
              return (
                <div key={index} className="col-6">
                  <Title>{caracter.nameOfCreator}</Title>
                  <SingleCaracter {...caracter.caracter} />
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}
export default ListOfAllCaracters;
