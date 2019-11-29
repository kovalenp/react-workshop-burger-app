import React from 'react';
import styles from './Order.css';

const Order = (props) => (
    <div className={styles.Order}>
        <p>Ingredirents: Salad (1)</p>
        <p>Price: <strong>USD 5.45</strong></p>
    </div>        
);

export default Order;