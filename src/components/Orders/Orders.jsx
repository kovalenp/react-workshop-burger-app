import React, { Component } from 'react';
import Order from './Order/Order';
import { getOrders } from '../../axiosOrders';
import Spinner from '../UI/Spinner/Spinner';
import Aux from '../hoc/Auxiliry';

class Orders extends Component {
    
    state = {
        displaySpinner: true,
        orders: null,
    }

    async componentDidMount() {
        const orders = await getOrders();
        this.setState({orders, displaySpinner: false});
    }
    
    renderOrders = () => (
        <Aux>
        {this.state.orders.map(order => (
            <Order 
                key={order.id}
                ingredients={order.ingredients}
                price={+order.price}
            />
        ))}
        </Aux>
    )

    render() {
        return (
            <div>
                {this.state.displaySpinner ? (<Spinner />) : this.renderOrders()}
            </div>
        );
    }
}

export default Orders;