import React from 'react';
import styles from './Logo.css';
import burgerLogo from '../../../assets/images/burger-logo.png';

const Logo = (props) => (
        <div className={styles.Logo}>
            <img alt='logo' src={burgerLogo} />
        </div>         
    );

export default Logo;
