import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-8c306.firebaseio.com/'
});

export default instance;