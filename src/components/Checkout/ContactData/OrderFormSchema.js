const elementGenerator = (elementType, type, placeholder, value='') => (
    {
        elementType,
        elementConfig: {
            type,
            placeholder,
        },
        value,
    }
)

export default {
    name: elementGenerator('input', 'text', 'Your Name'),
    street: elementGenerator('input', 'text', 'Street'),
    postalCode: elementGenerator('input', 'text', 'Postal Code'),
    email: elementGenerator('input', 'email', 'Email'),
    deliveryMethod: {
        elementType: 'select',
        elementConfig: {
            options: [{value: 'fast', displayValue: 'Fastest'}, {value: 'cheap', displayValue: 'Cheapest'}],
        },
        value: ''
    }
};
