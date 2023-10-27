import axios from '@/axios-auth.js';


class CarService {

    static async getAll() {
        try {
            const response = await axios.get(`/cars`);
            return response;
        } catch (error) {
            return error.response
        }
    }

    static async getById(id) {
        try {
            const response = await axios.get(`/cars/${id}`);
            return response;
        } catch (error) {
            return error.response
        }
    }

    static async addCar(data) {
        try {
            const response = await axios.post(`/cars`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return response;
        } catch (error) {
            return error.response
        }
    }

    static async updateCar(data, id) {
        
        try {
            const response = await axios.post(`/cars/${id}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            return response;
        } catch (error) {
            return error.response
        }
    }

}

export default CarService;
