import React, { Component } from "react";
import ImageCaracter from "./ImageCaracter/ImageCaracter";
import CaracteristicsCaracter from "./CaracteristicsCaracter/caracteristicsCarater";

class Caracters extends Component {
  render() {
    return (
      <div className="row no-gutters container">
        <div className="col-6">
          <ImageCaracter
            numImageCaracter={this.props.image}
            leftArrow={this.props.previous}
            rightArrow={this.props.next}
          />
        </div>
        <div className="col-6">
          <CaracteristicsCaracter
            pointsAvbl={this.props.points}
            force={this.props.force}
            agility={this.props.agility}
            intelligence={this.props.intelligence}
            addPoints={this.props.addPoints}
            removePoints={this.props.removePoints}
          />
        </div>
      </div>
    );
  }
}
export default Caracters;
