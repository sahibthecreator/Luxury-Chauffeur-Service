import axios from 'axios'

const url = 'http://localhost:3070';

class UserService {
    // static async createCustomer(email, fullname) {
    //     const res = await axios.post(`${url}/subs`, {
    //         email, fullname
    //     });
    //     return res;
    // }
    // Create subscription
    static async createSubscription(customerId, priceId) {
        const res = await axios.post(`${url}/subs`, {
            customerId, priceId
        });
        return res;
    }
    // Delete subscription
    static async deleteSubscription(subscriptionId) {
        const res = await axios.post(`${url}/delete`, {
            subscriptionId,
        });
        return res;
    }

    static async register(data) {
        const response = await axios.post(`${url}/register`, { data });
        return response.data;
    }
}

// export async function register(data) {
//     const response = await axios.post('http://localhost:3070/register', { data });
//     return response.data;
// }

export async function login(data) {
    const response = await axios.post('http://localhost:3070/login', { data });
    if (!response.data.error)
        document.location.reload();
    return response.data;
}

export async function getById(id) {
    const response = await axios.get(`http://localhost:3070/user/${id}`);
    return response.data;
}

export async function uploadProfilePicture(file, userId) {
    const data = new FormData();
    data.append('file', file);
    const response = await axios.put(`http://localhost:3070/userpicture/${userId}`, data);
    return response.data;
}


export function logout() {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('user_id');
    document.location.reload();
}

export default UserService;
