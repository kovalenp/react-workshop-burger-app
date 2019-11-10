import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://burger-builder-8c306.firebaseio.com/',
});

export default httpClient;
