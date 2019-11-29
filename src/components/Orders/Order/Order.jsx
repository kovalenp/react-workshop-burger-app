import React from 'react';
import styles from './Order.css';

//TODO: parse ingredients nicely
const Order = (props) => (
    <div key={props.key} className={styles.Order}>
        <p>{JSON.stringify(props.ingredients)}</p>
        <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
    </div>        
);

export default Order;