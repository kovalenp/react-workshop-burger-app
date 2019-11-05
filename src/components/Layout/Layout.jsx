import React from 'react';
import Aux from '../hoc/Auxiliry';

import styles from './Layout.css';

const layout =(props) => (
    <Aux>
        <div>Toolbar, SideDrawer</div>
            <main className={styles.Content}>
                {props.children}
            </main>
    </Aux>
);

export default layout;
