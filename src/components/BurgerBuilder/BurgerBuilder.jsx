import React, { Component } from 'react';
import Aux from '../hoc/Auxiliry';
import Burger from './Burger/Burger';
import BuildControls from './Burger/BuildControls/BuildControls';
import Modal from '../UI/Modal/Modal';
import OrderSummary from './Burger/BurgerSummary/BurgerSummary';
import Spinner from '../UI/Spinner/Spinner';
import * as actions from '../../reducer/actions';
import { connect } from 'react-redux';

class BurgerBuilder extends Component {

    state = {
        isOrdering: false,
        displaySpinner: false,
    }

    isOrderButtonEnabled = () => {
        const areIngredients = Object.values(this.props.ingredients).reduce((a, b) => a + b, 0)
        return areIngredients > 0
    }

    orderSummaryDispalyHandler = () => {
        this.setState({ isOrdering: true });
    }

    abortOrderHandler = () => {
        this.setState({ isOrdering: false });
    }

    processOrderHandler = async () => {
        this.props.history.push('/checkout');
    }

    render() {

        const dissabledInfo = { ...this.props.ingredients };

        let modalContent = null;

        if (this.state.displaySpinner) {
            modalContent = (<Spinner />)
        }

        if (this.state.isOrdering) {
            modalContent = (<OrderSummary
                ingredients={this.props.ingredients}
                price={this.props.burgerPrice}
                cancelClicked={this.abortOrderHandler}
                continueClicked={this.processOrderHandler} />)
        }

        for (let key in dissabledInfo) {
            dissabledInfo[key] = dissabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.isOrdering} spinner={this.state.displaySpinner} close={this.abortOrderHandler}>
                    {modalContent}
                </Modal>
                <Burger ingredients={this.props.ingredients} />
                <BuildControls
                    burgerPrice={this.props.burgerPrice}
                    more={this.props.addIngredient}
                    less={this.props.removeIngredient}
                    dissable={dissabledInfo}
                    canOrder={this.isOrderButtonEnabled()}
                    isOrdering={this.orderSummaryDispalyHandler} />
            </Aux>
        );
    }
};

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        burgerPrice: state.burgerPrice
    };
};


const mapDispatchToProps = dispatch => {
    return {
        addIngredient: ingredient => dispatch({ type: actions.ADD_INGREDIENT, ingredient }),
        removeIngredient: ingredient => dispatch({ type: actions.REMOVE_INGREDIENT, ingredient }),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
