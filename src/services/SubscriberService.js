import axios from '@/axios-auth.js';

class SubscriberService {

    static async saveSubscriber(data) {
        try {
            const response = await axios.post(`/subscribers`, { data });
            return response;
        } catch (error) {
            return error.response
        }

    }

    static async getAllSubscribers() {
        try {
            const response = await axios.get(`/subscribers`);
            return response;
        } catch (error) {
            return error.response
        }
    }
}

export default SubscriberService;
