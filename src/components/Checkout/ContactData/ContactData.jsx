import React, { Component } from 'react';
import Button from '../../UI/Button/Button'
import Aux from '../../hoc/Auxiliry';
import Spinner from '../../UI/Spinner/Spinner';
import Input from '../../UI/Input/Input';
import { postOrder } from '../../../axiosOrders';
import { connect } from 'react-redux';
import OrderFormSchema from './OrderFormSchema';


import styles from './ContactData.css';

class ContactData extends Component {

    state = {
        orderForm: OrderFormSchema,
        displaySpinner: false,
    }

    inputChangeHandler = (event, inputId) => {
        let updatedForm = { ...this.state.orderForm };
        const updatedElement = { ...updatedForm[inputId] };
        updatedElement.value = event.target.value;
        updatedForm[inputId] = updatedElement;
        this.setState({ orderForm: updatedForm });

    }

    orderHandler = async (e) => {
        e.preventDefault();
        this.setState({ displaySpinner: true });
        const formData = {};
        for (let el in this.state.orderForm) {
            formData[el] = this.state.orderForm[el].value
        }
        //TODO: add error handling
        const response = await postOrder(
            {
                ingredients: this.props.ingredients,
                price: this.props.burgerPrice,
                conactDetails: formData
            }
        );
        this.setState({ displaySpinner: false });
        console.log(response);
        this.props.history.push('/')
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.orderForm) {
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
                <form onSubmit={this.orderHandler}>
                    {formElementsArray.map(element => (
                        <Input
                            key={element.id}
                            elementType={element.config.elementType}
                            elementConfig={element.config.elementConfig}
                            value={element.config.value}
                            changed={e => this.inputChangeHandler(e, element.id)}
                        />
                    ))}
                    <Button btnType='Success'>ORDER</Button>
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

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        burgerPrice: state.burgerPrice,
    }
}

export default connect(mapStateToProps)(ContactData);