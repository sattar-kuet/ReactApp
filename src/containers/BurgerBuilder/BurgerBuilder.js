import React,{Component} from 'react';
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const INGREDIENT_PRICE ={
  salad:5,
  bacon:10,
  cheese:20,
  meat:40,
}
class BurgerBuilder extends Component {
  state = {
    ingredients:{
      salad:0,
      bacon:0,
      cheese:0,
      meat:0
    },
    totalPrice:15
  }
  addIngredientHandle = (type)=>{
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updateCount;
    const updatePrice = INGREDIENT_PRICE[type] + this.state.totalPrice;
    this.setState ({
      ingredients : updateIngredients,
      totalPrice : updatePrice
    });


  }
    render(){
      return (
        <Wrapper>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls addIngredients ={this.addIngredientHandle} removeIngredient={this.removeIngredientHandler} />
        </Wrapper>
      )
    }
}

export default BurgerBuilder;
