import React, {Component} from 'react';
import Aux from '../hoc/Auxiliry';
import Burger from '../Burger/Burger';
import BuildControls from '../Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    
     constructor(props) {
         super(props);
         this.state = {
            ingredients: {
                 salad: 0,
                 bacon: 1,
                 cheese: 0,
                 meat: 0,
             }
         }
     }
    
    addIngredientHandelr = (type) => {
        const newCount = this.state.ingredients[type] + 1
        const newIngredients = {...this.state.ingredients}
        newIngredients[type] = newCount;
        this.setState({ingredients: newIngredients});
    }

    removeIngredientHandelr = (type) => {
        const newCount = (this.state.ingredients[type] > 0) ? this.state.ingredients[type]- 1 : 0;
        const newIngredients = {...this.state.ingredients}
        newIngredients[type] = newCount;
        this.setState({ingredients: newIngredients});
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls more={this.addIngredientHandelr} less={this.removeIngredientHandelr}/>
            </Aux>
        );
    }
};

export default BurgerBuilder;
