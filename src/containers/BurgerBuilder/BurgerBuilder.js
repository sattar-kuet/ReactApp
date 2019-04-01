import React,{Component} from 'react';
import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
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
    totalPrice:15,
    purchaseAble:false
  }
  updatePurchaseAble =(ingredients) =>{
  const  sum = Object.keys(ingredients).map(ingKey=>{
      return ingredients[ingKey];
    }).reduce((sum,el)=>{
      return sum+el;
    },0);

    this.setState({purchaseAble:sum>0});
  }
  addIngredientHandle = (type)=>{
    const oldCount = this.state.ingredients[type];
    const updateCount = oldCount + 1;
    let updateIngredients = {
      ...this.state.ingredients
    };
    updateIngredients[type] = updateCount;
    const updatePrice = INGREDIENT_PRICE[type] + this.state.totalPrice;
    this.setState ({
      ingredients : updateIngredients,
      totalPrice : updatePrice
    });
    this.updatePurchaseAble(updateIngredients);
  }

  removeIngredientHandler =(type)=>{
    const updateQuantity = this.state.ingredients[type]>0? this.state.ingredients[type] - 1:0;
    const updatePrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    let updateIngredients = { ...this.state.ingredients};
    updateIngredients[type] = updateQuantity;
    this.setState({ingredients: updateIngredients, totalPrice:updatePrice});
    this.updatePurchaseAble(updateIngredients);
  }
    render(){
      const disabledInfo = {...this.state.ingredients};
      for(let key in disabledInfo ){
        disabledInfo[key] = disabledInfo[key]<=0;
      }
      return (
        <Wrapper>
        <Modal />
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
        addIngredients ={this.addIngredientHandle}
        removeIngredient={this.removeIngredientHandler}
        disabled ={disabledInfo}
        price ={this.state.totalPrice}
        purchaseAble ={this.state.purchaseAble}
         />
        </Wrapper>
      )
    }
}

export default BurgerBuilder;
