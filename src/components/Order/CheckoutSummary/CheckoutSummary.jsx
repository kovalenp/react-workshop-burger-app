import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button'

import styles from './CheckoutSummary.css'

const CheckoutSummary = (props) => (
        <div className={styles.CheckoutSummary}>
            <h1>We hope it tastes great!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
                <Button btnType='Danger' clicked>CANCEL</Button>
                <Button btnType='Success' clicked>CONTINUE</Button> 
        </div>
    );

export default CheckoutSummary;