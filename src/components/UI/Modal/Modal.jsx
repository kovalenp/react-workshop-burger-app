import React from 'react';
import styles from './Modal.css';
import Aux from '../../hoc/Auxiliry';
import Backdrop from '../Backdrop/Backdrop';

const showProprsAreEqual = (prevProp, nextProp) => prevProp.show === nextProp.show;

const Modal = (props) => (
        <Aux>
        <Backdrop show={props.show} close={props.close}/>
        {console.log('[Modal update]')}
        <div 
            className={styles.Modal}
            style = {{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
            }}
        >
            {props.children}
        </div>
        </Aux>
    );

export default React.memo(Modal, showProprsAreEqual);
