import axios from 'axios';

export const httpClient = axios.create({
    baseURL: 'https://burger-builder-8c306.firebaseio.com/',
});

export const postOrder = async orderData => {
    return await httpClient.post('/orders.json', orderData);
} 

export const getOrders = async () => {
    const response = await httpClient.get('/orders.json');
    const fetchedOrders = [];
    for (let key in response.data) {
        fetchedOrders.push({...response.data[key]});
    }
    return fetchedOrders;
} 
