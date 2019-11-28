import React, {Component} from 'react';

import { Route } from 'react-router-dom' 
import CheckoutSummary from '../Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price;
        for (let param of query.entries()) {
            if(param[0]==='price') {
                price = param[1]
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients, totalPrice: price});
    }

    checkoutCanceled = () => this.props.history.goBack();

    checkoutContinued = () => this.props.history.replace('/checkout/contact-data');

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutCanceled={this.checkoutCanceled}
                    checkoutContinued={this.checkoutContinued}
                />
                <Route path={this.props.match.path + '/contact-data'} render={() => (
                    <ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} />
                )} />
            </div>
        )   
    }


};

export default Checkout;