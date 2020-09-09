import React from "react";

const weapon = (props) => {
  return (
    <div className="col-3">
      <div>
        <img src={props.weaponImage} alt={props.children} />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default weapon;
