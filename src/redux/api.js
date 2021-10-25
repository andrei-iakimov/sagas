import axios from 'axios';

const YOUR_APP_ID = "9faf7436";
const YOUR_APP_KEY = "00f4dfb5cd51add4b15cde030d6008f8";



export const getRecipes = async (query) =>{
    const url = `http://localhost:5000/api/Activities`;
    return await axios.get(url);
}
