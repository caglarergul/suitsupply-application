import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://suitsupply-application.herokuapp.com'
});

export default instance;