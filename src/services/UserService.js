import axios from '@/axios-auth.js';


class UserService {

    static async register(data) {
        try {
            const response = await axios.post(`/register`, { data });
            return response;
        } catch (error) {
            return error.response
        }

    }

    static async login(data) {
        try {
            const response = await axios.post(`/login`, { data });
            return response;
        } catch (error) {
            return error.response
        }
    }

    static async getAll() {
        try {
            const response = await axios.get(`/users`);
            return response;
        } catch (error) {
            return error.response
        }
    }

    static async getById(id) {
        try {
            const response = await axios.get(`/users/${id}`);
            return response;
        } catch (error) {
            return error.response
        }
    }

    static async update(id, user) {
        try {
            const response = await axios.put(`/users/${id}`, { user });
            return response;
        } catch (error) {
            return error.response
        }
    }

    static logout() {
        localStorage.removeItem('id');
        document.location.href = "/authentication";
    }
}



export default UserService;
