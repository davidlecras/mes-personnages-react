import React, { Component } from "react";
import CaratersCreator from "./containers/CaratersCreator/CaratersCreator";
import ListOfAllCaracters from "./containers/ListOfAllCaracters/listOfAllCaracters";

class App extends Component {
  state={
    refresh: false
  }

  refreshHandler= ()=>{
    this.setState((oldState)=>{
      return{
        refresh: !oldState.refresh
      }
  })}
  render() {
    return (
      <>
        <CaratersCreator refresh={this.refreshHandler}/>
        <ListOfAllCaracters refresh={this.state.refresh}/>
      </>
    );
  }
}

export default App;
