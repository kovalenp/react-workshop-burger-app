import React from 'react';
import styles from './Modal.css';
import Aux from '../../hoc/Auxiliry';
import Backdrop from '../Backdrop/Backdrop';

const propsAreEqual = (prevProp, nextProp) => prevProp.show === nextProp.show && prevProp.spinner === nextProp.spinner;

const Modal = (props) => (
        <Aux>
        <Backdrop show={props.show} close={props.close}/>
        <div 
            className={styles.Modal}
            style = {{
                opacity: props.show ? '1' : '0',
            }}
        >
            {props.children}
        </div>
        </Aux>
    );

export default React.memo(Modal, propsAreEqual);
