import axios from '@/axios-auth.js';



class BookingService {

    static async createBooking(data) {
        try {
            const response = await axios.post(`/bookings`, { data });
            return response;
        } catch (error) {
            return error.response
        }
    }

    static async handlePayment(data) {
        try {
            const response = await axios.post(`/handle-payment`, { data });
            return response;
        } catch (error) {
            return error.response
        }
    }


    static async createPayment(data) {
        try {
            const response = await axios.post(`/payments`, { data });
            return response;
        } catch (error) {
            return error.response
        }
    }

    static async updatePayment(id, data) {
        try {
            const response = await axios.put(`/payments/${id}`, { data });
            return response;
        } catch (error) {
            return error.response
        }
    }

    static async getAllBookings() {
        try {
            const response = await axios.get(`/bookings`);
            return response;
        } catch (error) {
            return error.response
        }
    }

    static async getBookingByUserId(id) {
        try {
            const response = await axios.get(`/bookings/userId/${id}`);
            return response;
        } catch (error) {
            return error.response
        }
    }

    static async getPaymentByCode(code) {
        try {
            const response = await axios.get(`/payments/${code}`);
            return response;
        } catch (error) {
            return error.response
        }
    }

    static async getAwaitingPaymentsByUserId(userId) {
        try {
            const response = await axios.get(`/payments/awaiting/${userId}`);
            return response;
        } catch (error) {
            return error.response
        }
    }
}



export default BookingService;
