import React from 'react';
import Caracteristics from './Caracteristics/caracteristics'

const caracteristicsCarater=(props)=>{
  return(
    <>
    <div>
    points restants:
      <span className="badge badge-success">{props.pointsAvbl}</span>
    </div>
    <div>
    <Caracteristics pointsAvbl={props.force}>Force</Caracteristics>
    <Caracteristics pointsAvbl={props.agility}>Agilité</Caracteristics>
    <Caracteristics pointsAvbl={props.intelligence}>Intelligence</Caracteristics>
    </div>
    </>
  )
}

export default caracteristicsCarater;