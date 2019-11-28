import React, {Component} from 'react';
import CheckoutSummary from '../Order/CheckoutSummary/CheckoutSummary'

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
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients});
    }

    checkoutCanceled = () => this.props.history.goBack();

    checkoutContinued = () => this.props.history.replace('/checkout/contact-data');

    render() {
        return (
            <CheckoutSummary 
                ingredients={this.state.ingredients} 
                checkoutCanceled={this.checkoutCanceled}
                checkoutContinued={this.checkoutContinued}
            />
        )
    }


};

export default Checkout;