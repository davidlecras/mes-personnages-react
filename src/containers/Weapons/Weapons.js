import React from "react";
import Weapon from "./Weapon/weapon";
import ImgBow from "../../Asset/images/armes/arc.png";
import ImgFlail from "../../Asset/images/armes/fleau.png";
import ImgSword from "../../Asset/images/armes/epee.png";
import ImgAxe from "../../Asset/images/armes/hache.png";

const weapons = (props) => {
  return (
    <div className="row no-gutters text-center">
      {props.weaponsList.map((arme) => {
        let weaponImg;
        let weaponName;
        switch (arme) {
          case "bow":
            weaponImg = ImgBow;
            weaponName= 'Arc'
            break;
          case "sword":
            weaponImg = ImgSword;
            weaponName= 'Épée'
            break;
          case "axe":
            weaponImg = ImgAxe;
            weaponName= 'Hache'
            break;
          default:
            weaponImg = ImgFlail;
            weaponName= 'Fléau d\'arme'
        }
        return (
          <Weapon
            key={arme}
            weaponImage={weaponImg}
            className="col-3"
            isCurrentWeapon={props.currentCaracterWeapon === arme}
            click= {()=>props.changeWeaponCaracter(arme)}
          >
            {weaponName}{" "}
          </Weapon>
        );
      })}
    </div>
  );
};

export default weapons;
