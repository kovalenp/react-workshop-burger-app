import React from 'react';
import styles from './BuildControl.css'

const BuildControl = props => {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button className={styles.Less} onClick={props.less} disabled={props.isDissabled}>Less</button>
            <button className={styles.More} onClick={props.more}>More</button>
        </div>
    );
};

export default BuildControl;