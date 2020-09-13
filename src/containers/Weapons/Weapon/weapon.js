import React from "react";

const weapon = (props) => {
  return (
    <div className="col-3">
      <div>
        <img
          src={props.weaponImage}
          alt={props.children}
          style={{
            opacity: props.isCurrentWeapon ? "1" : "0.5",
            cursor: "pointer",
          }}
          onClick={props.click}
        />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default weapon;
