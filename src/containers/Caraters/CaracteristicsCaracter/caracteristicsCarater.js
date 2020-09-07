import React from "react";
import Caracteristics from "./Caracteristics/caracteristics";

const caracteristicsCarater = (props) => {
  return (
    <>
      <div>
        points restants:
        <span className="badge badge-success">{props.pointsAvbl}</span>
      </div>
      <div>
        <Caracteristics
          pointsAvbl={props.force}
          removePoints={() => props.removePoints("force")}
          addPoints={() => props.addPoints("force")}
        >
          Force
        </Caracteristics>
        <Caracteristics
          pointsAvbl={props.agility}
          removePoints={() => props.removePoints("agility")}
          addPoints={() => props.addPoints("agility")}
        >
          Agilité
        </Caracteristics>
        <Caracteristics
          pointsAvbl={props.intelligence}
          removePoints={() => props.removePoints("intelligence")}
          addPoints={() => props.addPoints("intelligence")}
        >
          Intelligence
        </Caracteristics>
      </div>
    </>
  );
};

export default caracteristicsCarater;
