import React, {Component} from 'react';
import Aux from '../hoc/Auxiliry';
import Burger from '../Burger/Burger';
import BuildControls from '../Burger/BuildControls/BuildControls';
import ingredientPrices from './IngredientPrices';

class BurgerBuilder extends Component {
    
     constructor(props) {
         super(props);
         this.state = {
            ingredients: {
                 salad: 0,
                 bacon: 0,
                 cheese: 0,
                 meat: 0,
             },
             burgerPrice: 4, // Default burger price
             isOrderEnabled: false,
         }
     }
    
    isOrderButtonDisabled = (ingredients) => {
        console.log(Object.values(ingredients));
        const areIngredients = Object.values(ingredients).reduce((a, b) => a+b, 0)
        this.setState({isOrderEnabled: areIngredients > 0})
    }

    addIngredientHandelr = (type) => {
        const newCount = this.state.ingredients[type] + 1
        const newIngredients = {...this.state.ingredients}
        newIngredients[type] = newCount;
        const newPrice = this.state.burgerPrice + ingredientPrices[type];
        this.setState({ingredients: newIngredients, burgerPrice: newPrice});
        this.isOrderButtonDisabled(newIngredients);
    }

    removeIngredientHandelr = (type) => {
        const newCount = (this.state.ingredients[type] > 0) ? this.state.ingredients[type]- 1 : 0;
        const newIngredients = {...this.state.ingredients}
        newIngredients[type] = newCount;
        const newPrice = this.state.burgerPrice - ingredientPrices[type];
        this.setState({ingredients: newIngredients, burgerPrice: newPrice});
        this.isOrderButtonDisabled(newIngredients);
    }

    render () {
        
        const dissabledInfo ={...this.state.ingredients};
        for (let key in dissabledInfo) {
            dissabledInfo[key] = dissabledInfo[key] <= 0;
        }
        
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    burgerPrice={this.state.burgerPrice}
                    more={this.addIngredientHandelr}
                    less={this.removeIngredientHandelr}
                    dissable={dissabledInfo}
                    canOrder={this.state.isOrderEnabled}/>
            </Aux>
        );
    }
};

export default BurgerBuilder;
