import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.css'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
]

const BuildControls = props => {
    return (
        <div className={styles.BuildControls}>
            <p>Current price: <strong>{props.burgerPrice.toFixed(2)}</strong></p>
            {controls.map(el => <BuildControl
             key={el.label}
             label={el.label}
             more={() => props.more(el.type)}
             less={() => props.less(el.type)}
             isDissabled={props.dissable[el.type]} 
            />)}
            <button className={styles.OrderButton} disabled={!props.canOrder}>Order now</button>
        </div>
    );
};

export default BuildControls;