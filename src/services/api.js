import axios from 'axios';

// Prefer same-origin `/api` so Vite can proxy in dev and deployments can serve via one origin.
// Override with `VITE_API_BASE_URL` when needed (e.g., `http://localhost:3001/api`).
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor to add the auth token to headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('debtiq_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Auth API calls
export const authAPI = {
    login: async (credentials) => {
        try {
            const response = await api.post('/auth/login', credentials);
            if (response.data.token) {
                localStorage.setItem('debtiq_token', response.data.token);
                localStorage.setItem('debtiq_user', JSON.stringify(response.data.user));
            }
            return response.data;
        } catch (error) {
            // Only fall back to mock auth when the backend is unreachable (network error).
            // If the backend responds with a 4xx/5xx, surface that error to the UI.
            if (error?.response) {
                const message = error.response.data?.error || 'Login failed';
                throw new Error(message, { cause: error });
            }

            // Mock Bypass: Login anyway (offline/dev mode)
            const mockUser = { 
                id: 'mock-id-' + (credentials.email || 'guest'), 
                username: credentials.email?.split('@')[0] || 'Guest', 
                email: credentials.email || 'guest@example.com' 
            };
            const mockToken = 'mock-jwt-token';
            localStorage.setItem('debtiq_token', mockToken);
            localStorage.setItem('debtiq_user', JSON.stringify(mockUser));
            return { success: true, token: mockToken, user: mockUser };
        }
    },

    signup: async (userData) => {
        try {
            const response = await api.post('/auth/signup', userData);
            if (response.data.token) {
                localStorage.setItem('debtiq_token', response.data.token);
                localStorage.setItem('debtiq_user', JSON.stringify(response.data.user));
            }
            return response.data;
        } catch (error) {
            if (error?.response) {
                const message = error.response.data?.error || 'Signup failed';
                throw new Error(message, { cause: error });
            }

            // Mock Bypass: Signup anyway (offline/dev mode)
            const mockUser = { 
                id: 'mock-id-' + (userData.email || 'guest'), 
                username: userData.username || 'Guest', 
                email: userData.email || 'guest@example.com' 
            };
            const mockToken = 'mock-jwt-token';
            localStorage.setItem('debtiq_token', mockToken);
            localStorage.setItem('debtiq_user', JSON.stringify(mockUser));
            return { success: true, token: mockToken, user: mockUser };
        }
    },
    logout: () => {
        localStorage.removeItem('debtiq_token');
        localStorage.removeItem('debtiq_user');
    },
    getCurrentUser: () => {
        const user = localStorage.getItem('debtiq_user');
        return user ? JSON.parse(user) : null;
    }
};

// Loan API calls
export const loanAPI = {
    getAllLoans: async () => {
        const response = await api.get('/loans');
        return response.data;
    },
    createLoan: async (loanData) => {
        const response = await api.post('/loans', loanData);
        return response.data;
    },
    deleteLoan: async (id) => {
        const response = await api.delete(`/loans/${id}`);
        return response.data;
    },
    getLoanStats: async () => {
        const response = await api.get('/loans/stats');
        return response.data;
    }
};

export default api;
