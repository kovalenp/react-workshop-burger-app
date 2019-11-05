import React from 'react';
import Aux from '../../hoc/Auxiliry';
import Button from '../../UI/Button/Button';

function OrderSummary(props) {
    
    const ingredientsSummary = Object.keys(props.ingredients).map(
        (ingredient, i) => {
            return (
                <li key={ingredient+i}> 
                    <span style={{textTransform: 'capitalize'}}>{ingredient}</span> : {props.ingredients[ingredient]}
                </li>
            )
        }
    );
    
    return (
        <Aux>
            <h3>Your order:</h3>
            <p>Brewesta burger with following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <h4>Total price: {props.price.toFixed(2)}</h4>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.cancelClicked}>Cancel</Button>
            <Button btnType='Success' clicked={props.continueClicked}>Continue</Button>
        </Aux>
    );
}

export default OrderSummary;