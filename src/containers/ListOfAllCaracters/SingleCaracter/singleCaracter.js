import React from "react";
import ImageCaracter1 from "../../../Asset/images/persos/player1.png";
import ImageCaracter2 from "../../../Asset/images/persos/player2.png";
import ImageCaracter3 from "../../../Asset/images/persos/player3.png";
import ImgBow from "../../../Asset/images/armes/arc.png";
import ImgFlail from "../../../Asset/images/armes/fleau.png";
import ImgSword from "../../../Asset/images/armes/epee.png";
import ImgAxe from "../../../Asset/images/armes/hache.png";

const caracter = (props) => {
  let imgPlayer= "";
  
  if(props.image ===1){ imgPlayer= ImageCaracter1}
  if(props.image ===2){ imgPlayer= ImageCaracter2}
  if(props.image ===3){ imgPlayer= ImageCaracter3}

  let imgWeapon= "";
  if(props.weapon ==="bow"){ imgWeapon= ImgBow}
  else if(props.weapon ==="flail"){ imgWeapon= ImgFlail}
  else if(props.weapon ==="axe"){ imgWeapon= ImgAxe}
  else if(props.weapon ==="sword"){ imgWeapon= ImgSword}
  
  return (
    <div className="row no-gutters">
      <div className="col-6">
        <img src={imgPlayer} alt={`joueur ${imgPlayer}`}/>
      </div>
      <div className="col-6">
        Force:{props.force}
        <br />
        Intelligence:{props.intelligence}
        <br />
        Agilité:{props.agility}
        <br />
        <img src={imgWeapon} alt={imgWeapon}/>
      </div>
    </div>
  );
};

export default caracter;
