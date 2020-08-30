import React from 'react';
import classes from './title.module.css'

const title=(props)=>{
  const cssTitle= `${classes.titleFont} text-center border border-dark rounded bg-primary text-white p-2 m-2`
  return(
    <h1 className={cssTitle}>{props.children}</h1>
  )
}

export default title;