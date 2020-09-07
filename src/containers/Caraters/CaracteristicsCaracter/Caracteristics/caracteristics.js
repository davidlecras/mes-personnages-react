import React from "react";
import classes from "./caracteristics.module.css";

const caracteristics = (props) => {
  let pointsSymbolised = [];
  for (let i = 0; i < props.pointsAvbl; i++) {
    pointsSymbolised.push(<div key={i} className={[classes.points]}></div>);
  }
  return (
    <div className="row no-gutters">
      <div
        className={[classes.signe, classes.minus].join(" ")}
        onClick={props.removePoints}
      ></div>
      <div>{props.children}</div> {pointsSymbolised}
      <div
        className={[classes.signe, classes.plus].join(" ")}
        onClick={props.addPoints}
      ></div>
    </div>
  );
};

export default caracteristics;
