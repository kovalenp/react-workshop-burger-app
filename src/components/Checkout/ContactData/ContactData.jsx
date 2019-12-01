import React, { Component } from 'react';
import Button from '../../UI/Button/Button'
import Aux from '../../hoc/Auxiliry';
import Spinner from '../../UI/Spinner/Spinner';
import Input from '../../UI/Input/Input';
import { postOrder } from '../../../axiosOrders';

import OrderFormSchema from './OrderFormSchema';


import styles from './ContactData.css';

class ContactData extends Component {
    
    state = {
        orderForm: OrderFormSchema,
        displaySpinner: false,
    }
    
    orderHandler = async (e) => {
        e.preventDefault();
        this.setState({displaySpinner: true});
        //TODO: add error handling
        const response = await postOrder(
            {
                        ingredients: this.props.ingredients,
                        price: this.props.totalPrice,
                        conactDetails: {
                            name: this.state.name,
                            email: this.state.email,
                            address: this.state.address,
                    }}
        );
        this.setState({displaySpinner: false});
        console.log(response);
        this.props.history.push('/')
    }

    render() {
            
        const formElementsArray = [];
        for (let key in this.state.orderForm){
            formElementsArray.push(
                {
                    id: key,
                    config: this.state.orderForm[key],
                }
            )
        }
        
        let content = null;
        let contactForm = (
        <div className={styles.ContactData}>
            <h4>Enter your Contact Data</h4>
            <form>
                {formElementsArray.map(element => (
                    <Input
                        key={element.id}
                        elementType={element.config.elementType}
                        elementConfig={element.config.elementConfig}
                        value={element.config.value}
                    />
                ))}
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