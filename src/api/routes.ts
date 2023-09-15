import axios from 'axios';

const apiUrl = 'http://localhost:3000';

async function fetchDataUsers() {
    try {
      const response = await axios.get(`${apiUrl}/api/users`); 
      return response.data;
    } catch (error) {
      console.error('Error fetching data from backend:', error);
      throw error;
    }
  }
  