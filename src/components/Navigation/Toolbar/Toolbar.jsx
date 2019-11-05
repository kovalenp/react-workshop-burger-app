import React from 'react';
import Logo from '../../UI/Logo/Logo';
import styles from './Toolbar.css'

const Toolbar = () => (
        <header className={styles.Toolbar}>
            <div>MENU</div>
            <Logo />
            <nav>
                ...
            </nav>
        </header>    
    );

export default Toolbar;