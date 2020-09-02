import React from "react";
import ImageCaracter1 from "../../../Asset/images/persos/player1.png";
import ImageCaracter2 from "../../../Asset/images/persos/player2.png";
import ImageCaracter3 from "../../../Asset/images/persos/player3.png";
import classes from "./ImageCaracter.module.css";

const ImageCaracter = (props) => {
  let imgToPrint = "";
  if (props.numImageCaracter === 1) imgToPrint = ImageCaracter1;
  else if (props.numImageCaracter === 2) imgToPrint = ImageCaracter2;
  else if (props.numImageCaracter === 3) imgToPrint = ImageCaracter3;
  return (
    <div className="row no-gutters text-center align-items-center">
      <div className={['col-1', classes.arrow, classes.left].join(' ')} onClick={props.leftArrow}></div>
      <div className="col">
        <img src={imgToPrint} alt="perso" />
      </div>
      <div className={['col-1', classes.arrow, classes.right].join(' ')} onClick={props.rightArrow}></div>
    </div>
  );
};

export default ImageCaracter;
