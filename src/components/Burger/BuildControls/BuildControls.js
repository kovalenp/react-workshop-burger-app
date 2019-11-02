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
            {controls.map(el => <BuildControl
             key={el.label}
             label={el.label}
             more={() => props.more(el.type)}
             less={() => props.less(el.type)}
            />)}
        </div>
    );
};

export default BuildControls;