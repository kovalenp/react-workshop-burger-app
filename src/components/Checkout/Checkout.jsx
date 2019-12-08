import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import CheckoutSummary from './CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData';

class Checkout extends Component {


    checkoutCanceled = () => this.props.history.goBack();

    checkoutContinued = () => this.props.history.replace('/checkout/contact-data');

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ingredients}
                    checkoutCanceled={this.checkoutCanceled}
                    checkoutContinued={this.checkoutContinued}
                />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData}
                />
                )} />
            </div>
        )
    }
};

const mapStatetoProps = state => {
    return { ingredients: state.ingredients }
}

export default connect(mapStatetoProps)(Checkout);