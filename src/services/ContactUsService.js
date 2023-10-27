import axios from '@/axios-auth.js';



class ContactUsService {

    static async saveMessage(data) {
        try {
            const response = await axios.post(`/contact-us`, { data });
            return response;
        } catch (error) {
            return error.response
        }

    }

    static async getAllMessages() {
        try {
            const response = await axios.get(`/contact-us`);
            return response;
        } catch (error) {
            return error.response
        }
    }
}



export default ContactUsService;
