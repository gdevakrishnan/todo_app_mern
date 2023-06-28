const BASE_URL = 'http://localhost:5000/api/todo';
const getTodo = async () => {
    try {
        const response = (await fetch(BASE_URL)).json();
        return response;
    }   catch (e) {
        console.log(e.message);
    }
}

export default getTodo;