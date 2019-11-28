import React, { Component } from 'react';
import Button from '../../UI/Button/Button'

import styles from './ContactData.css';

class ContactData extends Component {
    
    state = {
        name: '',
        email: '',
        address: {
            phone: '',
            postalCode: '',
            street: '',
        }
    }
    
    render() {
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input type='text' className={styles.Input} name='name' placeholder='Your Name' />
                    <input type='email'className={styles.Input}  name='email' placeholder='Your Email' />
                    <input type='text' className={styles.Input} name='phone' placeholder='Your Phone' />
                    <input type='text' className={styles.Input} name='street' placeholder='Your Street' />
                    <input type='text' className={styles.Input} name='postalCode' placeholder='Your PostalCode' />
                    <Button 
                        btnType='Success'
                        >ORDER
                    </Button> 
                </form>
            </div>
        );
    }
}

export default ContactData;