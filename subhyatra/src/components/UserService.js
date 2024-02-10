// apiService.js
import axios from 'axios';
import { useUser } from './UserContext';

const BASE_URL = process.env.REACT_APP_API_URL

export const fetchUserInfo = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/user/${userId}`);
        const newUserInfo = response.data;
        const { updateUser } = useUser();
        updateUser(newUserInfo);
    } catch (error) {
        console.error('Error fetching user info:', error);
    }
};
