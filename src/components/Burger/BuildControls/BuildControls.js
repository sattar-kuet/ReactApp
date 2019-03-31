import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';
const controls = [
  {label:'Salad', type:'salad'},
  {label:'Bacon', type:'bacon'},
  {label:'Cheese', type:'cheese'},
  {label:'Meat', type:'meat'}
]


const buildControls =(props)=>(

  <div className={classes.BuildControl}>
  <p>Current Price: <strong> {props.price} </strong> BDT</p>
  {controls.map(ctrl => (
    <BuildControl
    label ={ctrl.label}
    key={ctrl.label}
    addIngredients={()=>props.addIngredients(ctrl.type)}
    removeIngredient={()=>props.removeIngredient(ctrl.type)}
    disabled ={props.disabled[ctrl.type]}

    />
  )
  )}
  <button disabled={!props.purchaseAble} className={classes.OrderButton}> ORDER NOW</button>
  </div>
);

export default buildControls;
