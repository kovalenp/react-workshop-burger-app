import React, { Component } from 'react';
import Button from '../../UI/Button/Button'
import Aux from '../../hoc/Auxiliry';
import Spinner from '../../UI/Spinner/Spinner';
import httpClient from '../../../axiosOrders';

import styles from './ContactData.css';

class ContactData extends Component {
    
    state = {
        name: 'Pavel',
        email: 'pavel@email.com',
        address: {
            phone: '777444555',
            postalCode: '29012',
            street: 'Malaga Street',
        },
        displaySpinner: false,
    }
    
    orderHandler = async (e) => {
        e.preventDefault();
        this.setState({displaySpinner: true});
        const response = await httpClient.post(
            '/orders.json', 
            {
                ingredients: this.props.ingredients,
                price: this.props.totalPrice,
                conactDetails: {
                    name: this.state.name,
                    email: this.state.email,
                    address: this.state.address,
            }});
        this.setState({displaySpinner: false});
        console.log(response);
        this.props.history.push('/')
    }

    render() {
            let content = null;
            let contactForm = (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input type='text' className={styles.Input} name='name' placeholder='Your Name' />
                    <input type='email'className={styles.Input} name='email' placeholder='Your Email' />
                    <input type='text' className={styles.Input} name='phone' placeholder='Your Phone' />
                    <input type='text' className={styles.Input} name='street' placeholder='Your Street' />
                    <input type='text' className={styles.Input} name='postalCode' placeholder='Your PostalCode' />
                    <Button 
                        btnType='Success'
                        clicked={this.orderHandler}
                        >ORDER
                    </Button> 
                </form>
            </div>
        )
        
        this.state.displaySpinner ? content = (<Spinner />) : content = contactForm;

        return (
            <Aux>
                {content}
            </Aux>
        );
    }
}

export default ContactData;