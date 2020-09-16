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
        switch (arme) {
          case "bow":
            weaponImg = ImgBow;
            break;
          case "sword":
            weaponImg = ImgSword;
            break;
          case "axe":
            weaponImg = ImgAxe;
            break;
          default:
            weaponImg = ImgFlail;
        }
        return (
          <Weapon
            key={arme}
            weaponImage={weaponImg}
            className="col-3"
            isCurrentWeapon={props.currentCaracterWeapon === arme}
            click= {()=>props.changeWeaponCaracter(arme)}
          >
            {arme}{" "}
          </Weapon>
        );
      })}
    </div>
  );
};

export default weapons;
