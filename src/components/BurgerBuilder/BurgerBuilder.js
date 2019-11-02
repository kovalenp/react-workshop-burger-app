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
    
    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Aux>
        );
    }
};

export default BurgerBuilder;
