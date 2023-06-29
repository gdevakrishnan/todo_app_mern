import axios from 'axios'
const BASE_URL = 'http://localhost:5000/api/todo';

// Service to get all data from database
export const getTodo = async () => {
    try {
        const response = await axios.get(BASE_URL, { responseType: 'json', timeout: 5000 });
        return response;
    }   catch (e) {
        console.log(e.message);
    }
}

// Service to add new Data to the database
export const addTodo = async (todoData) => {
    try {
        const response = await axios.post(BASE_URL, {todoData});
        return response;
    }   catch (e) {
        console.log(e.message);
    }
}

// Service tod Delete a data from the database
export const deleteTodo = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response;
    }   catch (e) {
        console.log(e.message);
    }
}

// Service to update te data from the database
export const patchTodo = async (id, JsonData) => {
    try {
        const response = await axios.patch(`${BASE_URL}/${id}`, JsonData);
        return response;
    }   catch (e) {
        console.log(e.message);
    }
}