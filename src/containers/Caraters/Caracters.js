import React, { Component } from "react";
import ImageCaracter from "./ImageCaracter/ImageCaracter"

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
          Force: {this.props.force} <br />
          Agilite: {this.props.agilite} <br />
          Intelligence: {this.props.intelligence} <br />
        </div>
      </div>
    );
  }
}
export default Caracters;
