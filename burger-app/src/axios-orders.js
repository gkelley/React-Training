import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a0c1a.firebaseio.com/',
});

export default instance;