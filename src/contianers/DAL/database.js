import axios from 'axios';


// Base API url for the Axios.
const instance = axios.create({
    baseURL: 'https://suitsupply-application.herokuapp.com'
});

export default instance;