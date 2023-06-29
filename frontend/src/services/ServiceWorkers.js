import axios from 'axios'
const BASE_URL = 'http://localhost:5000/api/todo';

export const getTodo = async () => {
    try {
        const response = await axios.get(BASE_URL, { responseType: 'json', timeout: 5000 });
        return response;
    }   catch (e) {
        console.log(e.message);
    }
}

export const addTodo = async (todoData) => {
    try {
        const response = await axios.post(BASE_URL, {todoData});
        return response;
    }   catch (e) {
        console.log(e.message);
    }
}

export const deleteTodo = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response;
    }   catch (e) {
        console.log(e.message);
    }
}