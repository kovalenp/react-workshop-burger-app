import React from 'react';
import Logo from '../../UI/Logo/Logo';
import styles from './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = () => (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <Logo />
            <NavigationItems />>
        </header>    
    );

export default Toolbar;