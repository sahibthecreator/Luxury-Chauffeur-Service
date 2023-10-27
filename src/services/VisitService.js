import axios from '@/axios-auth.js';


class VisitService {

    static async getVisits() {
        try {
            const response = await axios.get(`/visits`);
            return response;
        } catch (error) {
            return error.response
        }

    }

    static async saveVisit(data) {
        try {
            const response = await axios.post(`/visits`, { data });
            return response;
        } catch (error) {
            return error.response
        }

    }
}



export default VisitService;
