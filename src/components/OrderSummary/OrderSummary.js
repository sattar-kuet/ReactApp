import React from 'react';
import Wrapper from '../../hoc/Wrapper';

const orderSummery = (props)=>{
   const ingridentsummary = Object.keys(props.ingredients).map(ingKey=>{
     return (<li key={ingKey}> <span style={{textTransform: 'capitalize'}}>{ingKey} </span>:{props.ingredients[ingKey]}</li>)
   });
  return(
    <Wrapper>
    <h3>Your Oder</h3>
    <p> A delecious burger with the following ingredients </p>
    <ul>
    {ingridentsummary}
    </ul>
    </Wrapper>
  )
}

export default orderSummery;
