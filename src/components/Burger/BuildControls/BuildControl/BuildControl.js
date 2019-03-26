import React from 'react';
import classes from './BuildControl.css';
const builControl =(props)=>(
  <div className={classes.BuildControl}>
  <div className={classes.Label}> {props.label}</div>
  <button className={classes.Less}> Less</button>
  <button className={classes.More} onClick={props.addIngredients}> More</button>
  </div>
);

export default builControl;
