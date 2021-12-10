import axios from 'axios';

//export a base url 
export default axios.create({
    baseURL: "https://api.coingecko.com/api/v3"
})